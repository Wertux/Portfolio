export interface AccessCode {
  code: string;
  label: string;
  validDays: number;
  createdAt: string; // ISO date string
}

// Edit this array to manage access codes. No web UI needed.
export const ACCESS_CODES: AccessCode[] = [
  {
    code: "SWIYU2026",
    label: "Initial launch code",
    validDays: 90,
    createdAt: "2026-04-28",
  },
];

export const PROTECTED_SLUGS = ["swiyu-trust-badges"];

export const COOKIE_NAME = "project_access";

async function getKey(): Promise<CryptoKey> {
  const secret = process.env.PROJECT_SECRET;
  if (!secret) throw new Error("PROJECT_SECRET is not set");
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function signToken(code: string): Promise<string> {
  const key = await getKey();
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(code)
  );
  return `${code}:${toHex(sig)}`;
}

export async function verifyToken(token: string): Promise<string | null> {
  const sep = token.indexOf(":");
  if (sep === -1) return null;
  const code = token.slice(0, sep);
  const given = token.slice(sep + 1);
  const expected = await signToken(code);
  const expectedSig = expected.slice(expected.indexOf(":") + 1);
  // Constant-time comparison to prevent timing attacks
  if (given.length !== expectedSig.length) return null;
  let diff = 0;
  for (let i = 0; i < given.length; i++) {
    diff |= given.charCodeAt(i) ^ expectedSig.charCodeAt(i);
  }
  return diff === 0 ? code : null;
}

export function isCodeValid(code: string): boolean {
  const entry = ACCESS_CODES.find((a) => a.code === code);
  if (!entry) return false;
  const expiresAt =
    new Date(entry.createdAt).getTime() + entry.validDays * 86_400_000;
  return Date.now() < expiresAt;
}

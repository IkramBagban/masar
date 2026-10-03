export type AccountRecord = {
  email: string;
  signedUpAt: string;
};

type ApiOptions = {
  method?: "GET" | "POST";
  body?: unknown;
  token?: string;
};

function readError(payload: unknown, status: number): string {
  if (
    payload !== null &&
    typeof payload === "object" &&
    "error" in payload &&
    typeof payload.error === "string"
  ) {
    return payload.error;
  }
  return `Request failed (${status})`;
}

async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const headers = new Headers();
  if (options.body !== undefined) {
    headers.set("Content-Type", "application/json");
  }
  if (options.token) {
    headers.set("Authorization", `Bearer ${options.token}`);
  }

  const response = await fetch(path, {
    method: options.method ?? "GET",
    headers,
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
  });

  const text = await response.text();
  let payload: unknown = null;
  if (text) {
    try {
      payload = JSON.parse(text) as unknown;
    } catch {
      payload = null;
    }
  }

  if (!response.ok) {
    throw new Error(readError(payload, response.status));
  }

  return payload as T;
}

function isAccountRecord(value: unknown): value is AccountRecord {
  if (value === null || typeof value !== "object") return false;
  if (!("email" in value) || !("signedUpAt" in value)) return false;
  return (
    typeof value.email === "string" && typeof value.signedUpAt === "string"
  );
}

export async function fetchAccount(token: string): Promise<AccountRecord> {
  const payload = await apiFetch<unknown>("/api/account", { token });
  if (!isAccountRecord(payload)) {
    throw new Error("Request failed (200)");
  }
  return payload;
}

export type WaitlistPayload = {
  name: string;
  email: string;
  locale: "en" | "ar";
};

export type WaitlistResponse = {
  status: "joined" | "already_joined";
};

export async function joinWaitlist(
  payload: WaitlistPayload,
): Promise<WaitlistResponse> {
  const result = await apiFetch<WaitlistResponse>("/api/waitlist", {
    method: "POST",
    body: payload,
  });
  if (
    result === null ||
    typeof result !== "object" ||
    (result.status !== "joined" && result.status !== "already_joined")
  ) {
    throw new Error("Request failed (200)");
  }
  return result;
}

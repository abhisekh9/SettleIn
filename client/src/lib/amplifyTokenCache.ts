// lib/amplifyTokenCache.ts

import { fetchAuthSession } from "aws-amplify/auth";

let cachedToken: string | null = null;

export const cacheToken = async () => {
  const session = await fetchAuthSession();
  const { idToken } = session.tokens ?? {};
  cachedToken = idToken?.toString() ?? null;
};

export const getCachedToken = () => cachedToken;

import axios from "axios";
import { logger } from "./logger";

export const loadSecrets = async (): Promise<void> => {
  const addr = process.env.VAULT_ADDR;

  if (!addr) {
    logger.warn("VAULT_ADDR not set — using .env fallback values");
    return;
  }

  const token = process.env.VAULT_TOKEN;
  const path = process.env.VAULT_SECRET_PATH;

  if (!token || !path) {
    throw new Error("VAULT_TOKEN and VAULT_SECRET_PATH are required when VAULT_ADDR is set");
  }

  const { data } = await axios.get(`${addr}/v1/${path}`, {
    headers: { "X-Vault-Token": token },
  });
console.log("data",data)
  const secrets: Record<string, string> = data?.data?.data ?? {};
  const count = Object.keys(secrets).length;

  for (const [key, value] of Object.entries(secrets)) {
    process.env[key] = String(value);
  }

  logger.info(`Loaded ${count} secrets from HashiCorp Vault`);
};

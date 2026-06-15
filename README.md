# HashiCorp Vault Integration with Node.js

This project demonstrates how to load application secrets from HashiCorp Vault into a Node.js application during startup while keeping the existing `process.env` usage unchanged.

## Prerequisites

* Node.js
* HashiCorp Vault

## Start HashiCorp Vault

Run Vault in development mode:

```bash
vault server -dev
```

Open a new terminal and configure Vault:

```bash
export VAULT_ADDR='http://127.0.0.1:8200'
export VAULT_TOKEN='your-root-token'
```

Verify Vault is running:

```bash
vault status
```

## Create Secrets

Store your application secrets in Vault:

```bash
vault kv put secret/myapp \
API_HOST="localhost" \
API_PORT="3000" \
API_DEV_DATABASE_URL="postgresql://postgres:postgres@localhost:5432/kedil_bank_parser?schema=portal"
```

Verify the stored secrets:

```bash
vault kv get secret/myapp
```

## Environment Configuration

Create a `.env` file in the project root.

### Using HashiCorp Vault

```env
VAULT_ADDR=http://127.0.0.1:8200
VAULT_TOKEN=your-root-token
VAULT_SECRET_PATH=secret/data/myapp
```

### Using Local .env Values (Fallback)

If Vault is not configured, the application will use the values below:

```env
API_HOST=localhost
API_PORT=3000
API_DEV_DATABASE_URL=postgresql://postgres:postgres@localhost:5432/kedil_bank_parser?schema=portal
```

## Install Dependencies

```bash
npm install
```

## Run the Application

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

## How It Works

1. Application starts.
2. Reads Vault configuration from `.env`.
3. Connects to HashiCorp Vault.
4. Loads secrets from the configured path.
5. Injects secrets into `process.env`.
6. Application continues to use `process.env` as usual.

Example:

```typescript
const dbUrl = process.env.API_DEV_DATABASE_URL;
```

No additional configuration changes are required throughout the application.

## Notes

* If `VAULT_ADDR` is not configured, the application automatically falls back to local `.env` values.
* For production environments, use a secure authentication method instead of the development root token.
* Development mode (`vault server -dev`) should only be used for local testing.

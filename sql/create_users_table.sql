CREATE SCHEMA IF NOT EXISTS portal;

CREATE TABLE IF NOT EXISTS portal.l_user (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL,
    email           VARCHAR(150) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    role            VARCHAR(50)  NOT NULL DEFAULT 'user',
    is_active       BOOLEAN      NOT NULL DEFAULT TRUE,
    created_date    TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_date    TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_l_user_email ON portal.l_user (email);

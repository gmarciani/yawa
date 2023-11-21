USE dbyawa;

CREATE TABLE IF NOT EXISTS user_settings
(
    id             binary(16) not null primary key DEFAULT (UUID_TO_BIN(UUID())),
    is_mfa_enabled bit        null DEFAULT (FALSE)
);

USE dbyawa;

START TRANSACTION;

SET @USER_PROFILE_ID=UUID_TO_BIN(UUID());
SET @USER_SETTINGS_ID=UUID_TO_BIN(UUID());

INSERT INTO user_profiles (id, first_name, last_name, gender, date_of_birth, role, picture)
VALUES (
    @USER_PROFILE_ID,
    'Giacomo',
    'Marciani',
    'MALE',
    DATE('1990-06-27'),
    'System Admin',
    null
);

INSERT INTO user_settings (id, is_mfa_enabled)
VALUES (
    @USER_SETTINGS_ID,
    FALSE
);

INSERT INTO users (
    id, username, email, password, role, subscription_plan, created_at,
    is_account_not_expired, is_account_not_locked, is_credentials_not_expired, is_enabled,
    profile_id, settings_id)
VALUES (
    DEFAULT,
    'admin',
    'giacomo.marciani+yawa-admin@gmail.com',
    '$2a$10$/453.tNaHj8UKJaaEctgj.bZpnWP0JNadKlmHc0FIoI6AYHI2HYGS',
    'ADMIN',
    'SYSTEM',
    DEFAULT,
    TRUE,
    TRUE,
    TRUE,
    TRUE,
    @USER_PROFILE_ID,
    @USER_SETTINGS_ID
);

COMMIT;

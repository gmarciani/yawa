USE dbyawa;

CREATE TABLE IF NOT EXISTS users
(
    id                         binary(16)                                          not null primary key DEFAULT (UUID_TO_BIN(UUID())),
    email                      varchar(255)                                        null,
    password                   varchar(255)                                        null,
    role                       enum ('ADMIN', 'ANONYMOUS', 'NORMAL', 'PROMETHEUS') null DEFAULT('NORMAL'),
    subscription_plan          enum ('BASIC', 'FREE', 'PROFESSIONAL', 'SYSTEM')    null DEFAULT('FREE'),
    created_at                 datetime(6)                                         null DEFAULT (CURRENT_TIMESTAMP()),
    is_account_not_expired     bit                                                 null DEFAULT(TRUE),
    is_account_not_locked      bit                                                 null DEFAULT(TRUE),
    is_credentials_not_expired bit                                                 null DEFAULT(TRUE),
    is_enabled                 bit                                                 null DEFAULT(FALSE),

    constraint unique_email
        unique (email)
);

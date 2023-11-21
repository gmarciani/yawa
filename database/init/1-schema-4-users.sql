USE dbyawa;

CREATE TABLE IF NOT EXISTS users
(
    id                         binary(16)                                          not null primary key DEFAULT (UUID_TO_BIN(UUID())),
    username                   varchar(255)                                        null,
    email                      varchar(255)                                        null,
    password                   varchar(255)                                        null,
    role                       enum ('ADMIN', 'ANONYMOUS', 'NORMAL', 'PROMETHEUS') null DEFAULT('NORMAL'),
    subscription_plan          enum ('BASIC', 'FREE', 'PROFESSIONAL', 'SYSTEM')    null DEFAULT('FREE'),
    created_at                 datetime(6)                                         null DEFAULT (CURRENT_TIMESTAMP()),
    is_account_not_expired     bit                                                 null DEFAULT(TRUE),
    is_account_not_locked      bit                                                 null DEFAULT(TRUE),
    is_credentials_not_expired bit                                                 null DEFAULT(TRUE),
    is_enabled                 bit                                                 null DEFAULT(FALSE),
    profile_id                 binary(16)                                          null,
    settings_id                binary(16)                                          null,

    constraint unique_username
        unique (username),
    constraint unique_email
        unique (email),
    constraint unique_profile_id
        unique (profile_id),
    constraint unique_settings_id
        unique (settings_id),
    constraint foreign_profile_id
        foreign key (profile_id) references user_profiles (id),
    constraint foreign_settings_id
        foreign key (settings_id) references user_settings (id)
);

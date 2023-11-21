use dbyawa;

# Parameters
SET @USERNAME = 'admin';

# Retrieve user
select * from users where username = @USERNAME;

# Retrieve user profile
select * from user_profiles where user_profiles.id = (
    select profile_id from users where username = @USERNAME
);

# Retrieve user settings
select * from user_settings where user_settings.id = (
    select settings_id from users where username = @USERNAME
);

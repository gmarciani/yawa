import {UserProfileGenderEnum, UserProfileLanguageEnum} from '../../clients/yawa'

export function getGenderEnum(value: string): UserProfileGenderEnum | undefined {
  return Object.values(UserProfileGenderEnum).find((enumValue) => enumValue === value);
}

export function getLanguageEnum(value: string): UserProfileLanguageEnum | undefined {
  return Object.values(UserProfileLanguageEnum).find((enumValue) => enumValue === value);
}

export type ProfileList = Profile[]

export interface Profile {
  id?: number
  account?: Account
  basic?: Basic
  trait?: Trait
  health_info?: HealthInfo
  appearance?: Appearance
  lifestyle?: Lifestyle
  doctrine?: Doctrine
  location?: Location
  education?: Education
  profession?: Profession
  family?: Family
  origin?: Origin
  interests_and_more?: InterestsAndMore
  photo_details?: PhotoDetails
  connect?: Connect
  other?: Other
  notifications?: Notifications
  request?: Request
}

export interface Account {
  status?: string
  last_login_date?: number
  profile_created?: number
  profile_activated?: number
  posted_by?: string
  membership?: string[]
  hide_till?: number
  screened?: string
  hidden?: string
  astro_profile?: string
  memberlogin?: string
  membership_tag?: string
}

export interface Basic {
  username?: string
  display_name?: string
  first_name?: string
  last_name?: string
  gender?: string
  age?: string
  marital_status?: string
  date_of_birth?: number | string
}

export interface Trait {
  personal_values?: string
  about_me?: string
  personality?: any[]
}

export interface HealthInfo {
  special_cases?: string
  blood_group?: string
  ailments?: string
}

export interface Appearance {
  complexion?: string
  built?: string
  height?: number
  weight?: string
}

export interface Lifestyle {
  diet?: string
  drink?: string
  smoke?: string
}

export interface Doctrine {
  religion?: string
  caste?: string
  sub_caste?: string
  mother_tongue?: string
  gotra?: string
  amritdhari?: string
  dastar?: string
  fasting?: string
  keshdhari?: string
  muslim_from_birth?: string
  namaaz?: string
  religious_values?: string
  zakaat?: string
  caste_no_bar?: string
}

export interface Location {
  country?: string
  state?: string
  district?: string
  residency_status?: string
  zip_code?: string
  country_code?: string
  city_google?: string
  living_since?: string
  city?: string
  locality?: string
  location?: string
  lives_in?: string
}

export interface Education {
  education?: string
  display_education?: string
  education_stream?: string
  college_university?: string
  college_1?: string
  valid_college_1?: string
  college_2?: string
  valid_college_2?: string
}

export interface Profession {
  occupation?: string
  industry?: string
  working_with?: string
  income_old?: string
  income?: string
  income_currency?: string
  linkedin_employerid?: number
  employer?: string
  valid_employer?: string
  income_hidden?: string
}

export interface Family {
  children?: string
  cultural_values?: string
  about?: string
  father_profession?: string
  mother_profession?: string
  brothers?: string
  brothers_married?: string
  sisters?: string
  sisters_married?: string
  affluence?: string
  no_of_kids?: string
  type?: string
  located?: string
  father_employer?: string
  father_designation?: string
  about_father?: string
  mother_employer?: string
  mother_designation?: string
  about_mother?: string
  family_income?: string
  is_family_gamified?: string
}

export interface Origin {
  grewup_in?: string[]
  native_place?: string
  ethnicity?: string
}

export interface InterestsAndMore {
  hobbies?: any[]
  interests?: any[]
  cuisine?: any[]
  music?: any[]
  movies?: any[]
  reads?: any[]
  sports?: any[]
  dress_style?: any[]
  can_speak?: any[]
}

export interface PhotoDetails {
  count?: number
  photos?: Photo[]
  status?: string
}

export interface Photo {
    status?: string
    photo_order?: number
    profile_photo?: boolean
    medium?: string
    medium_nb?: string
    semilarge?: string
    semilarge_nb?: string
    small?: string
    small_nb?: string
    domain_name?: string
    domain_name_nb?: string
  }

export interface Connect {
  type?: string
  accepted_date?: string
  accepted_viewed_date?: string
  viewed?: string
  temp?: string
  status?: string
  record_date?: number
  filtered?: string
  viewed_date?: number
  deleted_by_to?: number
  deleted_by_from?: number
  status_updated_date?: number
  from?: string
  to?: string
  accept_viewed?: string
  can_cancel?: string
  can_unblock?: string
  connect_status?: string
}

export interface Other {
  se?: string
  is_name_lock?: string
  mask_new_profile?: boolean
}

export interface Notifications {
  from?: string
  to?: string
  notification_type?: string
  viewed?: string
  pushed?: string
  record_date?: number
  update_date?: number
}

export interface Request {
  type?: string
  accepted_date?: number
  accepted_viewed_date?: number
  viewed?: string
  temp?: string
  status?: string
  record_date?: number
  filtered?: string
  viewed_date?: number
  deleted_by_to?: number
  deleted_by_from?: number
  status_updated_date?: string
  from?: string
  to?: string
  accept_viewed?: string
  is_super?: string
}

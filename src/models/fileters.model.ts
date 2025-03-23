export interface FiltersVO {
    country: string[]
    religion: string[]
    maritalStatus: string[]
    motherTongueList: string[]
    cityList: CityList[]
    casteList: CasteList[]
  }
  
  export interface CityList {
    city: string
    country: string
  }
  
  export interface CasteList {
    caste: string
    religion: string
  }
  
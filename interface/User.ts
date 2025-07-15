export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginUserData {
  email: string | null;
  password: string | null;
  name: string;
  role: string;
}

export interface UserData {
  id: string;
  fullName: string;
  nFullName: string;
  dob: string;
  fatherName: string;
  motherName: string;
  birthPlace: string;
  gender: string;
  mobile: string;
  citizenshipNumber: string;
  citizenshipIssueDate: string;
  citizenshipType: string;
  citizenshipIssuePlace: string;
  district: string;
  nDistrict: string;
  municipality: string;
  nMunicipality: string;
  wardNo: number;
  nWardNo: string;
  fatherCitizenshipType: string;
  motherCitizenshipType: string;
  spouseName: string;
  spouseCitizenshipType: string;
}



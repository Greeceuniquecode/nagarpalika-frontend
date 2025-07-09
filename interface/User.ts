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
    studentName: string;
  dob: string;
  fatherName: string;
  motherName: string;
  birthPlace: string;
  gender: string;
  address: string;
  mobile: string;
  citizenshipNumber: string;
  citizenshipIssueDate: string;
  citizenshipType: string;
  district: string;
  municipality: string;
  wardNo: string;
  fatherCitizenshipType: string;
  motherCitizenshipType: string;
  spouseName: string;
  spouseCitizenshipType: string;
}


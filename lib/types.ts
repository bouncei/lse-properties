export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  //  TODO: ADD OTHER NEEDED INFORMATION
}

export interface Gig {
  id: string;
  name: string;
  description: string;
  status: string;
  progress: number; //!NOT SURE
  user_id: number;
  created_at: string;
  updated_at: string;
  //  TODO: ADD OTHER NEEDED INFORMATION
}

export interface City {
  _id: string;
  name: string;
  image: any;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  city: string;
  image: string;
  gallery: string[];
  faq: any[];
}

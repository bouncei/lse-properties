export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
  //  TODO: ADD OTHER NEEDED INFORMATION
}

export interface Project {
  id: number;
  name: string;
  description: string;
  status: "completed" | "review" | "negotiation" | "ongoing";
  progress: number; //!NOT SURE
  user_id: number;
  created_at: string;
  updated_at: string;
  //  TODO: ADD OTHER NEEDED INFORMATION
}

export interface Gig {
  id: number;
  name: string;
  description: string;
  status: string;
  progress: number; //!NOT SURE
  user_id: number;
  created_at: string;
  updated_at: string;
  //  TODO: ADD OTHER NEEDED INFORMATION
}

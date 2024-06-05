export interface Birthday {
    text: string;
    pages: Array<{ title: string }>;
  }
  
  export interface BirthdayResponse {
    births: Birthday[];
  }
  
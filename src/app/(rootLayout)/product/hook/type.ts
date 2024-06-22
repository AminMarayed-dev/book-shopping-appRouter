import { BooksEntity } from "@/type";

export interface books {
    books?: BooksEntity[] | null;
  }


  
  export interface TypeChangeGenre {
    genre: string;
    genreEn: string;
  }
  
  export interface TypeChangeAgeGroup {
    ageGroup: string;
    ageGroupEn: string;
  } 
  
  export interface TypeUserCookie {
    role: string;
    id: string;
  }
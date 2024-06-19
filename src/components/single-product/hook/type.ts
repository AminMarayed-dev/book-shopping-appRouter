export interface books {
    books?: BooksEntity[] | null;
  }
  export interface BooksEntity {
    id: string;
    name: string;
    writer: string;
    price: number;
    genre: string;
    ageGroup: string;
    isbn: number;
    imageUrl?: string[] | null;
    description: string;
  }
  export interface TypeUser {
    id: string;
    email: string;
    username: string;
    password: string;
    role: string;
    wishlist?: (BooksEntity)[] | null;
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
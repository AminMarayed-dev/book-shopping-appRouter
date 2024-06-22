
export interface TypeBook {
    id: string;
    name: string;
    writer: string;
    price: number;
    genre: string;
    ageGroup: string;
    isbn: number;
    imageUrl: string[];
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
    quantity: number;
  }
  
 
  
  
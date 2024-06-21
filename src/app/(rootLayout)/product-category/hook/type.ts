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

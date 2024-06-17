import axios from "axios";

export async function getBooksByAgeGroup(ageGroup: string) {
  const { data } = await axios.get(
    `http://localhost:3000/books?ageGroup=${ageGroup}`
  );
  return data;
}

export async function getBooksByGenre({
  ageGroup,
  genre,
}: {
  ageGroup: string;
  genre: string;
}) {
  const { data } = await axios.get(
    `http://localhost:3000/books?ageGroup=${ageGroup}&genre=${genre}`
  );
  return data;
}

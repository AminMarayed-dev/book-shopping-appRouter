// import SingleProduct from "@/components/single-product/SingleProduct"

import { getBookById } from "@/api/books.api";
import SingleProduct from "@/components/single-product/SingleProduct";
import { useGetBookById } from "@/hooks/useGetBookById";
import { useGetBooksByGroup } from "@/hooks/useGetBooksByAgeGroup";


function SingleProductPage({ params }: { params: { slug: string } }) {
  const {slug} = params;



  
  return (
    <>
      <SingleProduct id={slug}/>
      
    </>
  )
}

export default SingleProductPage

// export async function generateStaticParams() {
//   const books = await getAllBooks();
 
//   return books.map((book) => ({
//     slug: book.id,
//   }))
// }
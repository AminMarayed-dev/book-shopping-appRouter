import SingleProduct from "../components/single-product/page";

export default function Page({ params }: { params: { slug: string } }) {
    return <SingleProduct   id={params.slug}/> 
  }
import SingleProduct from "../../single-product/components/single-product/page";

export default function Page({ params }: { params: { slug: string } }) {
    return <SingleProduct   id={params.slug}/> 
  }
import SingleProduct from "@/components/single-product/components/single-product/page";

export default function Page({ params }: { params: { slug: string } }) {
    return <SingleProduct   id={params.slug}/> 
  }
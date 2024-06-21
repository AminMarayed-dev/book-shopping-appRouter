import SingleProduct from "../components";

export default function Page({ params }: { params: { slug: string } }) {
    return <SingleProduct   id={params.slug}/> 
  }
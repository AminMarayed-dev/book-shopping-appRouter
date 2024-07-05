import SingleProduct from "@/app/(rootLayout)/product/components/index";

export default function Page({ params }: { params: { slug: string } }) {
  return <SingleProduct id={params.slug} />;
}

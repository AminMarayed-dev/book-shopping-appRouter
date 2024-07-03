import Banner from "@/app/(rootLayout)/components/Banner";
import Introduction from "@/app/(rootLayout)/components/Introduction";
import ProductWrapper from "@/app/(rootLayout)/components/ProductWrapper";



export default function Home() {
  return (
    <main>
      <Banner/>
      <Introduction/>
      <ProductWrapper/>
    </main>
  );
}

import PageAgeGroup from "@/app/(rootLayout)/product-category/components/pageAgeGroup/pageAgeGroup";
import PageGenre from "@/app/(rootLayout)/product-category/components/pageGenre/pageGenre";

export default function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  switch (slug[0]) {
    case "young":
      switch (slug[1]) {
        case "young-horror":
          return (
            <PageGenre genre={"وحشت"} ageGroupEn={"young"} ageGroup={"جوان"} />
          );
        case "young-fantasy":
          return (
            <PageGenre
              genre={"فانتزی"}
              ageGroupEn={"young"}
              ageGroup={"جوان"}
            />
          );
        default:
          if (slug.length === 1) {
            return <PageAgeGroup ageGroup={"جوان"} ageGroupEn={"young"} />;
          }
          break;
      }
      break;
    case "teenager":
      switch (slug[1]) {
        case "teenager-horror":
          return (
            <PageGenre
              genre={"وحشت"}
              ageGroupEn={"teenager"}
              ageGroup={"نوجوان"}
            />
          );
        case "teenager-fantasy":
          return (
            <PageGenre
              genre={"فانتزی"}
              ageGroupEn={"teenager"}
              ageGroup={"نوجوان"}
            />
          );
        default:
          if (slug.length === 1) {
            return <PageAgeGroup ageGroup={"نوجوان"} ageGroupEn={"teenager"} />;
          }
          break;
      }
  }
}

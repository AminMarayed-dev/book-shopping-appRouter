function SingleResultPage({ params }) {
  const { slug } = params;
  return <>{slug === "success" ? <div>success</div> : <div>failed</div>}</>;
}

export default SingleResultPage;

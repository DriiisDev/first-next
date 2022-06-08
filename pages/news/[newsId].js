import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return (
    <div>
      <h1>The Detail Page</h1>
    </div>
  )
}


export default DetailPage;
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1> News page </h1>
      <ul>
        <li>
          <Link href={"/news/idris"}>next</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
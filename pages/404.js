import Link from "next/link";
import classes from "../styles/error.module.css";
export default function ErrorPage() {
  return (
    <>
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please link to{" "}
        <Link href="/">
          <a>Home page</a>
        </Link>
      </p>
    </>
  );
}

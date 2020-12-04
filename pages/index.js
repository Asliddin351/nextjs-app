import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout title="Home page">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <h1>Hello, Nextjs!</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </MainLayout>
  );
}

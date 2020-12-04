import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} | Next course</title>
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>

      <style jsx global>
        {`
          nav {
            background: darkblue;
            height: 70px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          nav a {
            color: #fff;
            text-decoration: none;
          }
          main {
            margin-top: 70px;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}

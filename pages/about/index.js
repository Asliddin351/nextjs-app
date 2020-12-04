import Head from "next/head";
import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
export default function About() {
  const ClickHandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout title="About page">
      <h1>About</h1>
      <button onClick={ClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go back to posts</button>
    </MainLayout>
  );
}

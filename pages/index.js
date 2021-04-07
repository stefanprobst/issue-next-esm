// import PQueue from "p-queue";

export default function HomePage() {
  return <h1>Home</h1>;
}

export async function getStaticProps() {
  const PQueue = await import("p-queue");
  return { props: {} };
}

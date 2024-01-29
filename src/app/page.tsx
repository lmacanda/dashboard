import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home({ session }: { session: any }) {
  return (
    <>
      <main>
        <Navbar session={session} />
        <Hero />
      </main>
    </>
  );
}

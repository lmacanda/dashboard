import Navbar from "@/components/navbar/Navbar";

export default function Home({ session }: { session: any }) {
  return (
    <>
      <main>
        <Navbar session={session} />
        <div className="text">
          <h1>Keep your Business organized in just one application</h1>
        </div>
      </main>
    </>
  );
}

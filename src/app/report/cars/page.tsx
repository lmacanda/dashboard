import Link from "next/link";

export default function Cars() {
  return (
    <div>
      <h1>Cars</h1>
      <p>
        This is the Cars page
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

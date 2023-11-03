import Link from "next/link";

export default function CarReport() {
  return (
    <div className="page-div">
      <h1>Car Report</h1>
      <p>
        This is the Car Report Page <br />
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

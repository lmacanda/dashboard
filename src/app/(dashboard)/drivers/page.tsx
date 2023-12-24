import Link from "next/link";

export default function Drivers() {
  return (
    <div className="page-div">
      <h1>Drivers</h1>
      <p>
        This is the drivers page <br />
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

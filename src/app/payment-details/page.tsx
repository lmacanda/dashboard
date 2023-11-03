import Link from "next/link";

export default function Payments() {
  return (
    <div className="page-div">
      <h1>Payments</h1>
      <p>
        This is the Payments Details page <br />
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

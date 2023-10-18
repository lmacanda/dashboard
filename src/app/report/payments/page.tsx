import Link from "next/link";

export default function Payments() {
  return (
    <div>
      <h1>Payments</h1>
      <p>
        This is the Payments page
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

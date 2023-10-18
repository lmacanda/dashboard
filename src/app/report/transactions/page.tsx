import Link from "next/link";

export default function Transactions() {
  return (
    <div>
      <h1>Transactions</h1>
      <p>
        This is the Transactions page
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

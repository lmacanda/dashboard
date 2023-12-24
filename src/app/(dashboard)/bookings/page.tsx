import Link from "next/link";

export default function Bookings() {
  return (
    <div className="page-div">
      <h1>Bookings</h1>
      <p>
        This is the Bookings page <br />
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

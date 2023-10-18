import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      <h1>Notifications</h1>
      <p>
        This is the Notifications page
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

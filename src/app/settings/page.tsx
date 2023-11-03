import Link from "next/link";

export default function Settings() {
  return (
    <div className="page-div">
      <h1>Settings</h1>
      <p>
        This is the Settings page <br />
        <Link href="/dashboard">Return to dashboard</Link>.
      </p>
    </div>
  );
}

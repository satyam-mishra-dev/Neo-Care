import styles from "../../styles/Dashboard.module.css";
import Link from "next/link";
export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">User Dashboard</h1>
      <br />
      <nav className={styles.navbar}>
        <ul>
          <Link href="/report">
            {" "}
            <li>Report Examination</li>
          </Link>
          <Link href="/doctor">
            {" "}
            <li>Doctor Appointment</li>{" "}
          </Link>
          <Link href="/medical">
            {" "}
            <li>Medical Suggestions</li>{" "}
          </Link>
          <Link href="/stress">
            {" "}
            <li>Stress Buster</li>{" "}
          </Link>
        </ul>
      </nav>
    </div>
  );
}

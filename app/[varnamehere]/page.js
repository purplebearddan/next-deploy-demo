import Image from "next/image";
import styles from "./page.module.css";

export default function Home({ params }) {
  return <main className={styles.main}>{JSON.stringify(params)}</main>;
}

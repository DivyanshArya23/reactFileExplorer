import styles from "./page.module.css";
import { FileExplorer } from "@/components/FileExplorer/FileExplorer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <FileExplorer />
      </div>
    </main>
  );
}

import Image from "next/image"; // Import the Next.js Image component
import styles from "@/styles/main.module.scss";
import {icons} from "@/util/image";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.skills}>
                <div className={styles.header}>
                    <h4>기술 스택</h4>
                </div>
                <div className={styles.skill}>
                    <Image className={styles.icon}
                        src={icons.react} alt="React Icon"
                        width={40} height={40}/>
                </div>
            </section>
        </main>
    );
}

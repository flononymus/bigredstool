import Image from "next/image";
import styles from "./page.module.css";
import backgroundImage from '@/public/background/brs expanded.webp'


export default function Home() {
  return (
    <main className={styles.main}>


    <h1 className={styles.description} >
    big red stool

    </h1>
  
    {/* <Image
    className={styles.backgroundImage}
    style={{position:'absolute',top:0}}
    src={backgroundImage}
    alt={'background image'}
    /> */}

      {/* <div className={styles.center}>
      </div> */}
      {/* <div style={{padding:'70vh'}} /> */}

    </main>
  );
}

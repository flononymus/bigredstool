import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>


    <h1 className={styles.description} >
    big red stool
    </h1>

    <div className={styles.logo}>
           <Image
              src="/enzian.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={50}
              priority
              />
    </div>

  
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

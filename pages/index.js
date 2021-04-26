import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import {useRouter} from 'next/router'
import {Fragment} from 'react'

export default function Home() {
  const router = useRouter()
  return (
    <Fragment>
    <div className={styles.container}>
      <Head>
        <title>MyNote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.titleBox}>
          <div className={styles.title}>MyNote</div>
        </div>
        <Image src="/pic1.svg" alt="logo" width={400} height={300} className={styles.pic} onClick={() => router.push('/home')}/>
     </div>
    </div>
    </Fragment>
  );
}

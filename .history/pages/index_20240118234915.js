import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import MenuItem from '@/components/MenuItem'
import SideNavigation from '@/components/SideNavigation'



export default function Home() {

  return (
    <>
      <Head>
        <title>Assessment 1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        
        <div>
        <SideNavigation/>
        </div>

        <div className={`${styles.header}`}>
        <Header/>
        </div>

        <div className={{~}}

        

      


    


      </main>        
      <Footer/>
    </>
  )
}
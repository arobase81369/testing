import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from './layout'
import Banner from '@/components/Banner'
import Pricechecker from '@/components/Pricechecker'
import { Vouchersdata } from '@/api/voucherdata'
import Voucherlist from '@/components/Voucherlist'

export default function Home ({ allvouchers }) {

  return (
    <>
    <Layout>

    <Banner />
    
      <div className="container">
        <Pricechecker/>

        
          <Voucherlist allvouchers={allvouchers} />

      </div>
      </Layout>
    </>
  )

}




export async function getStaticProps() {
  const postvouchers = await Vouchersdata();
 
   return {
     props: {
       allvouchers: postvouchers,
     }
   };
 }

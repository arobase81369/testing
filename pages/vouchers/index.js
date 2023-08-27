
import { getAllVouchers } from "@/api/voucherdata";
import Link from "next/link";
import Layout from "../layout";
import { Vouchersdata } from "@/api/voucherdata";

import Voucherlist from "@/components/Voucherlist";

const Vouchers = ({ allvouchers }) => {
console.log(allvouchers);

  if(!allvouchers) {
    
    return(
      <h1>Data is loading</h1>
    )
  }

    return(
        <>
    <Layout>
         <Voucherlist allvouchers={allvouchers} />
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


export default Vouchers;
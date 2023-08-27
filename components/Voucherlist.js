
import Link from "next/link";
import { Vouchersdata } from "@/api/voucherdata";

const Voucherlist = (props) => {

  const { allvouchers } = props;

  if(!allvouchers) {
     return (
      <>
      <div>loading</div>
      </>
     )
  }

    return (
        <>

<section className="py-5 bg-white">
          <div className="container">
          <div className="mb-3">
              <h2 className="text-primary fs-4 fw-semibold mb-0">Vouchers & Gift Coupons</h2>
              <h6>Select Your Brand</h6>
            </div>
            <div className="row">

{allvouchers.map((voucher) => (
   <div className="col-md-3 mb-4" key={voucher.vcid}>

    <div className="card-body text-center p-3 border border-light rounded-2 shadow-sm">
     
      <h4 className="h6 d-none">{voucher.name}</h4>
      <img src={voucher.img}  className="w-75" />
    
    <div className="d-none bg-primary-subtle fw-light fw-normal mb-3 p-2 rounded text-dark fs-5 fw-medium py-2">{voucher.vcode}</div>
    <Link className="btn btn-primary rounded-pill btn-sm px-3"
   href={{
     pathname : "/vouchers/[vid]",
     query : {
        vid: voucher.vcid,
     }
   }}>Buy Now</Link>
   <div className="text-center mt-3 text-success">Save upto <span className="fw-bolder">6%</span></div>
    </div>
    
    </div>
 ))}

</div>
          </div>
        </section>

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


export default Voucherlist;

import Layout from "@/pages/layout";
import Link from "next/link";
import Cart from "@/components/cart";

import { Vouchersdata } from "@/api/voucherdata";
import { useEffect, useState } from "react";

const voucheritem = ({ voucher }) => {
console.log(voucher);
  const voucherprice = voucher;
  const [cartitems, setCartitems] = useState(['']);
  const [cartid, setCartid] = useState(0);
  //console.log(voucherprice);


  function addtocart(e) {

    let cartaddid = e.target.value;
    let token = localStorage.getItem("token");
 
    setCartid((cartid) => cartid + 1);
 
    console.log(cartid);
 
 
     var formdata = new FormData();
 
     var requestOptions = {
       method: 'POST',
       body: formdata,
       redirect: 'follow'
     };
 
     fetch(`https://electrondeals.in/API/items/cart/create?itemid=${cartaddid}&token=${token}`, requestOptions)
       .then(response => response.json())
       .then(result => {
         result.forEach(element => {
             console.log(element.token);
             localStorage.setItem("token", element.token);
         });
       })
       .catch(error => console.log('error', error));
 
 
   } 
 
   useEffect( function() {
 
     let localitemsarray = [];
     let localitem = localStorage.getItem("cartitems");
     
     if(localitem !== null) {
       localitemsarray = localitem.split(",");
     let allitems = [...localitemsarray, cartid];
       localStorage.setItem("cartitems", allitems);
     //  setCartitems(allitems);
     } else {
       localStorage.setItem("cartitems", cartid);
      // allitems(cartid);
     }
    
     
     console.log(cartitems);
    
   }, [cartid]);
 
 
   useEffect( function() {
 
     let localitemsarray = [];
     let localitem = localStorage.getItem("cartitems");
     
     if(localitem !== null) {
       localitemsarray = localitem.split(",");
     let allitems = [...localitemsarray, cartid];
       localStorage.setItem("cartitems", allitems);
     setCartitems(allitems);
     } else {
       localStorage.setItem("cartitems", cartid);
      allitems(cartid);
     }
    
     
     console.log(cartitems);
    
   }, []);
 


  if(!voucher) {
    
    return(
      <h1>Data is loading</h1>
    )
  }

    return (
        <>
        <Layout>
           <section>
        <div className="container">
          <div className="row my-4">
            <div className="col-md-12">
                   <div><Link className="" href="/">Home</Link> / <span>Vouchers</span></div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-3 position-sticky top-0">
              <div className="py-4 border text-center rounded-2 ">
                <img src={voucher.name} className="w-75 mw-200px" />
                <div className="text-center mt-3 text-success">Save upto <span className="fw-bolder">6%</span></div>
    
              </div>
            </div>
             <div className="col-md-5 mb-3">
              <div className="mb-3">
                <h4 className="mb-0 ">{voucher.name}</h4>
                <span className="fw-medium opacity-75"> Voucher E-Gift Cards (Instant Vouchers)</span>
                </div>

                <div className="">
                
                { voucherprice.map((price) => (
                  <div className="mb-3" key={price.vid}>
                  <div className="d-flex flex-wrap justify-content-between align-items-center bg-light me-2 px-3 pb-2 pt-1 mb-2 fw-bold opacity-75 rounded">
                    <div className="">
                      <span className="fs-3"><span className="small fw-medium me-1">₹</span>{price.price}</span>
                       <span className="d-block fw-lighter"> Pay: {price.price}</span>
                      </div>
                      <span className=""><span className="text-warning d-block">{price.discount}</span><span className="small fw-light">Discount</span></span>
                    { price.quantity <= 0 &&
                          <div> Added </div>
                    }
                    { price.quantity > 0 && 
                      <button className="btn btn-success my-auto" onClick={addtocart} value={price.vid}>Add to cart</button>
}
                  </div>
                </div>
                ))}
                 

                </div>

             </div>
             <div className="col-md-4 mb-3 position-sticky top-0">
                <Cart data={cartid}/>
             </div>
              
          </div>

        </div>
        </section>  
        </Layout>
        </>
    )

}

async function getData() {
    const res = await fetch(`https://electrondeals.in/API/items/vouchers/read`);
    const postvouchers = await res.json();
    return postvouchers;
}


export async function getStaticProps(context) {
    const { params } = context;
    const vid = params.vid;

    const data = await getData();
    let voucher = data.find((datavoucher) => datavoucher.vcid == vid);
    voucher = voucher.vouchersdata;
    return {
        props: {
          voucher,
        }
    }
}


export async function getStaticPaths() {

    const data = await getData();

    const vids = data.map((voucher) => voucher.vcid.toString());
    const datavouchers = vids.map((vid) => ({
        params: {
            vid : vid,
        }
    }));

    return {
        paths: datavouchers,
        fallback: true,
    }

}

/*
export async function getStaticProps() {
  const voucheritem = await Vouchersdata();
  let findvoucher = voucheritem.filter(data )

  return {
    props:{
      voucher : findvoucher
    }
  }
}
*/

export default voucheritem;
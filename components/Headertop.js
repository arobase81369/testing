import Link from "next/link";
import { useEffect, useState } from "react";


const Headertop = () => {

  const [customer, setCustomer] = useState('');
  const[getcustomer, setGetcustomer] = useState('');


  const gettoken = async () => {

    const token = localStorage.getItem("token");


    
    if(token !== "")  {

     // console.log(token);
      setCustomer(token);
     
      /*
      const headerres = await fetch(`https://electrondeals.in/API/items/customer/read?token=${token}`);
         const headerdata = await headerres.json();

         console.log(headerdata);

         headerdata.forEach(element => {
             console.log("fetch"+element.token);
             setCustomer(element.cid);  
         });
         */
   
    }


  }



  useEffect( function() {

    gettoken();
    
  
  }, );

  

    return(
        <>
        <section className="bg-dark py-2 shadow">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-2">
              <Link href="/" className="text-decoration-none"><h1 className="fw-semibold text-white h5 mt-2">Electron Deals</h1></Link>
              </div>
              <div className="col-md-8"> 
                <div className="d-flex">
                  <select className="form-select me-1 mw-200px d-none">
                    <option>Select type</option>
                    <option>Voucher</option>
                    <option>Price Checker</option>
                    <option>Deals</option>
                  </select>
                  <input type="search" placeholder="Search Products" className="form-control" id="search-bar" />
                </div>
              </div>
              <div className="col-md-2 text-end fw-semibold text-uppercase text-white">
                {
                  customer? <span>My Account</span> : <div className=""><span className="me-3">Sign up </span> <span><Link href={`/login`}> Login </Link></span></div>
                }
                
              </div>
            </div>
          </div>
        </section>
        </>
    )

}


export default Headertop;
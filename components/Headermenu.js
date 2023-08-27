import Link from "next/link";


const Headermenu = () => {


    return(
        <>
           <section className="bg-body-secondary py-0 py-md-3">
          <div className="container px-0 px-md-2">
            <div className="text-center fw-semibold fs-6 d-none d-md-block">
              <span className="px-3"><Link href="/mobiles" className="text-decoration-none text-dark"><i className="bi bi-currency-rupee"></i> Price Checker</Link></span>
              <span className="px-3"><Link href="/vouchers" className="text-decoration-none text-dark"> <i className="bi bi-credit-card-2-front"></i> Gifts & Voucher</Link></span>
              <span className="px-3"><Link href="/offers" className="text-decoration-none text-dark"><i className="bi bi-percent"></i> Offers & Deals</Link></span>
            </div>

            <div className="bg-body-secondary d-flex d-md-none fs-6 fw-normal justify-content-evenly text-center">
            <div className=""><Link href="/mobiles" className="d-block py-2 text-dark text-decoration-none"><i className="bi bi-currency-rupee"></i> Price Checker</Link></div>
              <div className=""><Link href="/vouchers" className="d-block py-2 text-dark text-decoration-none"> <i className="bi bi-credit-card-2-front"></i> Gifts & Voucher</Link></div>
              <div className=""><Link href="/offers" className="d-block py-2 text-dark text-decoration-none"><i className="bi bi-percent"></i> Offers & Deals</Link></div>
            
            </div>
          </div>
        </section>
        </>
    )
}


export default Headermenu;
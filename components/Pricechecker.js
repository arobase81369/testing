import Link from "next/link";


const Pricechecker = () => {


    return (
        <>
                <section className=" py-3 py-md-5 ">
          <div className="container">
            <div className="mb-3">
              <h2 className="text-primary fs-4 fw-semibold mb-0">Price Checker</h2>
              <h6>Find your best</h6>
            </div>
            <div className="product-carousel-section w-100 overflow-x-scroll">
            <div className="product-carousel-list d-flex">
              <div className="product-carousel-list-item m-2">
                <Link href="mobiles/Samsung Galaxy A54 5G" className="text-decoration-none">
                <div className="bg-light text-center p-2 rounded-0 shadow-sm">
                  <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg" className="p-3" />
                  <h6 className="pt-3 h5 text-decoration-none">Samsung Galaxy A54 5G</h6>
                  <div className="fw-semibold text-primary small"><span>12,000 to 15,000</span></div>
                </div>
                </Link>
              </div>
              <div className="product-carousel-list-item m-2">
                <Link href="mobiles/Samsung Galaxy A54 5G" className="text-decoration-none">
                <div className="bg-light text-center p-2 rounded-0 shadow-sm">
                  <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg" className="p-3" />
                  <h6 className="pt-3 h5">Samsung Galaxy A54 5G</h6>
                  <div className="fw-semibold text-primary"><span>12,000 to 15,000</span></div>
                </div>
                </Link>
              </div>
              <div className="product-carousel-list-item m-2">
                <Link href="mobiles/Samsung Galaxy A54 5G" className="text-decoration-none">
                <div className="bg-light text-center p-2 rounded-0 shadow-sm">
                  <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg" className="p-3" />
                  <h6 className="pt-3 h5">Samsung Galaxy A54 5G</h6>
                  <div className="fw-semibold text-primary"><span>12,000 to 15,000</span></div>
                </div>
                </Link>
              </div>
              <div className="product-carousel-list-item m-2">
                <Link href="mobiles/Samsung Galaxy A54 5G" className="text-decoration-none">
                <div className="bg-light text-center p-2 rounded-0 shadow-sm">
                  <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg" className="p-3" />
                  <h6 className="pt-3 h5">Samsung Galaxy A54 5G</h6>
                  <div className="fw-semibold text-primary"><span>12,000 to 15,000</span></div>
                </div>
                </Link>
              </div>
              <div className="product-carousel-list-item m-2">
                <Link href="mobiles/Samsung Galaxy A54 5G" className="text-decoration-none">
                <div className="bg-light text-center p-2 rounded-0 shadow-sm">
                  <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg" className="p-3" />
                  <h6 className="pt-3 h5">Samsung Galaxy A54 5G</h6>
                  <div className="fw-semibold text-primary"><span>12,000 to 15,000</span></div>
                </div>
                </Link>
              </div>
            </div>
            </div>
          </div>
        </section>
        </>
    )
}


export default Pricechecker;
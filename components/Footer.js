


const Footer = () => {

    return(
        <>
          <section className="py-2 py-md-3 bg-dark text-white">
            <div className="container">

              <div className="row">
                <div className="col-md-6">
                   <span>All rights reserved.</span>
                </div>
              </div>
               
               <div className="row d-none mb-4">
                <div className="col-md-12">
                  <h3 className="fs-4 fw-semibold">SIGNUP OUR NEWSLETTER</h3>
                  <div className="d-flex w-100">
                    <input type="text" placeholder="Enter Email" className="me-3 px-3 border-0 rounded-1" />
                    <button className="btn btn-success border-0 fw-semibold">SIGN UP</button>
                  </div>
                </div>
               </div>

              <div className="row d-none">
                <div className="col-md-3">
                  <h4>Help</h4>
                  <div className="lh-base text-muted">
                     <span className="d-block">FAQ's</span>
                     <span className="d-block">How it Works</span>
                     <span className="d-block">Contact us</span>
                     <span className="d-block">Support</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <h4>Search</h4>
                  <div className="lh-base text-muted">
                     <span className="d-block">New Voucher</span>
                     <span className="d-block">New Deals</span>
                     <span className="d-block">Offers Sale</span>
                     <span className="d-block">News Letter</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <h4>Quick Links</h4>
                  <div className="lh-base text-muted">
                     <span className="d-block">Terms & Conditions</span>
                     <span className="d-block">Privacy Policy</span>
                     <span className="d-block">Cancellation Policy</span>
                     <span className="d-block">About us</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <h4>Follow us on</h4>
                  <div className="lh-base text-muted">
                     <span className="d-block">Facebook</span>
                     <span className="d-block">Twitter</span>
                     <span className="d-block">Linked In</span>
                     <span className="d-block">Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}


export default Footer;
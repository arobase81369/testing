import Link from "next/link"
import Layout from "./layout"

const Signup = () => {


    return(
        <Layout>
        <>
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 bg-light p-4 rounded">
                        <div className="login-form">
                           
                           <h5 className="mb-4">Signup Form</h5>

                           <div className="mb-3">
                             <label className="form-label d-block">Name</label>
                             <input type="text" className="form-control" />
                           </div>

                           <div className="mb-3">
                             <label className="form-label d-block">Phone</label>
                             <input type="number" className="form-control" />
                           </div>

                           <div className="mb-3">
                             <label className="form-label d-block">Email</label>
                             <input type="email" className="form-control" />
                           </div>

                           <div className="mb-3">
                             <label className="form-label d-block">Password</label>
                             <input type="password" className="form-control" />
                           </div>

                           <div className="mb-3">
                             <button className="btn btn-primary">Submit</button>
                           </div>

                           <div className="d-flex justify-content-between fw-bold mt-3 text-decoration-underline">
                            <span>Already have an account?</span>
                            <span><Link href="/login">Login In</Link></span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
        </Layout>
    )
}


export default Signup
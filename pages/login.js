import Layout from "./layout";
import { useEffect, useState } from "react";
import { Dummylogins } from "@/api/dummylogins";
import Link from "next/link";


const login = () => {

  //  const { data } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] =  useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');


    const handleLogin = async () => {

        try {
           
         if(password == otp) {
                
             localStorage.setItem("token", token);
        //   setToken(element.token);
           setMessage("Login Verify");  
            

        } else {
            console.log("invalid OTP");
            setMessage("invalid OTP");
        }
           

        } catch (error) {
          //  setOtp('login failed');
        }
    }


    async function submitphone() {
      
      const res = await fetch(`https://electrondeals.in/API/items/customer/read?phone=${username}`);
            const data = await res.json();
              console.log(res.status);
            //  console.log("testing"+data.length);
            
            if(res.status == 404) {
               console.log("phone number not exists");
               setMessage("Phone not exists");

            const res = await fetch(`https://electrondeals.in/API/items/customer/create?phone=${username}`);
            const nwdata = await res.json();
              console.log(res.status);
              console.log(nwdata);

            } else {

            data.forEach(element => {
                setToken(element.token);  
                setOtp("123456");
                console.log(element.cid);
            });

           }

        
        

    }

    useEffect( function() {

       console.log(localStorage.getItem("token"));
      // setMessage(otp);

    }, [otp])

    return(
        <Layout>
            <>
               <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-md-4">
                        <div className="form-login p-3 bg-light rounded py-4">

                          <h4 className="text-center fs-5 fw-semibold pt-2 pb-3">Customer Login</h4>

                            <div className={otp? 'd-none' : 'd-block'}>

                                <div class="mb-3">
                                    <label className="form-label">Enter your Phone</label>
                                    <input type="number" onChange={e => setUsername(e.target.value)} className="form-control" />
                                </div>
                                <div class="mb-3">
                                    <button className="btn btn-success w-100" onClick={submitphone}>Send OTP</button>
                                </div>
                                <div className="text-center mb-3"><Link href="/">Register Now</Link></div>
                            </div>
                            <div className={otp? 'd-block' : 'd-none'}>
                                <div class="mb-3">
                                    <label className="form-label">OTP</label>
                                    <input type="number" onChange={e => setPassword(e.target.value)} className="form-control" />
                                </div>
                                <div class="mb-3">
                                    <button className="btn btn-success" onClick={handleLogin}>Verify OTP</button>
                                </div>
                                <div className="text-center text-decoration-underline">
                                <span onClick={(e)=> setOtp(e.target.value)}>Back to login</span>
                                </div>
                                </div>

                            {otp? <div className="alert alert-success">{otp}</div> : <span></span>}
                            {message? <div className="alert alert-success">{message}</div> : <span></span>}
                        </div>
                    </div>
                </div>
               </div>
            </>
        </Layout>
    )
}


/*
export async function getStaticProps() {

    const data = await Dummylogins();
    return {
        props: {
            data
        }
    }

}

*/

export default login
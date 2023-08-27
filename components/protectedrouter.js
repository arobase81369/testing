import { useEffect } from "react";
import { useRouter } from "next/router";

const Protectedrouter = ({ children }) => {

  const router = useRouter();


  const gettoken = async () => {

    const token = localStorage.getItem("token");

    if(token == null) {

     // console.log("User Not LoggedIn");
    //  router.push("/login");

    } else {

     const res = await fetch(`https://electrondeals.in/API/items/customer/read?token=${token}`);
         const data = await res.json();

         data.forEach(element => {
          //   console.log(element.token);
           //  console.log(element.cid);  
         });

   //  console.log(customername);
   
    }

  }

    

    useEffect( function() {
         
        gettoken();

    }, []);

    return(
        <>
           {children}
        </>
    )

}

export default Protectedrouter
import { useEffect, useState } from "react";


const Cart = (props) => {


  const { data } = props;
  const [cartitems, setCartitems] = useState([]);
  const [totalamount, setTotalamount] = useState(0);
  const [payamount, setPayamount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState(0);
  const [checkoutmessage, setCheckoutmessage] = useState();
  const [checkoutstatus, setCheckoutstatus] = useState();
  const [giftdiv, setGiftdiv ] = useState("d-none");

 /* function buynowaction(e) {
    let dataid = e.target;
    let dataidvalue = dataid.getAttribute("data-id");
    console.log("testing" + dataidvalue);
  } */

  async function deleteaction(e) {
    let itemdataid = e.target;
    let itemdataidvalue = itemdataid.getAttribute("data-id");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const response = await fetch(`https://electrondeals.in/API/items/cart/delete?itemid=${itemdataidvalue}`, requestOptions);
    const text = await response.json();
    allcartitems();
    checkoutinfo();
    
  }


  useEffect ( function() {

    allcartitems();
    checkoutinfo();


  }, [data, checkoutmessage]);



  async function buynowaction() {
    
    let token = localStorage.getItem("token");
    console.log("token"+token);

    if(token == null) {
        token = "";
    }

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const response = await fetch(`https://electrondeals.in/API/items/purchase/create?token=${token}`, requestOptions);
    const text = await response.json();
    console.log(text);
    console.log(response.status);

    if(response.status == "200") {

      setCheckoutmessage("Order Placed, We emailed you the coupons. Please check your emails");
      setCheckoutstatus("alert alert-success");

    } else {

      setCheckoutmessage("Error in placing the order. Please contact our support team or try again later");
      setCheckoutstatus("alert alert-danger");

    }

        setTimeout(() => {

          setCheckoutmessage("");
      setCheckoutstatus("");
          
        }, 4000);
    
  }


  


  async function allcartitems() {

    let token = localStorage.getItem("token");
    console.log("token"+token);

    if(token == null) {
        token = "";
    }

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const response = await fetch(`https://electrondeals.in/API/items/cart/read?token=${token}`, requestOptions);
    const text = await response.json();
    console.log(text);
    setCartitems(text);
    

  }


  async function checkoutinfo() {

    let token = localStorage.getItem("token");
    console.log("token"+token);

    if(token == null) {
      token = "";
  }

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    const response = await fetch(`https://electrondeals.in/API/items/checkout/read?token=${token}`, requestOptions);
    const checkout = await response.json();

        setTotalamount(checkout.totalamount);
        setPayamount(checkout.payamount);
        setDiscount(checkout.discount);


  }


  const handleChange = event => {
    giftdivsatus();

  };

  function giftdivsatus() {
     
   let giftdivelement = document.querySelector(".giftdevinput");
    if (giftdivelement.checked == true) {
      setGiftdiv("d-block");
    } else {
      setGiftdiv("d-none");
    }

  }




    return (
        <>
             <div className="bg-light p-3">

              <div className="bg-white rounded py-3 mb-3">
                    <div className="mb-2 d-flex justify-content-between px-3 py-1 fw-bolder opacity-75 pb-2 border-bottom">
                        
                      <label>Voucher</label>
                      <span className="">Type</span>
                    </div>
                    { cartitems.length > 0 &&
                    cartitems.map((item) => (
                        <div className="mb-2 d-flex  justify-content-between px-3 py-2 " key={item.csno}>
                          <div className="d-flex">  
                            <span className="badge bg-danger pb-0 small text-white me-2 pb-2" onClick={deleteaction} data-id={item.csno}>X</span>
                            <label className="fw-semibold">{item.name}</label>
                            </div>
                      <span className="fw-semibold"><span className="small">{item.quantity} x </span> {item.price}</span>
                    </div>
                    ))
                    
                    }

                    {
                        cartitems.length == undefined &&
                        <div className="fs-5 text-center py-3">No Items Added</div>
                    }

                  </div>
                    
                    <div className="bg-white py-3 mb-3">
                    <div className="mb-0 d-flex justify-content-between align-items-center px-3 py-2">
                      <label className="fw-normal">Total Amount</label>
                      <span className=""><span className="small">Rs.</span><span className="fw-bolder fs-5"> {totalamount}</span></span>
                    </div>
                    <div className="mb-0 fw-bold d-flex justify-content-between align-items-center px-3 py-2">
                      <label className="fw-normal">Discount</label>
                      <span className=""><span className="small"></span>{discount}%</span>
                    </div>
                    <div className="mb-0 d-flex justify-content-between align-items-center px-3 py-2">
                      <label className="fw-bolder">Pay Amount</label>
                      <span className=""><span className="small">Rs.</span><span className="fw-bolder fs-4"> {payamount}</span></span>
                    </div>
                    </div>

<div className="mb-3">
                    <div className="form-check">
  <input className="form-check-input giftdevinput" type="checkbox" value="" id="flexCheckChecked" onClick={handleChange}/>
  <label className="form-check-label" for="flexCheckChecked">
    Gift to other
  </label>
</div>
</div>


                    <div className={`bg-white p-3 mb-3 ${giftdiv}`}>
                      <h5>Gift Details Info</h5>
                      <div className="form-group mb-3">
                        <label>Name:</label>
                        <input type="text" className="form-control bg-body-tertiary border-0 " />
                      </div>
                      <div className="form-group mb-3">
                        <label>Email:</label>
                        <input type="text" className="form-control bg-body-tertiary border-0" />
                      </div>
                      <div className="form-group mb-3">
                        <label>Phone:</label>
                        <input type="text" className="form-control bg-body-tertiary border-0" />
                      </div>
                    </div>
                    
                    <div className="mt-1">
                      <button className="btn btn-primary w-100" onClick={buynowaction} data-id="1">Buy Now</button>
                    </div>

                    { checkoutmessage && 
                       <div className={`mt-3 ${checkoutstatus}`}>{checkoutmessage}</div>
                    }
                  </div>
        </>
    )
}

export default Cart;
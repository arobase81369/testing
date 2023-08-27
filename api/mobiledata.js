



export async function Mobiledata() {

    const res = await fetch(`https://electrondeals.in/API/items/products/read`);
    const mobiledata = await res.json();
  
    return mobiledata;
  
  }
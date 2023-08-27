



export async function Dummylogins() {

    const res = await fetch(`https://electrondeals.in/API/items/customer/dummylogins.json`);
    const dummylogins = await res.json();
  
    return dummylogins;
  
  }




export async function Vouchersdata() {

  const res = await fetch(`https://electrondeals.in/API/items/vouchers/read`);
  const vouchersdata = await res.json();

  return vouchersdata;

}
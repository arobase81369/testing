
import Layout from "@/pages/layout";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

const Mobilename = () => {

    let [modal, setModal] = useState(false);
    let [modalview, setModalview] = useState("d-none");

    const router = useRouter();

    console.log(modal);

    function modaltoggle(e) {
        
        console.log("clicked");
        if(modal == false) {
            setModal(true); 
            setModalview("d-block");

            let videonewurl = e.currentTarget.getAttribute("data-id")+'?autoplay=1';
            document.querySelector("#main-youtube").setAttribute("src", videonewurl);
        
        } else {setModal(false); setModalview("d-none");}
        console.log(modal);

    }
   
   
     function thumbnail(e) {
        let src = e.currentTarget.src;
        document.querySelector(".product-main-image").setAttribute("src", src);
     }





   console.log(router);
    return(
        <>
        <Layout>
             
             <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a54.jpg" className="product-main-image m-auto w-100 mw-300px object-fit-cover" />
                            <div className="product-thumbnails py-1 my-1">
                                <div className="d-flex">
                                <img src="https://m.media-amazon.com/images/I/61NO45wzuNL._SX679_.jpg" onClick={thumbnail} className="p-2 rounded border m-1 thumbnail object-fit-cover" />
                                <img src="https://m.media-amazon.com/images/I/61W3EHtFA-L._SX569_.jpg" onClick={thumbnail} className="p-2 rounded border m-1 thumbnail object-fit-cover" />
                                <img src="https://m.media-amazon.com/images/I/31imefykVML.jpg" onClick={thumbnail} className="p-2 rounded border m-1 thumbnail object-fit-cover" />
                                <img src="https://m.media-amazon.com/images/I/61W3EHtFA-L._SX569_.jpg" onClick={thumbnail} className="p-2 rounded border m-1 thumbnail object-fit-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="text-start">{router.query.name}</h1>

                            <div className="row">
                                
                                <div className="col-md-6">
                                <div className="mt-3">
                                    <div className="specification-item mb-2">
                                        <label className="fw-semibold">Brand</label>
                                        <span>Samsung</span>
                                    </div>
                                    <div className="specification-item mb-2">
                                        <label className="fw-semibold">Model Name</label>
                                        <span>Galaxy A54 5G</span>
                                    </div>
                                    <div className="specification-item mb-2">
                                        <label className="fw-semibold">Operating System</label>
                                        <span>Android 13.0</span>
                                    </div>
                                    <div className="specification-item mb-2">
                                        <label className="fw-semibold">RAM</label>
                                        <span>6 GB</span>
                                    </div>
                                    <div className="specification-item mb-2">
                                        <label className="fw-semibold">Storage</label>
                                        <span>256GB</span>
                                    </div>

                                    <div>
                                        <span className="bg-success fs-6 fw-bolder me-2 px-3 py-1 rounded-1 text-white">4.2</span> <a href="#">300 rating</a>
                                    </div>

                                    <div className="mt-3">
                                        <a href="#readmore">Read More</a>
                                    </div>
                            </div>
                                </div>
                                <div className="col-md-6">
                                    
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                    <h4 className="mt-3 fs-5 fw-semibold">Compare Pricing list</h4>
                                    <div className="pricing-list border p-3 rounded">
                                        <div className="align-items-center mb-3 d-flex justify-content-between price-item">
                                            <div>
                                                <img src="https://cdn.pricebaba.com/prod/images/merchant-store/STR-FLIPKART-COM/logo-raw.jpg" className="border p-2"/>
                                            </div>
                                            <div>
                                                <span className="fw-bolder fs-4"> Rs. <span>40,999</span></span>
                                            </div>
                                            <button className="btn btn-success">Buy Now</button>
                                        </div>
                                        <div className="align-items-center mb-3 d-flex justify-content-between price-item">
                                            <div>
                                                <img src="https://cdn.pricebaba.com/prod/images/merchant-store/STR-AMAZON-INDIA/logo-raw.jpg" className="border p-2"/>
                                            </div>
                                            <div>
                                                <span className="fw-bolder fs-4"> Rs. <span>35,300</span></span>
                                            </div>
                                            <button className="btn btn-success">Buy Now</button>
                                        </div>
                                        <div className="align-items-center mb-3 d-flex justify-content-between price-item">
                                            <div>
                                                <img src="https://cdn.pricebaba.com/prod/images/merchant-store/STR-CROMA-COM/logo-raw.jpg" className="border p-2"/>
                                            </div>
                                            <div>
                                                <span className="fw-bolder fs-4"> Rs. <span>38,999</span></span>
                                            </div>
                                            <button className="btn btn-success">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12">
                          
                        <h4 className="mt-3 fs-5 fw-semibold">youtube review videos</h4>

                          <div className="w-100 overflow-x-scroll youtube-section bg-light">
                            <div className="d-flex">
                                <div className="video-item border p-2 m-2">
                                   <iframe width="250" height="" src="https://www.youtube.com/embed/zdX9MANuliU" title="I Tested Samsung A54 5G For 10 Days - The Truth !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <a href="#" onClick={modaltoggle}  data-id="https://www.youtube.com/embed/zdX9MANuliU">View</a>
                                </div>
                                <div className="video-item border p-2 m-2">
                                   <iframe width="250" height="" src="https://www.youtube.com/embed/Y3w44Y-iZow" title="I Tested Samsung A54 5G For 10 Days - The Truth !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <a href="#" onClick={modaltoggle}  data-id="https://www.youtube.com/embed/Y3w44Y-iZow">View</a>
                                </div>
                                <div className="video-item border p-2 m-2">
                                   <iframe width="250" height="" src="https://www.youtube.com/embed/_QHY_EiqvG8" title="I Tested Samsung A54 5G For 10 Days - The Truth !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <a href="#" onClick={modaltoggle}  data-id="https://www.youtube.com/embed/_QHY_EiqvG8">View</a>
                                </div>
                                <div className="video-item border p-2 m-2">
                                   <iframe width="250" height="" src="https://www.youtube.com/embed/fLdbpnJ7HFg&t=6s" title="I Tested Samsung A54 5G For 10 Days - The Truth !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <a href="#" onClick={modaltoggle}  data-id="https://www.youtube.com/embed/fLdbpnJ7HFg&t=6s">View</a>
                                </div>
                                <div className="video-item border p-2 m-2">
                                   <iframe width="250" height="" src="https://www.youtube.com/embed/iu8gqnOSl7g" title="I Tested Samsung A54 5G For 10 Days - The Truth !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <a href="#" onClick={modaltoggle}  data-id="https://www.youtube.com/embed/iu8gqnOSl7g">View</a>
                                </div>
                                  
                            </div>
                            </div>

                        <button className="btn btn-primary text-start mt-3 d-none">Modal</button>

                            <div className="d-flex justify-content-center text-center">

    <div className={`${modalview} modal-box p-4 shadow-lg text-center w-100 mw-900px rounded position-fixed top-0 z-1`}>

        <div className="modal-container">
            <div className="modal-header w-100 justify-content-between">
                 <h4 className="text-center">Modal Title</h4>
                <button className="btn btn-primary" onClick={modaltoggle}>Close</button>
            </div>

            <div className="modal-body">
              <iframe width="100%" height="500px" id="main-youtube" src="https://www.youtube.com/embed/Y3w44Y-iZow" title="I Tested Samsung A54 5G For 10 Days - The Truth !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div>
       
    </div>
    <div className={`${modalview} modal-overlay modal-backdrop opacity-75 z-0`}></div>
        




                            </div>
                        </div>
                    </div>

                   

                    <div className="row mt-4" id="readmore">

                        
                        <div className="col-md-7"> 

                        <h4 className="mt-3 fs-5 fw-semibold">Specifications</h4>
                         
                         <div className="p-3 px-4 bg-light">
                        <div className="mt-3">
                                <div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Brand</label>
                                        <span>Samsung</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Model Name</label>
                                        <span>Galaxy A54 5G</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Operating System</label>
                                        <span>Android 13.0</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">RAM</label>
                                        <span>6 GB</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Storage</label>
                                        <span>256GB</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Battery</label>
                                        <span>6000mAh</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Front Camera</label>
                                        <span>32MP (f/2.2)</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Main Rear Camera </label>
                                        <span>50MP (f/1.8) OIS</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">CPU Type </label>
                                        <span>Octa-Core</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Screen Size </label>
                                        <span>6.4 inch </span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Resolution </label>
                                        <span>1080 x 2340(FHD+)</span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Max Refresh Rate </label>
                                        <span>120 Hz </span>
                                    </div>
                                    <div className="specification-item mb-3">
                                        <label className="fw-semibold">Video Recording Resolution </label>
                                        <span>UHD 4K (3840 x 2160)@30fps</span>
                                    </div>
                                </div>
                                
                            </div>
                            </div>

                        </div>
                        <div className="col-md-5">
                        <h4 className="mt-3 fs-5 fw-semibold">Reviews</h4>

                        <div className="my-3 d-flex align-items-center bg-light justify-content-between">
                            <h3 className="mb-4 fs-5 p-3 mt-2">Review Rating</h3>


                            <h5 className="fs-2">4.2<span className="fs-6">/5</span></h5>

                            <div className="p-3">
                                
                                <span className="small d-block">11  Ratings</span>
                                <span className="small d-block">11 Reviews</span>
                            </div>

                        </div>

                        <div className="my-3 d-flex align-items-center bg-light justify-content-between">
                            
                            <div className="mt-3 px-3">
                            <img src="https://cdn.pricebaba.com/prod/images/merchant-store/STR-AMAZON-INDIA/logo-raw.jpg" />
                            <h3 className="mb-4 fs-5">Review Rating</h3>
                            </div>
                            
                            <h5 className="fs-2">4.2<span className="fs-6">/5</span></h5>

                            <div className="p-3">
                                
                                <span className="small d-block">11  Ratings</span>
                                <span className="small d-block">11 Reviews</span>
                            </div>

                        </div>


                        <div className="my-3 d-flex align-items-center bg-light justify-content-between">
                            
                            <div className="mt-3 px-3 text-center">
                            <img src="https://cdn.pricebaba.com/prod/images/merchant-store/STR-FLIPKART-COM/logo-raw.jpg" className="mb-1" />
                            <h3 className="mb-4 fs-6">Review Rating</h3>
                            </div>
                            
                            <h5 className="fs-2">4.2<span className="fs-6">/5</span></h5>

                            <div className="p-3">
                                
                                <span className="small d-block">11  Ratings</span>
                                <span className="small d-block">11 Reviews</span>
                            </div>

                        </div>


                        <div className="my-3 d-flex align-items-center bg-light justify-content-between">
                            
                            <div className="mt-3 px-3 text-center">
                            <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
                             className="bg-dark p-1 mb-1" style={{width:"80px"}}/>
                            <h3 className="mb-4 fs-6">Review Rating</h3>
                            </div> 
                            
                            <h5 className="fs-2">4.2<span className="fs-6">/5</span></h5>

                            <div className="p-3">
                                
                                <span className="small d-block">11  Ratings</span>
                                <span className="small d-block">11 Reviews</span>
                            </div>

                        </div>

                        <div className="my-3 bg-light p-3">
                            
                            <div className="mt-3 px-3">
                            <h3 className="mb-4 fs-5">Submit Review</h3>
                            </div>
                            
                            <div className="p-3">
                                
                                
                            </div>

                        </div>


                        </div>
                    </div>

                    
                </div>
             </section>
        </Layout>
        </>
    )
}

export default Mobilename;
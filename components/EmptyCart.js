import React from 'react'
import cartgif from "../assets/cartGif.gif";
import "../styles/BestSellers.css";


const EmptyCart = () => {
    return (
        <>
        <style>
        {`
          body {
            background: url('https://st.depositphotos.com/4514073/59538/i/450/depositphotos_595386334-stock-photo-set-cosmetic-skin-care-products.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            height: 100vh;
          }

        `}
      </style>

        <div className=' emptyCartMainParent text-center relative top-20 h-full'>

            <div id='fs'>
                <p className=' text-3xl fof uppercase ' id='fs'>Cart Is Empty Maybe Order Something :) </p>
            </div>

            <img src={cartgif} className=" absolute cg" />
        </div>
        </>
    )
}

export default EmptyCart
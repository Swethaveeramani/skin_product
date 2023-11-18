import React from 'react'
import { store } from "../productsStore/Store";
import OurBestSellers from './OurBestSellers';

const Products = () => {
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
        <div className='ourBestSellersMainParent'>
            {store.map(((item) => {
                if (item.type === "ourBestSellers") {
                    return (

                        <OurBestSellers
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            image={item.primaryImage}
                        />
                    )

                }

            }))}
        </div>
        </>
    )
}

export default Products
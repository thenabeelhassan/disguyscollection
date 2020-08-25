import React from 'react';

import { Products } from './Products'

const Product = ( { product } ) => {

    return (
        <>
            {
                product.map(
                    (ecomSample, index) =>
                        <Products
                            ecomSample={ ecomSample }
                            key={ index }
                        />
                )
            }
        </>
    )
}

export default Product

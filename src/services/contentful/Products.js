import React from 'react';

export const Products = ( { ecomSample } ) => {


    const { productName, productImage, productDetails, productSize, productPrice } = ecomSample.fields;
    
    return (
        <section
            id='product'
            className='col-3'
        >
            <section>
                { productImage && (
                        <img
                            src={ productImage.fields.file.url }
                            alt={ productName }
                            title={ productName }
                            height='100%'
                        />
                    )
                }
            </section>
            <h3>
                { productName }
            </h3>
            <section
                id='details'
            >
                { productDetails }
            </section>
            <section
                id='size'
            >
                { productSize }
            </section>
            <section
                id='price'
            >
                { productPrice }
            </section>
        </section>
    )
}

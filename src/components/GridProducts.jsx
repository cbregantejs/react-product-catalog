import React from 'react';
import ItemProduct from './ItemProduct'

const GridProducts = ({products, error, isLoaded}) => {

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return ( 
            <div className="">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="py-3">
                            {products.length} Productos
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products && products.map(product => (
                            <div className="col-sm-4 mb-2" key={product.id} >
                                <ItemProduct product={product}/>
                            </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}

export default GridProducts;
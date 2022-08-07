import React from 'react';

const ItemProduct = ({product}) => {

    return (
        <>
            <div className="card card-body">
                <img style={{display: "block", margin: "0 auto 10px",
                maxHeight: "200px"}} className="img-fluid" 
                src={product.image + '?v=' + product.id} alt=""/>
                <p>{product.title}</p>
                <h3 className="text-left">{`S/${product.price}`}</h3>
            </div>
        </>
    )
}

export default ItemProduct;
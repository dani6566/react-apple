import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function SingleProduct() {
    const { id } = useParams(); // Reads the ID from /iphone/:id (e.g., "1")
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Call the specific backend endpoint: /product-list/:product_id
                const response = await fetch(`http://localhost:5000/product-list/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    setProduct(data[0] || null);
                } else if (data.product) {
                    setProduct(data.product);
                } else {
                    setProduct(data);
                }
            } catch (error) {
                console.error("Failed to fetch product:", error);
                setProduct(null);
            }
        };

        fetchProduct();
    }, [id]);


    if (!product || Object.keys(product).length === 0) {
        return (
            <div className="text-center top-100">
                <h2>Product not found</h2>
                <Link to="/iphone">Back to All iPhones</Link>
            </div>
        );
    }

    return (
        <section className="internal-page-wrapper top-100">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <div className="title-wraper bold">{product.product_name}</div>
                        <div className="brief-description">
                            {product.product_brief_description}
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100 top-100 bottom-100">
                    <div className="col-sm-12 col-md-6 my-auto">
                        <div className="starting-price">
                            {`Starting at ${product.starting_price}`}
                        </div>
                        <div className="monthly-price">{product.price_range}</div>
                        <div className="product-details my-3">
                            <p>{product.product_description}</p>
                        </div>
                        <div className="links-wrapper">
                            <ul>
                                <li>
                                    <Link to="/iphone">← Back to iPhone list</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="prodict-image">
                            <img src={product.product_url} alt={product.product_name} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleProduct;
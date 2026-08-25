import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Define async function inside useEffect
        const fetchProducts = async () => {
            console.log("🚀 useEffect started! Fetching data...");

            try {
                const response = await fetch("http://localhost:5000/product-list");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Raw data from API:", data);

                const productList = Array.isArray(data) ? data : data.products || [];

                setProducts(productList);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        // Call the async function
        fetchProducts();
    }, []);


    if (loading) {
        return <div className="text-center top-100">Loading products...</div>;
    }

    let order = 1;

    return (
        <div>
            <section className="internal-page-wrapper top-100">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <div className="title-wraper bold">Iphones</div>
                            <div className="brief-description">
                                The best for the brightest.
                            </div>
                        </div>
                    </div>

                    {products.length === 0 ? (
                        <div className="text-center my-5">No products found in database.</div>
                    ) : (
                        products.map((product) => {
                            let id = product.product_id;
                            let title = product.product_name;
                            let img = product.product_url;
                            let Brief = product.product_brief_description;
                            let StartPrice = product.starting_price;
                            let PriceRange = product.price_range;
                            let productPage = "/iphone/" + id;

                            let order1 = 1;
                            let order2 = 2;
                            if (order !== 1) {
                                order1 = 2;
                                order2 = 1;
                                order--;
                            } else {
                                order++;
                            }

                            return (
                                <div
                                    key={id || product.product_id}
                                    className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
                                >
                                    <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                                        <div className="product-title">{title}</div>
                                        <div className="product-brief">{Brief}</div>
                                        <div className="starting-price">
                                            {`Starting at ${StartPrice}`}
                                        </div>
                                        <div className="monthly-price">{PriceRange}</div>
                                        <div className="links-wrapper">
                                            <ul>
                                                <li>
                                                    <Link to={productPage}>Learn more</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={`col-sm-12 col-md-6 order-${order2}`}>
                                        <div className="prodict-image">
                                            <img src={img} alt={title} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </section>
        </div>
    );
}

export default Iphone;
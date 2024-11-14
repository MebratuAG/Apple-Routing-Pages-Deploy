import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Four04 from "../Four04/Four04";

function ProductPage() {
  const [product, setProduct] = useState([]); //console.log(useParams());
  const { productID } = useParams();
  console.log(productID);
  useEffect(() => {
    // fetch("http://localhost:3001/iphones")
    fetch("/iPhone.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        //console.log(productList);
        const singleProduct = productList.filter(
          (product) => product.product_url === productID
        );
        setProduct(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [productID]);

  // console.log(this.state.productID);
  if (product.length) {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {product?.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              // let productPage = "/iphone/" + id;
              let details = product.product_description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
}
export default ProductPage;

import React from "react";
import products from "../product.json";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ratingimg from "/src/assets/Star 3.png";

const Product = () => {
  console.log(products);

  return (
    <>
      <main className="d-flex flex-wrap justify-content-between gap-4 pt-2">
        {products.map((product) => {
            const{image,id,title,price,discountPrice,rating,rateCount}=product;
          return (
            <>
              <Card key={id} className="card-container">
                <Card.Img variant="top" src={image} className="w-100 card-img" />
                <Card.Body>
                  <Card.Title className="card-title"> {title} </Card.Title>
                  <div className="d-flex gap-1">
                    <div>
                        <img src={ratingimg} alt="rating-img" />
                        <img src={ratingimg} alt="rating-img" />
                        <img src={ratingimg} alt="rating-img" />
                        <img src={ratingimg} alt="rating-img" />
                        <img src={ratingimg} alt="rating-img" />
            
                    </div>
                    <div className="d-flex gap-2 pt-1 fw-bold">
                        <p>{rating}</p>
                        <p>({`${rateCount}`})</p>
                    </div>
                  </div>
                  <Card.Text className="d-flex gap-2 card-price">
                    #{price}
                    <span className="text-decoration-line-through card-discount-price">#{discountPrice}</span>
                  </Card.Text>
                <button className="w-100 add-to-cart-btn">Add to Cart</button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Product;

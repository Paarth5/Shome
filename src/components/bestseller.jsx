import React from "react";
import Card2 from "./card2";
import data from "../data/featured";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Bestseller = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      {/* <div>
        <h1 className="text-5xl font-bold text-center">Best Seller</h1>
        <p className="text-xl mt-5 text-center mb-10">
          There are many variations of passages of Lorem Ipsum available
        </p>
      </div>
      <div
        className="px-10
    lg:px-20
    xl:px-40
    xxl:px-60"
      >
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map((d) => {
            return <Card2 key={d.id} {...d} />;
          })}
        </Carousel>
      </div> */}
      <div
        className="flex px-10
    lg:px-20
    xl:px-40
    xxl:px-60 mt-20 justify-around flex-col xxl:flex-row items-center "
      >
        <div>
          <img
            src=".\assets\images\sports_shoes1.png"
            alt="blog"
            className="image-zoom"
          />
        </div>
        <div className="flex flex-col-reverse xxl:flex-col">
          <img
            src=".\assets\images\sports_shoes2.png"
            alt="blog"
            className="image-zoom"
          />
          <div className="xxl:mt-10 xxl:ml-10 my-3">
            <h1 className="text-6xl font-bold my-2">Sports Shoes</h1>
            <p className="text-2xl text-gray-500 my-4">
              UP TO 30% OFF ALL SHOES & PRODUCTS
            </p>
            <button
              className="mt-5 text-xl font-bold text-white bg-red-500 px-10 py-5 border border-red-500 border-4
          hover:bg-white hover:text-red-500"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestseller;

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  showCart,
  addToCart,
  removeAll,
  removeItem,
} from "../features/cartSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation } from "swiper";

import "swiper/css/navigation";

export default function ViewProductHero({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => prev - 1);
  };
  const handleATC = (product) => {
    const tempProduct = {
      qty: qty,
      product: product,
    };
    dispatch(addToCart(tempProduct));
  };

  return (
    <>
      {product ? (
        <div className="viewproduct-hero-main-container hidden md:block">
          <div className="breadcrumb-container ">
            <div className="breadcrumb-inner-main">
              <span className=" text-[#1a9cb7] mr-3">Men </span>
              <span className=" text-[#1a9cb7] ">
                <i className="fa-solid fa-chevron-right text-[#355C7D] "></i>
                <span className="ml-2">{product.category}</span>
              </span>
              <span className=" text-[#1a9cb7] mr-3">
                <i className="fa-solid fa-chevron-right text-[#355C7D] ml-2"></i>
                <span className="ml-2">{product.title}</span>{" "}
              </span>
            </div>
          </div>
          <div className="viewproduct-hero-inner ">
            <div className="viewproduct-hero-inner-left  ">
              <div className="inner-grid mt-3">
                <div className="product-img ">
                  <Swiper navigation={true} modules={[Navigation]} className="w-60">
                    <SwiperSlide className="">
                  <img src={product.image} alt="" className="w-24" />
                    </SwiperSlide>
                    <SwiperSlide className="">
                  <img src={product.image} alt="" className="w-24" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="product-details ">
                  <div className="product-title">
                    <p className="">{product.title}</p>
                  </div>
                  <div className="product-rating ">
                    <span className="text-yellow-300">
                      <small className="text-black">Ratings</small>
                      <i className="fa-solid fa-star  ml-1"></i>
                      <i className="fa-solid fa-star ml-1"></i>
                      <i className="fa-solid fa-star ml-1"></i>
                      <i className="fa-solid fa-star-half ml-1"></i>
                    </span>
                    <small>
                      Reviews <span className="text-[1rem]">(40)</span>
                    </small>
                  </div>
                  <div className="product-price my-4">
                    <span className="text-xl ml-4">RS : </span>
                    <span className="text-[1.4rem] text-[#355C7D] font-bold mr-4">
                      ${product.price}
                    </span>
                    <span className="del-price">
                      RS :234 <span className="ml-4 text-[1rem]">-30%</span>
                    </span>
                  </div>
                  {product && !product.colors ? (
                    <div className="product-colors">
                      <div className="atc-color ml-4 my-6">
                        <p className="mb-3 text-[#355C7D]">Colour </p>
                        <label htmlFor="red-l">
                          <input type="radio" name="color" id="red-l" />
                          <span className="color-text">redsdf</span>
                        </label>
                        <label htmlFor="blue-l">
                          <input type="radio" name="color" id="blue-l" />
                          <span className="color-text">blue</span>
                        </label>
                      </div>
                    </div>
                  ) : (
                    " no colurs"
                  )}
                </div>
              </div>

              <div className="product-desc">
                <p className="mb-3 text-[#355C7D] my-4 mx-3">Description </p>
                <p className="mx-3">{product.description}</p>
              </div>
            </div>
            <div className="  viewproduct-hero-inner-right">
              <div className="atc-title">
                <p className="px-2 py-3">{product.title}</p>
              </div>
              {product && !product.sizes ? (
                <div className="atc-size ml-4 my-3">
                  <p className="mb-3 text-[#355C7D]">sizes</p>
                  <label htmlFor="sx">
                    <input type="radio" className="" name="size" id="sx" />
                    <span className="size-text">sx</span>
                  </label>
                  <label htmlFor="s">
                    <input type="radio" name="size" id="s" />
                    <span className="size-text">s</span>
                  </label>
                  <label htmlFor="m">
                    <input type="radio" name="size" id="m" />
                    <span className="size-text">m</span>
                  </label>
                  <label htmlFor="l">
                    <input type="radio" name="size" id="l" />
                    <span className="size-text">l</span>
                  </label>
                </div>
              ) : (
                " no sizes avaible"
              )}

              {product && !product.colours ? (
                <div className="atc-color ml-4 my-6">
                  <p className="mb-3 text-[#355C7D]">Colour  </p>
                  <label htmlFor="red">
                    <input type="radio" name="color" id="red" />
                    <span className="color-text">red</span>
                  </label>
                  <label htmlFor="blue">
                    <input type="radio" name="color" id="blue" />
                    <span className="color-text">blue</span>
                  </label>
                </div>
              ) : (
                " no colours"
              )}

              <div className="atc-price product-price ml-4 my-6">
                <div className=" text-[#355C7D]">Price</div>
                <span className="del-price">RS : 23423</span>
                <span className="font-bold text-[#355C7D] ml-4 ">
                  RS : {product.price}
                </span>
                {qty > 1 ? (
                  <small className="">
                    {" "}
                    * {qty} = {product.price * qty}
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div className="atc-quatity text-center ml-4">
                <p className="text-start text-[#355C7D]">Quantity</p>
                <button onClick={decQty} className="border-2 px-3 py-1">
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="font-bold mx-3">{qty}</span>
                <button onClick={incQty} className="border-2 px-3 py-1">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              <div className="atc-cta flex justify-evenly mx-5  mt-6">
                <button
                  onClick={() => {}}
                  className="bg-[#355C7D] text-white w-full mr-2 rounded-sm"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    handleATC(product);
                  }}
                  className="bg-yellow-300 w-full rounded-sm py-1"
                >
                  Add To Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="viewproduct-hero-main-container">
          <div className="viewproduct-hero-inner ">
            <div className="viewproduct-hero-inner-left  ">
              <div className="inner-grid mt-3">
                <div className="w-24 h-24 mx-auto rounded-full  skelton"></div>
                <div className="product-details ">
                  <div className="product-title">
                    <p className="text-skelton"></p>
                    <p className="text-skelton"></p>
                    <p className="text-skelton"></p>
                    <p className="text-skelton"></p>
                  </div>

                  <div className="product-colors ">
                    <div className="atc-color ml-4 my-6 ">
                      <p className="mb-3 text-[#355C7D]">Colour </p>
                      <label htmlFor="red-l" className="skelton">
                        <input type="radio" name="color" id="red-l" />
                        <span className="color-text "></span>
                      </label>
                      <label htmlFor="blue-l" className="skelton">
                        <input type="radio" name="color" id="blue-l" />
                        <span className="color-text skelton"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-desc ">
                <p className="mb-3 text-[#355C7D] my-4 mx-3">Description </p>
                <p className="text-skelton"></p>
                <p className="text-skelton"></p>
                <p className="text-skelton"></p>
                <p className="text-skelton"></p>
              </div>
            </div>
            <div className="  viewproduct-hero-inner-right">
              <div className="atc-title ">
                <p className="text-skelton"></p>
                <p className="text-skelton"></p>
                <p className="text-skelton"></p>
                <p className="text-skelton"></p>
              </div>

              <div className="atc-quatity text-center ml-4">
                <p className="text-start text-[#355C7D]">Quantity</p>
                <button className="border-2 px-3 py-1">
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="font-bold mx-3">
                  <input
                    type="text"
                    name="quantity"
                    id=""
                    placeholder="0"
                    className="inline-block w-6 pl-2 "
                  />
                </span>
                <button className="border-2 px-3 py-1">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              <div className="atc-cta flex justify-evenly mx-5 mt-6">
                <button className="bg-[#355C7D] text-white w-full mr-2 rounded-sm skelton">
                  Buy Now
                </button>
                <button className="bg-yellow-300 w-full text-white rounded-sm py-1 skelton">
                  Add To Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="block md:hidden bg-white  my-4">
        
        {product ? ( <div className="flex flex-col ">
          <div className="">
            <Swiper  navigation={true} modules={[Navigation]}>
              <SwiperSlide >
            <img src={product.image} className="h-[50vh] rounded-md w-[45vh] mx-auto " alt="" />
              </SwiperSlide>
              <SwiperSlide >
            <img src={product.image} className="h-[50vh] rounded-md w-[45vh] mx-auto " alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="title my-3 px-3">
            <p className="font-bold my-4 text-[#355C7D] ">
              {product.title}
            </p>
          </div>
          <div className="flex flex-row mb-3 mx-3 gap-4">
           <div className="price">
            <p><small>From : </small></p>
            <span className=" text-xl font-bold text-green-400 mr-2">Rs. {product.price}</span>
           <small>
              <del>Rs. 0900</del>
            </small>
           </div>
           <div className="rating ml-auto mr-5 ">
              <span className="bg-green-200 py-1 px-3 rounded-md mr-1"> 4 strt</span>
              <small>400</small>
           </div>

          </div>



            <p className="ml-3 text-gray-400">Sizes : </p>
          <div id="pScreen-sizes" className=" atc-size flex flex-row gap-5 mb-4 justify-center ">
              <label htmlFor="size1" className="inline-flex justify-center items-center w-10 h-10 rounded-md border-2 border-grey-400 ">
              <input type="radio" name="color"  className="" id="size1" />
                <span className="text-[12px] font-bold">sx</span>
              </label>
              <label htmlFor="size2" className="inline-flex justify-center items-center w-10 h-10 rounded-md border-2 border-grey-400 ">
                <span className="text-[12px] font-bold">md</span>
              <input type="radio" name="color"  className="" id="size2" />
              </label>
              <label htmlFor="size3" className="inline-flex justify-center items-center w-10 h-10 rounded-md border-2 border-grey-400 ">
                <span className="text-[12px] font-bold">lg</span>
              <input type="radio" name="color"  className="" id="size3" />
              </label>
              <label htmlFor="size4" className="inline-flex justify-center items-center w-10 h-10 rounded-md border-2 border-grey-400 ">
                <span className="text-[12px] font-bold">lg</span>
              <input type="radio" name="color"  className="" id="size4" />
              </label>
            
          </div>



          <p className="ml-3 text-gray-400">Colours : </p>
          <div id="pScreen-colors" className="atc-product flex flex-row gap-5 mb-4 justify-center ">
              <label htmlFor="clr1" className="inline-flex justify-center items-center  w-12 h-12 border-2 border-white bg-blue-300 rounded-md">
              <span className="text-[12px] font-bold">blue</span>
              <input type="radio" name="color" className="" id="clr1" />
              </label>
            <label htmlFor="clr2" className="inline-flex justify-center items-center w-12 h-12 border-2 border-white bg-red-300 rounded-md">
            <span className="text-[12px] font-bold">red</span>
              <input type="radio" name="color" className="" id="clr2" />
              </label>
              <label htmlFor="clr3" className="inline-flex justify-center items-center  w-12 h-12 border-2 border-white bg-green-300 rounded-md">
              <span className="text-[12px] font-bold">green</span>

              <input type="radio" name="color" className="" id="clr3" />
              </label>
          </div>
          <div className="flex gap-2 mx-2">
            <button className="border-2 border-[#355C7D] py-2 rounded-md w-full">Buy Now</button>
            <button className="bg-[#355C7D] py-2 w-full rounded-md text-white font-bold">Add to Bag</button>
          </div>
        </div>) : ('')}
       
      </div>
    </>
  );
}

export default function ViewProductHero({product}) {
  return (
    <>{
      product ? ( <div className="viewproduct-hero-main-container">

<div className="breadcrumb-container">
        <div className="breadcrumb-inner-main">
          <span className=' text-[#1a9cb7] mr-3'>Men </span>
          <span className=' text-[#1a9cb7] '><i className="fa-solid fa-chevron-right text-[#355C7D] "></i><span  className="ml-2">{product.category}</span></span>
          <span className=' text-[#1a9cb7] mr-3'>
          <i className="fa-solid fa-chevron-right text-[#355C7D] ml-2"></i><span className="ml-2">{product.title}</span> </span>
        </div>
      </div>

      
      <div className="viewproduct-hero-inner ">
        <div className="viewproduct-hero-inner-left  ">
          <div className="inner-grid mt-3">
            <div className="product-img ">
              <img src={product.image} alt="" className="" />
            </div>
            <div className="product-details ">
              <div className="product-title">
                <p className="">
                {product.title}
                </p>
              </div>
              <div className="product-rating ">
                <span className="text-yellow-300">
                  <small className="text-black">Ratings</small>
                  <i className="fa-solid fa-star  ml-1"></i>
                <i className="fa-solid fa-star ml-1"></i>
                <i className="fa-solid fa-star ml-1"></i>
                <i className="fa-solid fa-star-half ml-1"></i>
                </span>
                <small>Reviews <span className="text-[1rem]">(40)</span></small>
              </div>
              <div className="product-price my-4">
              <span className="text-xl ml-4">RS : </span>
                <span className="text-[1.4rem] text-[#355C7D] font-bold mr-4">${product.price}</span>
                <span className="del-price">
                  RS :234 <span className="ml-4 text-[1rem]">-30%</span>
                </span>
              </div>
              {product && !product.colors ? (<div className="product-colors">
                <div className="atc-color ml-4 my-6">
                  <p className="mb-3 text-[#355C7D]">Colour </p>
                  <label htmlFor="red-l">
                    <input type="radio" name="color" id="red-l" />
                    <span className="color-text">red</span>
                  </label>
                  <label htmlFor="blue-l">
                    <input type="radio" name="color" id="blue-l" />
                    <span className="color-text">blue</span>
                  </label>
                </div>
              </div>) : (" no colurs")}
            </div>
          </div>

            <div className="product-desc">
            <p className="mb-3 text-[#355C7D] my-4 mx-3">Description </p>
              <p className="mx-3">{product.description}</p>
            </div>
            
        </div>
        <div className="  viewproduct-hero-inner-right">
          <div className="atc-title">
            <p className="px-2 py-3">
              {product.title}
            </p>
          </div>
          {product && !product.sizes ? (<div className="atc-size ml-4 my-3">
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
          </div>) : (" no sizes avaible")}

          {product && !product.colours ? (<div className="atc-color ml-4 my-6">
            <p className="mb-3 text-[#355C7D]">Colour </p>
            <label htmlFor="red">
              <input type="radio" name="color" id="red" />
              <span className="color-text">red</span>
            </label>
            <label htmlFor="blue">
              <input type="radio" name="color" id="blue" />
              <span className="color-text">blue</span>
            </label>
          </div>) : (' no colours')}

          <div className="atc-price product-price ml-4 my-6">
            <div className=" text-[#355C7D]">Price</div>
            <span className="del-price">RS : 23423</span>
            <span className="font-bold text-[#355C7D] ml-4 ">RS : {product.price}</span>
          </div>

          <div className="atc-quatity text-center ml-4">
            <p className="text-start text-[#355C7D]">Quantity</p>
            <button className="border-2 px-3 py-1"><i className="fa-solid fa-minus"></i></button>
            <span className="font-bold mx-3">0</span>
            <button className="border-2 px-3 py-1"><i className="fa-solid fa-plus"></i></button>
          </div>

          <div className="atc-cta flex justify-evenly mx-5  mt-6">
            <button className="bg-[#355C7D] text-white w-full mr-2 rounded-sm">
              Buy Now
            </button>
            <button className="bg-orange-400 w-full rounded-sm py-1">
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>) : ( <div className="viewproduct-hero-main-container">
      <div className="viewproduct-hero-inner ">
        <div className="viewproduct-hero-inner-left  ">
          <div className="inner-grid mt-3">
            <div className="w-24 h-24 mx-auto rounded-full  skelton">
            </div>
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
            <button className="border-2 px-3 py-1"><i className="fa-solid fa-minus"></i></button>
            <span className="font-bold mx-3">0</span>
            <button className="border-2 px-3 py-1"><i className="fa-solid fa-plus"></i></button>
          </div>

          <div className="atc-cta flex justify-evenly mx-5 mt-6">
            <button className="bg-[#355C7D] text-white w-full mr-2 rounded-sm skelton">
              Buy Now
            </button>
            <button className="bg-orange-400 w-full text-white rounded-sm py-1 skelton">
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>)
    }
     
    </>
  );
}

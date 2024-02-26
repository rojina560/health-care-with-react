
import React from 'react';

const Banner = () => {
    return (
      <div className="max-h-96 bg-sky-100">
        <div className="carousel ">
          <div id="item1" className="carousel-item w-full  md:max-h-[500px]">
            <img src="/src/assets/yoga-mat.png" className=" w-full mx-auto" />
          </div>
          <div id="item2" className="carousel-item w-full md:max-h-[500px]">
            <img src="/src/assets/foam-roller (2).jpg" className="w-full" />
          </div>
          <div id="item3" className="carousel-item w-full md:max-h-[500px]">
            <img src="/src/assets/essential-oil.jpg" className="w-full" />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2  gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    );
};

export default Banner;
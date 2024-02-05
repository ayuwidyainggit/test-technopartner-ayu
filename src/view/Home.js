import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo_technopartner.png";
import motif from "../assets/motif.png";
import qr from "../assets/qr.png";
import { Text2, Text3, Text4, Text5, Text6 } from "../components/Text";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import MainLayout from "../Layout/MainLayout";
import { connect } from "react-redux";
import { fetchHomeList } from "../redux/home/HomeAction";

const images = [logo, logo, logo];
const Home = (props) => {
  const [data, setData] = useState({ result: { banner: [] } });
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      handleSelect(nextIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  useEffect(() => {
    props.fetchHomeList();
  }, []);

  useEffect(() => {
    setData(props.homeList.data || { result: { banner: [] } });
  }, [props.homeList]);

  console.log("data home", data || []);

  return (
    <MainLayout>
      <div className="grid grid-cols-12">
        <div className="col-span-12 bg-white ">
          <img src={logo} alt="logo" className="w-[100px]" />
        </div>
        <div
          className="col-span-12  flex items-center h-[200px]"
          style={{ backgroundImage: `url(${motif})`, backgroundSize: "cover" }}
        >
          <div className="relative w-[90%] left-[5%] h-[75%] rounded-md bg-white shadow-md ">
            <div className="p-4">
              <Text2 text={data.result?.greeting} />
              <Text3 text={data.result?.name} />
            </div>
            <div className="px-4 grid grid-cols-12 bg-white ">
              <div className="col-span-3">
                <div className=" rounded-full w-[45px] h-[45px] bg-white flex justify-center items-center shadow-lg ">
                  <img
                    src={data.result?.qrcode}
                    alt="qr"
                    className="w-[30px] p-1  shadow-md"
                  />
                </div>
              </div>
              <div className="col-span-6  h-[70%] relative top-[15%]">
                <Text4 text="Saldo" />
                <Text4 text="Points" />
              </div>
              <div className="col-span-3  h-[70%] relative top-[15%] text-right">
                <Text6
                  text={"Rp " + (data.result?.saldo || 0).toLocaleString()}
                />
                <Text5
                  text={"Rp " + (data.result?.point || 0).toLocaleString()}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12  flex items-center h-[200px] bg-black">
          <Carousel
            autoPlay={false} // We manage auto-play manually
            interval={3000}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            selectedItem={currentIndex} // Set the currently selected item
            onChange={handleSelect} // Handle change in selection
            ref={carouselRef}
            className="carousel-wrapper control-dots"
          >
            {data.result?.banner.map((bannerImage, index) => (
              <div key={index} className="-z-10">
                <img src={bannerImage} alt={`slide-${index}`} className="" />
              </div>
            ))}
          </Carousel>
          <style jsx global>{`
            .carousel-wrapper {
              position: relative;
            }

            .carousel.carousel-slider .control-dots {
              position: absolute;
              bottom: 10px; /* Adjust as needed */
              left: 50%;
              transform: translateX(-50%);
              margin: 0;
              padding: 0;
              text-align: center;
              z-index: 1000;
              width: auto;
            }

            .carousel .control-dots .dot {
              background-color: rgba(255, 255, 255, 0.4);
              border-radius: 50%;
              cursor: pointer;
              display: inline-block;
              margin: 0 8px;
              padding: 5px;
              transition: opacity 0.25s ease;
            }

            .carousel .control-dots .dot.selected,
            .carousel .control-dots .dot:hover {
              background-color: rgba(255, 255, 255, 0.8);
            }

            .carousel .carousel-slider .slide img {
              border: 2px solid white; /* Add border to images */
            }
          `}</style>
        </div>
        <div className="col-span-12 text-right p-2">
          <Text5 text="View All >" />
        </div>

        {/* web */}

        <div
          className="hidden md:block col-span-12  flex items-center h-[200px] mt-[15rem]"
          style={{ backgroundImage: `url(${motif})`, backgroundSize: "cover" }}
        >
          <div className="relative w-[90%] left-[5%] h-[75%] rounded-md bg-white shadow-md ">
            <div className="p-4">
              <Text2 text={data.result?.greeting} />
              <Text3 text={data.result?.name} />
            </div>
            <div className="px-4 grid grid-cols-12 bg-white ">
              <div className="col-span-3">
                <div className=" rounded-full w-[45px] h-[45px] bg-white flex justify-center items-center shadow-lg ">
                  <img
                    src={data.result?.qrcode}
                    alt="qr"
                    className="w-[30px] p-1  shadow-md"
                  />
                </div>
              </div>
              <div className="col-span-6  h-[70%] relative top-[15%]">
                <Text4 text="Saldo" />
                <Text4 text="Points" />
              </div>
              <div className="col-span-3  h-[70%] relative top-[15%] text-right">
                <Text6
                  text={"Rp " + (data.result?.saldo || 0).toLocaleString()}
                />
                <Text5
                  text={"Rp " + (data.result?.point || 0).toLocaleString()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    homeList: state.homeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeList: () => dispatch(fetchHomeList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

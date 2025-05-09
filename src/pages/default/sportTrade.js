
import React, { useEffect, useRef } from "react";
import CoinData from "../../utils/CoinData";
import OrderBook from "../../utils/OrderBook";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton"
import { CgArrowsScrollV } from "react-icons/cg";
import { useLocation } from "react-router";
const SportTrade = () => {
  const containerRef = useRef();
  const location = useLocation();
  const { symbol, coinEndUrl } = location?.state || {};

  console.log(symbol === undefined, "locationlocation");



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "100%",
        height: 500,
        symbol: `BINANCE:${symbol === undefined ? "XTZUSDT" : symbol}`,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_widget",
      });
    };

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="col-span-2 relative  w-full">
        <div className="relative z-10">
          <CoinData />
        </div>
        <div className="absolute -top-[1px] left-0 z-50 w-full h-full pointer-events-none overscroll-y-auto">
          <div className="w-[98%] h-full flex flex-col gap-[2px]">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                onClick={() => console.log("Clicked row index:", index)}
                className="w-full h-[60px] cursor-pointer bg-transparent "
                style={{
                  pointerEvents: "auto",
                  zIndex: 50,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full col-span-6 mb-12 mx-auto">
        <div id="tradingview_widget" ref={containerRef} />
        <div className="p-3 border-r">
          <p className="text-gray-600 text-lg">Sports</p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-3">
            <div className="">
              <div className="flex flex-col gap-2 text-sm">
                <div>
                  <span className="text-sm text-gray-500 font-normal">Standard Trade Price (PER ETH):</span>
                  <span className="text-sm text-black font-normal"> 1974.49000000 USDT</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-normal">Insta Trade Price (PER ETH):</span>
                  <span className="text-sm text-black font-normal"> 1975.38000000 USDT</span>
                </div>
              </div>
              <div className="flex flex-col mt-2 gap-2 text-sm">
                <CustomInput
                  placeholder="Enter"
                  label={"Quantity :"}
                  endIcons={<CgArrowsScrollV />}
                />
                <CustomInput
                  placeholder="Enter"
                  endIcons={<CgArrowsScrollV />}
                  label={"Bid Price :"}
                />
                <CustomInput
                  placeholder="Enter"
                  endIcons={<CgArrowsScrollV />}
                  label={"Total :"}
                />

                <div className="flex border-b-2 border-gray-300 pb-2 flex-row items-center justify-between">
                  <span className="text-sm text-gray-500">Available Balance:</span>
                  <span className="text-sm text-black font-semibold">0.23427 USDT</span>
                </div>
                <CustomButton title="Buy Ethereum" className={"!bg-green-500 !mt-1"} />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-2 text-sm">
                <div>
                  <span className="text-sm text-gray-500 font-normal">Standard Trade Price (PER ETH):</span>
                  <span className="text-sm text-black font-normal"> 1974.49000000 USDT</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500 font-normal">Insta Trade Price (PER ETH):</span>
                  <span className="text-sm text-black font-normal"> 1975.38000000 USDT</span>
                </div>
              </div>
              <div className="flex flex-col mt-2 gap-2 text-sm">
                <CustomInput
                  placeholder="Enter"
                  label={"Quantity :"}
                  endIcons={<CgArrowsScrollV />}
                />
                <CustomInput
                  placeholder="Enter"
                  label={"Bid Price :"}
                  endIcons={<CgArrowsScrollV />}
                />
                <CustomInput
                  placeholder="Enter"
                  label={"Total :"}
                  endIcons={<CgArrowsScrollV />}
                />
                <div className="flex border-b-2 border-gray-300 pb-2 flex-row items-center justify-between">
                  <span className="text-sm text-gray-500">Available Balance:</span>
                  <span className="text-sm text-black font-semibold">0.23427 USDT</span>
                </div>
                <CustomButton title="Buy Ethereum" className={"!bg-red-500 !mt-1"} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="col-span-2 bg-white"><OrderBook /></div>

    </div>
  );
};

export default SportTrade;

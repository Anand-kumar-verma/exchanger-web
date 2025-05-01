import React from "react";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";

const Forex = () => {
  return (
    <CustomDiv>
      <CustomH1>
        <span className="text-secondary">Forex</span> Trading on Exchanger
      </CustomH1>

      <p className="text-gray-700 text-justify md:text-start md:text-lg leading-relaxed">
        Dive into the world’s most liquid financial market—Forex (Foreign Exchange)—with Exchanger. Our platform brings global currency trading to your fingertips, offering real-time market access, powerful tools, and a seamless experience for both new and professional traders.
      </p>

      <CustomH2 className="!mt-8">What Is Forex Trading?</CustomH2>
      <p className="text-gray-600">
        Forex trading involves buying one currency while simultaneously selling another. This global marketplace operates 24/5, allowing traders to speculate on the price movements of currency pairs like EUR/USD, GBP/JPY, and many more. It’s a fast-paced, high-volume market offering endless opportunities.
      </p>

      <CustomH2 className="!mt-8">Key Features</CustomH2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <span className="font-medium">Major, Minor & Exotic Pairs:</span> Trade across a wide range of currency pairs from global markets.
        </li>
        <li>
          <span className="font-medium">Tight Spreads:</span> Competitive pricing ensures more profit retention on every trade.
        </li>
        <li>
          <span className="font-medium">High Liquidity:</span> Execute trades instantly with minimal slippage, even during peak hours.
        </li>
        <li>
          <span className="font-medium">24/5 Market Access:</span> Trade anytime from Monday to Friday, in line with global market hours.
        </li>
        <li>
          <span className="font-medium">Advanced Charting Tools:</span> Use technical indicators and drawing tools to plan your strategy.
        </li>
      </ul>

      <CustomH2 className="!mt-8">Why Choose Exchanger for Forex?</CustomH2>
      <p className="text-gray-600 md:text-start text-justify md:text-lg ">
        Exchanger combines speed, transparency, and security to deliver a premium forex trading environment. Whether you're looking to hedge, speculate, or diversify, our platform is optimized for performance with top-tier infrastructure and real-time data accuracy.
      </p>


      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          Start Forex Trading
        </button>
      </div>
    </CustomDiv>
  );
};

export default Forex;

import React from "react";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";

const Market = () => {
  return (
    <CustomDiv>
      <CustomH1>
        Empower Your <span className="text-secondary">Trading Journey</span> with Exchanger
      </CustomH1>

      <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify md:text-center">
        Join the world’s most dynamic trading platform where innovation meets security. 
        Whether you're into Forex, Crypto, Margin, or Futures trading, Exchanger offers 
        everything you need to thrive in the global markets.
      </p>

     
      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
        Start Trading Now
        </button>
      </div>

      <CustomH2 className="!mt-8">
        Why Choose Exchanger?
      </CustomH2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Global Access</h3>
          <p className="text-gray-600 mt-2">
            With Exchanger, trade from anywhere in the world, 24/7. Our platform is designed to give you seamless access to multiple markets anytime you choose.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Robust Security</h3>
          <p className="text-gray-600 mt-2">
            Your security is our priority. With industry-leading encryption and two-factor authentication, your funds and data are protected around the clock.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Real-Time Market Data</h3>
          <p className="text-gray-600 mt-2">
            Stay ahead with live market data, comprehensive charting tools, and advanced analytics. Make informed decisions with real-time insights at your fingertips.
          </p>
        </div>
      </div>

      <CustomH2 className="!mt-8">
        Our Features
      </CustomH2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Easy-to-Use Interface</h3>
          <p className="text-gray-600 mt-2">
            Whether you’re a seasoned trader or just starting, our intuitive interface makes trading effortless, with easy navigation and a user-friendly dashboard.
          </p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Multiple Trading Options</h3>
          <p className="text-gray-600 mt-2">
            From crypto to Forex, margin to futures, Exchanger offers diverse trading options to fit your investment strategy. Expand your portfolio across markets.
          </p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Advanced Risk Management</h3>
          <p className="text-gray-600 mt-2">
            Protect your investments with powerful risk management tools such as stop-loss, take-profit, and trailing orders. Keep your trades on track, even during volatile times.
          </p>
        </div>
      </div>

      <CustomH2 className="!mt-8">
        The Exchanger Advantage
      </CustomH2>

      <p className=" text-sm md:text-lg text-gray-700 text-justify md:text-center mt-4">
        Exchanger isn’t just another trading platform. It’s a dynamic ecosystem designed to give you all the tools you need to succeed. Whether you’re a beginner or a pro, Exchanger helps you navigate the markets with confidence and ease.
      </p>


      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
        Join Exchanger Today
        </button>
      </div>
      
    </CustomDiv>
  );
};

export default Market;

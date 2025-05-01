import React from "react";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";

const FutureTrade = () => {
  return (
    <CustomDiv>
      <CustomH1>
        <span className="text-secondary">Future</span> Trading on Exchanger
      </CustomH1>

      <p className="text-gray-700 md:text-lg md:text-start text-justify leading-relaxed">
        Future trading on Exchanger allows traders to speculate on the future price of cryptocurrencies with precision and flexibility. Whether you anticipate the market to rise or fall, you can open long or short positions with leverage—making future trading a powerful tool for both hedging and profit-making strategies.
      </p>

      <CustomH2 className="!mt-8">What Is Future Trading?</CustomH2>
      <p className="text-gray-600 md:text-start text-justify">
        Futures are contractual agreements to buy or sell an asset at a predetermined price on a specified date. With Exchanger’s crypto futures, you don’t need to own the underlying asset. Instead, you trade contracts that mirror the price movements of assets like BTC, ETH, and USDT. This opens up new opportunities to profit in both rising and falling markets.
      </p>

      <CustomH2 className="!mt-8">Key Features</CustomH2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <span className="font-medium">Long & Short Positions:</span> Go long to profit from upward trends or short to benefit from declines.
        </li>
        <li>
          <span className="font-medium">Leverage Options:</span> Amplify your trades with up to 50x leverage depending on the trading pair.
        </li>
        <li>
          <span className="font-medium">Perpetual Contracts:</span> Trade with no expiration date while still enjoying the benefits of futures.
        </li>
        <li>
          <span className="font-medium">Advanced Charting Tools:</span> Analyze market trends using real-time charts and technical indicators.
        </li>
        <li>
          <span className="font-medium">Risk Management:</span> Set stop-loss and take-profit levels to manage your exposure effectively.
        </li>
      </ul>

      <CustomH2 className="!mt-8">Why Trade Futures on Exchanger?</CustomH2>
      <p className="text-gray-600">
        Our Future Trade platform is built for performance, security, and ease of use. With lightning-fast order execution, deep liquidity, and a robust trading engine, Exchanger is the ideal place to explore the full potential of crypto futures—whether you're a beginner or an advanced trader.
      </p>

      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          Start Future Trading
        </button>
      </div>

    </CustomDiv>
  );
};

export default FutureTrade;

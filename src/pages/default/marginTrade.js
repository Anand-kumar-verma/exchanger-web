import React from "react";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";

const MarginTrade = () => {
  return (
    <CustomDiv>
      <CustomH1>
        <span className="!text-secondary">Margin</span> Trading on Exchanger
      </CustomH1>

      <p className="text-gray-700 md:text-start text-justify md:text-lg leading-relaxed">
        Margin trading on Exchanger allows users to amplify their trading potential by using
        borrowed funds to open larger positions than their current balance would permit.
        This advanced feature is designed for experienced traders who want to capitalize on
        market volatility and maximize returns—while understanding the risks involved.
      </p>

      <CustomH2 className="!mt-8">What Is Margin Trading?</CustomH2>
      <p className="text-gray-600 md:text-start text-justify">
        In margin trading, you can trade assets with leverage—meaning you can open positions
        that are multiple times larger than your account balance. For example, with 5x
        leverage, you can trade $5,000 worth of assets with just $1,000 in your wallet.
        Exchanger provides a secure and intuitive margin trading experience across popular
        assets like BTC, ETH, USDT, and more.
      </p>

      <CustomH2 className="!mt-8">Key Features</CustomH2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <span className="font-medium">Leverage Options:</span> Choose your preferred leverage
          from 2x up to 10x based on your risk tolerance.
        </li>
        <li>
          <span className="font-medium">Isolated & Cross Margin:</span> Select between isolated
          margin for single trades or cross margin for account-wide collateral.
        </li>
        <li>
          <span className="font-medium">Advanced Risk Management:</span> Tools like stop-loss,
          take-profit, and liquidation alerts to help manage trades effectively.
        </li>
        <li>
          <span className="font-medium">Real-Time PnL Tracking:</span> Instantly monitor your
          profits and losses as the market moves.
        </li>
        <li>
          <span className="font-medium">Professional UI/UX:</span> Clean trading interface with
          charts, order books, and live position updates.
        </li>
      </ul>

      <CustomH2 className="!mt-8">Trade Responsibly</CustomH2>
      <p className="text-gray-600 md:text-start text-justify">
        Margin trading offers great opportunities but also carries significant risk. On
        Exchanger, we provide in-app education, tutorials, and protective measures to help
        traders make informed decisions. Always understand your exposure and use leverage
        wisely.
      </p>

     
      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
        Start Margin Trading
        </button>
      </div>
    </CustomDiv>
  );
};

export default MarginTrade;

import React from "react";
import { CustomDiv } from "../../components/customHeading";

const SportTrade = () => {
  return (
    <CustomDiv>
      <h1 className="text-xl md:text-3xl font-bold text-gray-800 text-center">
        Welcome to <span className="text-secondary">Sport Trade</span>
      </h1>

      <p className="text-gray-600 text-sm md:text-lg  text-justify md:text-start  leading-relaxed">
        Sport Trade brings a revolutionary way to engage with live sports by combining the
        thrill of competition with the dynamics of financial trading. Unlike traditional
        betting platforms, Sport Trade allows users to buy and sell positions based on live
        sporting events—just like trading stocks or cryptocurrencies.
      </p>

      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">What Is Sport Trading?</h2>
      <p className="text-gray-600 text-justify">
        Sport trading lets you treat your favorite teams and athletes like financial assets.
        As the game progresses, player and team values fluctuate based on real-time
        performance. You can make strategic trades during the match to lock in profits or
        cut losses—giving you total control over your outcomes.
      </p>

      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
      <ul className="space-y-3 list-disc list-inside text-gray-700">
        <li>
          <span className="font-medium">Live Market Dynamics:</span> Prices move in real-time
          based on match conditions and statistics.
        </li>
        <li>
          <span className="font-medium">Smart Trading Interface:</span> Intuitive dashboard for
          buying, selling, and tracking your positions.
        </li>
        <li>
          <span className="font-medium">Instant Execution:</span> Trades are executed with
          speed and accuracy to keep up with live action.
        </li>
        <li>
          <span className="font-medium">Multi-Sport Support:</span> Trade across football,
          basketball, cricket, tennis, and more.
        </li>
        <li>
          <span className="font-medium">Analytics & Insights:</span> Use real-time stats and
          charts to make informed decisions.
        </li>
      </ul>

      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">Why Choose Sport Trade?</h2>
      <p className="text-gray-600">
        Sport Trade transforms passive viewership into an interactive, skill-based experience.
        Whether you're a sports fan, trader, or both, you'll love the combination of
        adrenaline and strategy.
      </p>


      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          Start Trading Now
        </button>
      </div>
    </CustomDiv>
  );
};

export default SportTrade;

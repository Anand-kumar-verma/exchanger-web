import React from "react";
import CustomButton from "../../components/customButton";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";

const Assets = () => {
  return (
    <CustomDiv>
      <CustomH1 >
        Your Digital <span className="text-secondary">Assets</span>
      </CustomH1>

      <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify lg:text-start">
        Keep track of your assets and manage your portfolio with ease. View your current balance,
        recent transactions, and trade performance across multiple digital currencies.
      </p>

      <div className="text-center my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          View Asset Details
        </button>
      </div>

      <CustomH2 className="!mt-6">
        Your Asset Portfolio
      </CustomH2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Bitcoin (BTC)</h3>
          <p className="text-gray-600 mt-2">Current Balance: 1.23 BTC</p>
          <p className="text-gray-600 mt-2">Value: $32,000</p>
          <div className="mt-4">
            <CustomButton title="Buy / Sell" />
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Ethereum (ETH)</h3>
          <p className="text-gray-600 mt-2">Current Balance: 5.00 ETH</p>
          <p className="text-gray-600 mt-2">Value: $10,000</p>
          <div className="mt-4">
            <CustomButton title="Buy / Sell" />
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Tether (USDT)</h3>
          <p className="text-gray-600 mt-2">Current Balance: 10,000 USDT</p>
          <p className="text-gray-600 mt-2">Value: $10,000</p>
          <div className="mt-4">
            <CustomButton title="Buy / Sell" />
          </div>
        </div>
      </div>

      <CustomH2 className="!mt-12">
        Recent Asset Activity
      </CustomH2>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 md:py-4 text-left text-gray-700">Asset</th>
              <th className="px-6 py-2 md:py-4 text-nowrap text-left text-gray-700">Action</th>
              <th className="px-6 py-2 md:py-4 text-nowrap text-left text-gray-700">Amount</th>
              <th className="px-6 py-2 md:py-4 text-nowrap text-left text-gray-700">Date</th>
              <th className="px-6 py-2 md:py-4 text-nowrap text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-2 md:py-4 text-nowrap">Bitcoin (BTC)</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">Buy</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">0.5 BTC</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">April 26, 2025</td>
              <td className="px-6 py-2 md:py-4 text-nowrap text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="px-6 py-2 md:py-4 text-nowrap">Ethereum (ETH)</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">Sell</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">2 ETH</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">April 24, 2025</td>
              <td className="px-6 py-2 md:py-4 text-nowrap text-red-600">Failed</td>
            </tr>
            <tr>
              <td className="px-6 py-2 md:py-4 text-nowrap">Tether (USDT)</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">Buy</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">500 USDT</td>
              <td className="px-6 py-2 md:py-4 text-nowrap">April 23, 2025</td>
              <td className="px-6 py-2 md:py-4 text-nowrap text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>


    </CustomDiv>
  );
};

export default Assets;

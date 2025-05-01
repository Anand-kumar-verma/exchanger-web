import React from "react";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";
import CustomButton from "../../components/customButton";
const Transactions = () => {
  return (
    <CustomDiv>
      <CustomH1>
        Your <span className="text-secondary">Transaction</span> History
      </CustomH1>

      <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify md:text-start">
        View all your completed transactions in one place. From crypto purchases to forex trades,
        track every detail, including transaction status, fees, and trade performance.
      </p>


      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          View All Transactions
        </button>
      </div>

      <CustomH2 className="!mt-8">
        Recent Transactions
      </CustomH2>

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-nowrap md:py-4 text-left text-gray-700">Transaction ID</th>
              <th className="px-6 py-2 text-nowrap md:py-4 text-left text-gray-700">Asset</th>
              <th className="px-6 py-2 text-nowrap md:py-4 text-left text-gray-700">Type</th>
              <th className="px-6 py-2 text-nowrap md:py-4 text-left text-gray-700">Amount</th>
              <th className="px-6 py-2 text-nowrap md:py-4 text-left text-gray-700">Date</th>
              <th className="px-6 py-2 text-nowrap md:py-4 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-2 text-nowrap md:py-4">#12345</td>
              <td className="px-6 py-2 text-nowrap md:py-4">Bitcoin (BTC)</td>
              <td className="px-6 py-2 text-nowrap md:py-4">Buy</td>
              <td className="px-6 py-2 text-nowrap md:py-4">$10,000</td>
              <td className="px-6 py-2 text-nowrap md:py-4">April 25, 2025</td>
              <td className="px-6 py-2 text-nowrap md:py-4 text-green-600">Completed</td>
            </tr>
            <tr>
              <td className="px-6 py-2 text-nowrap md:py-4">#12346</td>
              <td className="px-6 py-2 text-nowrap md:py-4">Ethereum (ETH)</td>
              <td className="px-6 py-2 text-nowrap md:py-4">Sell</td>
              <td className="px-6 py-2 text-nowrap md:py-4">$2,500</td>
              <td className="px-6 py-2 text-nowrap md:py-4">April 24, 2025</td>
              <td className="px-6 py-2 text-nowrap md:py-4 text-red-600">Failed</td>
            </tr>
            <tr>
              <td className="px-6 py-2 text-nowrap md:py-4">#12347</td>
              <td className="px-6 py-2 text-nowrap md:py-4">USDT (Tether)</td>
              <td className="px-6 py-2 text-nowrap md:py-4">Buy</td>
              <td className="px-6 py-2 text-nowrap md:py-4">$5,000</td>
              <td className="px-6 py-2 text-nowrap md:py-4">April 23, 2025</td>
              <td className="px-6 py-2 text-nowrap md:py-4 text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <CustomH2 className="!mt-8">
        Filter and Search Transactions
      </CustomH2>

      <div className="bg-white mt-4 p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          {/* Asset */}
          <div className="w-full md:w-1/4">
            <label htmlFor="asset" className="text-gray-700 block mb-1">Asset</label>
            <select
              id="asset"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
            >
              <option value="all">All Assets</option>
              <option value="btc">Bitcoin</option>
              <option value="eth">Ethereum</option>
              <option value="usdt">USDT</option>
              <option value="eur">Euro</option>
            </select>
          </div>

          {/* Status */}
          <div className="w-full md:w-1/4">
            <label htmlFor="status" className="text-gray-700 block mb-1">Status</label>
            <select
              id="status"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
            >
              <option value="all">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Date */}
          <div className="w-full md:w-1/4">
            <label htmlFor="date" className="text-gray-700 block mb-1">Date</label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-lg text-gray-700"
            />
          </div>

          {/* Button */}
          <div className="w-full md:w-1/4 flex items-end">
            <CustomButton title="Filters" className="w-full" />
          </div>
        </div>
      </div>



    </CustomDiv>
  );
};

export default Transactions;

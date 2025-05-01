import React from "react";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";

const Order = () => {
  return (
    <CustomDiv>
      <CustomH1>
        Manage Your <span className="text-secondary">Orders</span> on Exchanger
      </CustomH1>

      <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify md:text-center">
        Whether you’re placing your first trade or managing multiple positions,
        Exchanger makes it easy to place, track, and manage your orders.
        Experience smooth trading with real-time updates and complete order control.
      </p>


      <div className="text-center !my-8">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          Place a New Order
        </button>
      </div>

      <CustomH2 className="!mt-8">
        How to Place an Order
      </CustomH2>

      <p className="text-gray-700 text-start mt-1">
        Follow these easy steps to place your order on Exchanger:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">1. Choose Your Asset</h3>
          <p className="text-gray-600 mt-2">
            Select from a wide range of trading assets—crypto, forex, stocks, and more.
            Pick the one you wish to trade and enter the quantity you want to buy or sell.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">2. Choose Order Type</h3>
          <p className="text-gray-600 mt-2">
            Select whether you want to place a **Market Order** for immediate execution or a **Limit Order** to set a specific price at which you want to buy or sell.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">3. Confirm and Execute</h3>
          <p className="text-gray-600 mt-2">
            Double-check the details of your order, confirm your trade, and execute it instantly.
            Your order will be placed based on real-time market conditions.
          </p>
        </div>
      </div>

      <CustomH2 className="!mt-8">
        View and Manage Your Orders
      </CustomH2>

      <div className="text-center mt-4">
        <p className="text-gray-700 text-justify md:text-start" >
          You can view your order status, track open positions, and manage active orders directly
          from your **Order History**.
          Check for updates, modify or cancel open orders, and track their progress in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Order History</h3>
          <p className="text-gray-600 mt-2">
            Review your past trades and see detailed transaction history, including buy/sell details, order price, and timestamps.
          </p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Active Orders</h3>
          <p className="text-gray-600 mt-2">
            Track all your open orders and pending transactions. Stay updated with real-time status and changes in order price.
          </p>
        </div>
      </div>

      <CustomH2 className="!my-6">
        Order Management Tools
      </CustomH2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Modify Orders</h3>
          <p className="text-gray-600 mt-2">
            Easily modify or update your active orders to adjust to market movements and your trading strategy.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Cancel Orders</h3>
          <p className="text-gray-600 mt-2">
            If your market conditions change, quickly cancel open orders to prevent unwanted transactions or loss.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Order Notifications</h3>
          <p className="text-gray-600 mt-2">
            Stay notified with real-time alerts on order status changes, execution confirmations, or cancellations.
          </p>
        </div>
      </div>



      <div className="text-center !my-12">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-2 md:py-4 text-lg rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition">
          Go to My Orders
        </button>
      </div>
    </CustomDiv>
  );
};

export default Order;

import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";

const OrderBook = () => {
    const location = useLocation();
    const { symbol } = location?.state || {};
    const [bids, setBids] = useState([]);
    const [asks, setAsks] = useState([]);
    const btcCoins = symbol === undefined ? "btcusdt" : symbol
    const socket = useMemo(() => { return new WebSocket(`wss://stream.binance.com:9443/ws/${btcCoins.toLowerCase()}@depth5`) }, []
    )
    useEffect(() => {

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setBids(data?.bids?.slice(0, 8)); // Limit to top 5 bids
            setAsks(data?.asks?.slice(0, 8)); // Limit to top 5 asks
        };

        return () => socket.close(); // Clean up when the component unmounts
    }, [socket]);

    return (
        <div className=" ">
            <div className="flex px-3 pt-5 flex-row items-center pb-1 border-b border-gray-300 gap-3">
                <p className="text-black font-semibold  text-sm">Order Book </p>
                <p className="text-gray-400 font-semibold  text-sm">Recent Trades</p>
            </div>
            <div className="px-3">
                <table>
                    <thead>
                        <tr>
                            <th className="text-red-500 text-xs">Price (USDT)</th>
                            <th className="text-red-500 text-xs">-</th>
                            <th className="text-red-500 text-xs">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bids?.map(([price, quantity]) => (
                            <tr key={price}>
                                <td className="text-green-500 text-sm">{parseFloat(price).toFixed(2)}</td>
                                <td className="text-gray-500 text-sm">-</td>
                                <td className="text-gray-500 text-sm">{parseFloat(quantity).toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="px-3 mt-3">
                <h3 className="">Asks</h3>
                <table>
                    <thead>
                        <tr>
                            <th className="text-green-500 text-xs">Price (USDT)</th>
                            <th className="text-green-500 text-xs">-</th>
                            <th className="text-green-500 text-xs">Quantity</th>

                        </tr>
                    </thead>
                    <tbody>
                        {asks?.map(([price, quantity]) => (
                            <tr key={price}>
                                <td className="text-red-500 text-sm">{parseFloat(price).toFixed(5)}</td>
                                <td className="text-gray-500 text-sm">-</td>
                                <td className="text-gray-500 text-sm">{parseFloat(quantity).toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderBook;

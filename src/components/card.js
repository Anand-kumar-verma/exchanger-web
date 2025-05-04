import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import CustomButton from './customButton';

function Card({
    id = "",
    title = "",
    coinEndUrl = "",
    icons = "",
    symbol = "",
    symbolTitle = "BINANCE"
}) {
    const chartRef = useRef(null);
    const [btcData, setBtcData] = useState(null);


    console.log(id, title, coinEndUrl, icons, symbol, "symbol");



    useEffect(() => {
        const fetchBTCData = async () => {
            try {
                const response = await axios.get(
                    `https://api.coingecko.com/api/v3/coins/${coinEndUrl}`
                );
                setBtcData(response.data.market_data);
            } catch (error) {
                console.error('Failed to fetch BTC data', error);
            }
        };

        fetchBTCData();
    }, []);

    // Inject TradingView widget ONLY after btcData is loaded
    useEffect(() => {
        if (!btcData || !chartRef.current) return;

        // Clear existing chart content
        chartRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
        script.async = true;
        script.type = 'text/javascript';
        script.innerHTML = JSON.stringify({
            symbol: `${symbolTitle}:${symbol}`,
            width: '100%',
            height: '100%',
            locale: 'en',
            dateRange: '1D',
            colorTheme: 'light',
            trendLineColor: '#4caf50',
            underLineColor: 'rgba(76, 175, 80, 0.1)',
            isTransparent: true,
            autosize: true,
        });

        chartRef.current.appendChild(script);
    }, [btcData]); // Re-run when btcData is available

    if (!btcData) {
        return <div className="text-center py-4">Loading {title} data...</div>;
    }

    return (
        <div className=" bg-white rounded-xl shadow-md p-4 font-sans">
            <div className="flex items-center mb-4">
                <FaBitcoin className="text-yellow-500 text-xl mr-2" />
                <h2 className="text-lg font-semibold">{title}</h2>
                <span className="ml-auto text-gray-400 text-xl">★</span>
            </div>
            <div ref={chartRef} className="h-44 mb-4" />

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                    <p className="text-gray-500">Price</p>
                    <p className="font-bold text-gray-800">
                        {btcData.current_price.usd.toLocaleString()}{' '}
                        <span className="text-xs text-gray-500">USD</span>
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Volume (24h)</p>
                    <p className="font-bold text-gray-800">
                        {btcData.total_volume.usd.toLocaleString()}{' '}
                        <span className="text-xs text-gray-500">USD</span>
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Circulating Supply</p>
                    <p className="font-bold text-gray-800">
                        {Math.floor(btcData.circulating_supply).toLocaleString()}{' '}
                        <span className="text-xs text-gray-500">BTC</span>
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Change (24h)</p>
                    <p
                        className={`font-bold ${btcData.price_change_percentage_24h >= 0
                            ? 'text-green-600'
                            : 'text-red-500'
                            }`}
                    >
                        {btcData.price_change_percentage_24h.toFixed(2)}%
                    </p>
                </div>
            </div>

            <CustomButton title="Trade" className={'!w-full'} />
        </div>
    );
}

export default Card;

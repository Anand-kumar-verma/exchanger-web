// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import { FaBitcoin } from 'react-icons/fa';
// import CustomButton from './customButton';
// import { Skeleton, Box, Typography, IconButton } from '@mui/material';
// import { useNavigate } from 'react-router';
// function Card({
//     id = "",
//     title = "",
//     coinEndUrl = "",
//     icons = "",
//     symbol = "",
//     symbolTitle = "BINANCE"
// }) {
//     const chartRef = useRef(null);
//     const navigate = useNavigate()
//     const [btcData, setBtcData] = useState(null);
//     useEffect(() => {
//         const fetchBTCData = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://api.coingecko.com/api/v3/coins/${coinEndUrl}`
//                 );
//                 setBtcData(response.data.market_data);
//             } catch (error) {
//                 console.error('Failed to fetch BTC data', error);
//             }
//         };

//         fetchBTCData();
//     }, []);

//     // Inject TradingView widget ONLY after btcData is loaded
//     useEffect(() => {
//         if (!btcData || !chartRef.current) return;

//         // Clear existing chart content
//         chartRef.current.innerHTML = '';

//         const script = document.createElement('script');
//         script.src =
//             'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
//         script.async = true;
//         script.type = 'text/javascript';
//         script.innerHTML = JSON.stringify({
//             symbol: `${symbolTitle}:${symbol}`,
//             width: '100%',
//             height: '100%',
//             locale: 'en',
//             dateRange: '1D',
//             colorTheme: 'light',
//             trendLineColor: '#4caf50',
//             underLineColor: 'rgba(76, 175, 80, 0.1)',
//             isTransparent: true,
//             autosize: true,
//         });

//         chartRef.current.appendChild(script);
//     }, [btcData]); // Re-run when btcData is available

//     if (!btcData) {
//         return <Box
//             sx={{
//                 backgroundColor: 'white',
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 2,
//                 fontFamily: 'sans-serif',
//             }}
//         >
//             {/* Header */}
//             <Box display="flex" alignItems="center" mb={2}>
//                 <Skeleton variant="circular" width={24} height={24} />
//                 <Skeleton variant="text" width="30%" sx={{ ml: 1 }} />
//                 <Skeleton variant="text" width={20} sx={{ ml: 'auto' }} />
//             </Box>

//             {/* Chart Area */}
//             <Skeleton variant="rectangular" height={176} width="100%" sx={{ mb: 2 }} />

//             {/* Info Grid */}
//             <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mb={2}>
//                 {[...Array(4)].map((_, i) => (
//                     <Box key={i}>
//                         <Skeleton variant="text" width="60%" />
//                         <Skeleton variant="text" width="80%" />
//                     </Box>
//                 ))}
//             </Box>

//             {/* Button */}
//             <Skeleton variant="rectangular" height={40} width="100%" />
//         </Box>
//     }

//     return (
//         <div className=" bg-white rounded-xl shadow-md p-4 font-sans">
//             <div className="flex items-center mb-4">
//                 <FaBitcoin className="text-yellow-500 text-xl mr-2" />
//                 <h2 className="text-lg font-semibold">{title}</h2>
//                 <span className="ml-auto text-gray-400 text-xl">★</span>
//             </div>
//             <div ref={chartRef} className="h-44 mb-4" />

//             <div className="grid grid-cols-2 gap-4 text-sm mb-4">
//                 <div>
//                     <p className="text-gray-500">Price</p>
//                     <p className="font-bold text-gray-800">
//                         {btcData.current_price.usd.toLocaleString()}{' '}
//                         <span className="text-xs text-gray-500">USD</span>
//                     </p>
//                 </div>
//                 <div>
//                     <p className="text-gray-500">Volume (24h)</p>
//                     <p className="font-bold text-gray-800">
//                         {btcData.total_volume.usd.toLocaleString()}{' '}
//                         <span className="text-xs text-gray-500">USD</span>
//                     </p>
//                 </div>
//                 <div>
//                     <p className="text-gray-500">Circulating Supply</p>
//                     <p className="font-bold text-gray-800">
//                         {Math.floor(btcData.circulating_supply).toLocaleString()}{' '}
//                         <span className="text-xs text-gray-500">BTC</span>
//                     </p>
//                 </div>
//                 <div>
//                     <p className="text-gray-500">Change (24h)</p>
//                     <p
//                         className={`font-bold ${btcData.price_change_percentage_24h >= 0
//                             ? 'text-green-600'
//                             : 'text-red-500'
//                             }`}
//                     >
//                         {btcData.price_change_percentage_24h.toFixed(2)}%
//                     </p>
//                 </div>
//             </div>

//             <CustomButton title="Trade" onClick={() => navigate("/sport-trade", {
//                 state: {
//                     symbol: symbol,
//                     coinEndUrl: coinEndUrl
//                 }
//             })} className={'!w-full'} />
//         </div>
//     );
// }

// export default Card;



import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import CustomButton from './customButton';
import { Skeleton, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { useInView } from 'react-intersection-observer';

function Card({
    id = "",
    title = "",
    coinEndUrl = "",
    icons = "",
    symbol = "",
    symbolTitle = "BINANCE"
}) {
    const chartRef = useRef(null);
    const navigate = useNavigate();
    const [btcData, setBtcData] = useState(null);
    const { ref, inView } = useInView({ triggerOnce: true }); // Observe visibility

    // Fetch coin data when in view
    useEffect(() => {
        if (!inView) return;
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
    }, [inView, coinEndUrl]);

    // Inject TradingView widget when data is available
    useEffect(() => {
        if (!btcData || !chartRef.current) return;

        chartRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
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
    }, [btcData]);

    if (!inView || !btcData) {
        return (
            <Box
                ref={ref}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 2,
                    fontFamily: 'sans-serif',
                }}
            >
                <Box display="flex" alignItems="center" mb={2}>
                    <Skeleton variant="circular" width={24} height={24} />
                    <Skeleton variant="text" width="30%" sx={{ ml: 1 }} />
                    <Skeleton variant="text" width={20} sx={{ ml: 'auto' }} />
                </Box>

                <Skeleton variant="rectangular" height={176} width="100%" sx={{ mb: 2 }} />

                <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} mb={2}>
                    {[...Array(4)].map((_, i) => (
                        <Box key={i}>
                            <Skeleton variant="text" width="60%" />
                            <Skeleton variant="text" width="80%" />
                        </Box>
                    ))}
                </Box>

                <Skeleton variant="rectangular" height={40} width="100%" />
            </Box>
        );
    }

    return (
        <div ref={ref} className="bg-white rounded-xl shadow-md p-4 font-sans">
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
                        {btcData.current_price.usd.toLocaleString()} <span className="text-xs text-gray-500">USD</span>
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Volume (24h)</p>
                    <p className="font-bold text-gray-800">
                        {btcData.total_volume.usd.toLocaleString()} <span className="text-xs text-gray-500">USD</span>
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Circulating Supply</p>
                    <p className="font-bold text-gray-800">
                        {Math.floor(btcData.circulating_supply).toLocaleString()} <span className="text-xs text-gray-500">BTC</span>
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Change (24h)</p>
                    <p className={`font-bold ${btcData.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                        {btcData.price_change_percentage_24h.toFixed(2)}%
                    </p>
                </div>
            </div>

            <CustomButton
                title="Trade"
                onClick={() =>
                    navigate('/sport-trade', {
                        state: {
                            symbol: symbol,
                            coinEndUrl: coinEndUrl,
                        },
                    })
                }
                className={'!w-full'}
            />
        </div>
    );
}

export default Card;

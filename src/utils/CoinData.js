import React, { useEffect, useRef, useState } from "react";

const CoinData = () => {
  const containerRef = useRef(null);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;

    const coins = [
      "BTCUSDT", "ETHUSDT", "BNBUSDT", "SOLUSDT", "XRPUSDT", "DOGEUSDT", "ADAUSDT", "AVAXUSDT", "SHIBUSDT", "DOTUSDT",
      "TRXUSDT", "LINKUSDT", "MATICUSDT", "ICPUSDT", "NEARUSDT", "LTCUSDT", "UNIUSDT", "BCHUSDT", "FILUSDT", "XLMUSDT",
      "ATOMUSDT", "IMXUSDT", "INJUSDT", "HBARUSDT", "TAOUSDT", "RETHUSDT", "RUNEUSDT", "ETCUSDT", "MKRUSDT", "OPUSDT",
      "GRTUSDT", "ARBUSDT", "SUIUSDT", "PEPEUSDT", "FTMUSDT", "LDOUSDT", "QNTUSDT", "SEIUSDT", "FLOWUSDT", "EGLDUSDT",
      "AAVEUSDT", "THETAUSDT", "XTZUSDT", "AXSUSDT", "SNXUSDT", "EOSUSDT", "KSMUSDT", "ZECUSDT", "CAKEUSDT"
    ];

    const symbols = coins.map((symbol) => ({
      s: `BINANCE:${symbol}`,
      d: symbol.replace("USDT", "")
    }));

    // Set the widget configuration
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      showChart: false,
      locale: "en",
      width: "100%",
      height: 1000,
      isTransparent: false,
      showSymbolLogo: true,
      scaleFontColor: "rgba(106, 109, 120, 1)",
      symbolActiveColor: "rgba(33, 150, 243, 0.12)",
      tabs: [
        {
          title: "Top 50 Coins",
          originalTitle: "Top 50 Coins",
          symbols: symbols
        }
      ]
    });

    containerRef.current.appendChild(script);

    // Step 3: Listen for messages from the TradingView widget
    const handleMessage = (event) => {
      if (event.origin === "https://s3.tradingview.com") {
        const data = event.data;
        console.log(data)
        // Check if this is a symbol change message
        if (data && data.type === "symbol_select") {
          const selectedSymbol = data.symbol;
          setSelectedCoin(selectedSymbol); // Update state with selected symbol
          console.log("Selected Coin:", selectedSymbol); // Log selected coin
        }
      }
    };

    // Add event listener to listen for messages
    window.addEventListener("message", handleMessage);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="">
      <div className="tradingview-widget-container" ref={containerRef}></div>
      <div>
        {selectedCoin && <p>Selected Coin: {selectedCoin}</p>}
      </div>
    </div>
  );
};

export default CoinData;

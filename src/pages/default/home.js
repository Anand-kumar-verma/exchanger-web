import React, { useEffect, useRef, useState } from 'react'
import { FaBitcoin, FaCcMastercard, FaHeadset, FaUsers } from 'react-icons/fa'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomButton from '../../components/customButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import CustomMenu from '../../components/customMenu';
import { IoIosArrowDown } from 'react-icons/io';
import Card from '../../components/card';
import { FaApple, FaGooglePlay, FaAndroid } from 'react-icons/fa';
// import { SiTestflight } from 'react-icons/si';
import { IoLogoAppleAppstore } from "react-icons/io5";
import GppGoodIcon from '@mui/icons-material/GppGood';
import { FaWallet, FaChartLine, FaUserTie } from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';
import { FcSimCardChip } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";


const tab = [
  { id: 0, label: 'Pending' },
  { id: 0, label: 'Success' },
  { id: 0, label: 'Pailure' },
  { id: 0, label: 'Orders' },
  { id: 0, label: 'Dispatch' },
]
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-[85px]  z-10 !h-full flex items-center justify-center -translate-y-1/2 bg-black bg-opacity-50 text-white p-2  hover:bg-opacity-70" onClick={onClick}>
      <FaArrowLeft size={24} />
    </div>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-[85px] z-10 h-full -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 flex items-center justify-center hover:bg-opacity-70"

    >
      <FaArrowRight size={24} />
    </div>
  );
};
const menuItems = [
  { id: 0, name: 'Assets Overview' },
  { id: 1, name: 'Sport Trade' },
  { id: 2, name: 'Pending' },
  { id: 3, name: 'Deposit' },
  { id: 4, name: 'Withdraw' },
  { id: 5, name: 'Transactions History' },

];

const images = [
  { id: 1, src: 'https://static.vecteezy.com/system/resources/thumbnails/035/328/945/small/ai-generated-bitcoin-cryptocurrency-coin-on-the-background-of-the-financial-chart-and-graph-photo.jpg', alt: 'Best Investment' },
  { id: 2, src: 'https://media.istockphoto.com/id/1313455188/photo/businessman-is-holding-a-bitcoin-as-part-of-a-business-network-cryptocurrency-blockchain.jpg?s=612x612&w=0&k=20&c=d3FznSXaaUIKYuafDxfj9ZRu-I3zINoNHyrbAQZKzJE=', alt: 'Refer a Friend' },
  { id: 3, src: 'https://static.vecteezy.com/system/resources/thumbnails/035/328/945/small/ai-generated-bitcoin-cryptocurrency-coin-on-the-background-of-the-financial-chart-and-graph-photo.jpg', alt: 'Announcement' },
];


const cardData = [
  {
    id: 0,
    title: "BTC",
    coinEndUrl: "bitcoin",
    icons: null,
    symbol: "BTCUSDT",
    symbolTitle: ""
  },
  {
    id: 1,
    title: "ETH",
    coinEndUrl: "ethereum",
    icons: null,
    symbol: "ETHUSDT"
    ,
    symbolTitle: ""
  },
  {
    id: 2,
    title: "BNB",
    coinEndUrl: "binancecoin",
    icons: null,
    symbol: "BNBUSDT",
    symbolTitle: ""
  },
  {
    id: 3,
    title: "SOL",
    coinEndUrl: "solana",
    icons: null,
    symbol: "SOLUSDT",
    symbolTitle: ""
  },
  {
    id: 4,
    title: "LTC",
    coinEndUrl: "litecoin",
    icons: null,
    symbol: "LTCUSDT",
    symbolTitle: ""
  },
  {
    id: 5,
    title: "AVAX",
    coinEndUrl: "avalanche-2",
    icons: null,
    symbol: "AVAXUSDT",
    symbolTitle: ""
  },
  {
    id: 6,
    title: "LINK",
    coinEndUrl: "chainlink",
    icons: null,
    symbol: "LINKUSDT",
    symbolTitle: ""
  },
  {
    id: 7,
    title: "ATOM",
    coinEndUrl: "cosmos",
    icons: null,
    symbol: "ATOMUSDT",
    symbolTitle: ""
  },
  {
    id: 8,
    title: "DOT",
    coinEndUrl: "polkadot",
    icons: null,
    symbol: "DOTUSDT",
    symbolTitle: ""
  },
  {
    id: 9,
    title: "FIL",
    coinEndUrl: "filecoin",
    icons: null,
    symbol: "FILUSDT",
    symbolTitle: ""
  },
  {
    id: 10,
    title: "XRP",
    coinEndUrl: "ripple",
    icons: null,
    symbol: "XRPUSDT",
    symbolTitle: ""
  },
  {
    id: 11,
    title: "USDT",
    coinEndUrl: "tether",
    icons: null,
    symbol: "XRPUSDT",
    symbolTitle: ""
  },
  {
    id: 12,
    title: "ETH",
    coinEndUrl: "ethereum",
    icons: null,
    symbol: "ETHUSDT",
    symbolTitle: ""
  },
  {
    id: 13,
    title: "ETHWUSD",
    coinEndUrl: "ethereumpow",
    icons: null,
    symbol: "ETHWUSDT",
    symbolTitle: ""
  },
  {
    id: 14,
    title: "JASMY",
    coinEndUrl: "jasmycoin",
    icons: null,
    symbol: "JASMYUSDT",
    symbolTitle: ""
  },
  {
    id: 15,
    title: "PQL",
    coinEndUrl: "parallel",
    icons: null,
    symbol: "PARAUSDT",
    symbolTitle: "GATEIO"
  },
  {
    id: 16,
    title: "PQL",
    coinEndUrl: "parallel",
    icons: null,
    symbol: "PARAUSDT",
    symbolTitle: "GATEIO"
  },
  {
    id: 17,
    title: "DOGE",
    coinEndUrl: "dogecoin",
    icons: null,
    symbol: "DOGEUSDT",
    symbolTitle: ""
  }
]

const cards = [
  {
    title: 'Spot',
    description: 'Hundreds of cryptos to choose from. Easy to Trade.',
    icon: <FaWallet size={60} className="text-green-500 mb-4" />,
  },
  {
    title: 'Future Trade',
    description: 'Up to 200x leverage with top-level liquidity.',
    icon: <FaChartLine size={60} className="text-yellow-500 mb-4" />,
  },
  {
    title: 'Copy Trading',
    description: 'Follow professional traders to earn with ease.',
    icon: <FaUserTie size={60} className="text-blue-500 mb-4" />,
  },
];

const supportArr = [
  {
    icon: <FaHeadset className="text-7xl text-blue-600" />,
    title: "24/7 Customer Support",
    description: "Get 24/7 support from our friendly customer support agents.",
  },
  {
    icon: <FaUsers className="text-7xl text-green-600" />,
    title: "Join Our Community",
    description: "Join the discussion in our communities.",
  },
  {
    icon: <FaSquareXTwitter className="text-7xl text-black" />,
    title: "Follow Us",
    description: "Follow us to know about our updates and news.",
  },
];


const Home = () => {
  const [value, setValue] = useState(0);
  
  const navigate = useNavigate()



  const handleChange = (event, newValue) => {
    console.log(menuItems?.[newValue]?.nav, "newValue");
    setValue(newValue);
    navigate(menuItems?.[newValue]?.nav);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };







  return (
    <>
      <div className='container mx-auto  mb-20'>
        <section className=" px-8 md:px-16 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">


          <div className="max-w-xl">
            <p className="text-secondary font-semibold text-sm md:text-base">Now open for all Countries</p>
            <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-tight mt-4">
              Welcome to the India's Most <br />
              Trusted Bitcoin & Cryptocurrency Exchange
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-4">
              Buy, Sell & Trade Bitcoin, Ethereum, Ripple, Litecoin and more cryptocurrencies in India. Start trading now!
            </p>

            <div className='!w-44'>
              <CustomButton title='Deposit Crypto' className={"!mt-2"} size="small" />
            </div>
          </div>
          <div className="text-secondary text-[200px] md:text-[250px] lg:text-[300px]">
            <FaBitcoin className="mx-auto" />
          </div>
        </section>
        <div className="slider-container overflow-hidden px-8 md:px-16 z-50 w-fu mx-auto">
          <Slider {...settings}>


            {
              images.map((image) => (
                <div className='bg-red-500 !text-black'>

                  <img src={image?.src} className='h-44 w-full' />

                </div>
              ))
            }


          </Slider>

        </div>

        <div className='mt-16 px-8 md:px-16'>
          <h1 className='text-start md:text-center text-xl md:text-4xl font-bold text-gray-900 '>
            Seize Your Opportunity
          </h1>
          <div className=" mt-8  mx-auto">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{


                borderBottom: '1px solid #d1d5db',

                '& .MuiTab-root': {
                  color: '#888', // default text color
                  fontSize: '18px',
                },
                '& .Mui-selected': {
                  color: 'black !important',
                  fontWeight: 'bold', // selected text color
                  fontSize: '18px', // selected text size
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#888', // bottom indicator color
                },
              }}

            >
              {
                menuItems?.map((item, index) =>
                  <Tab sx={{

                  }} label={item.name} />
                )
              }


            </Tabs>
          </div>
          <CustomMenu menuItems={tab} avatarText={<div className='text-gray-500 border p-1 px-3 !mt-5 rounded-md bg-white font-medium gap-1 flex items-center text-sm text-nowrap'>Select your option <IoIosArrowDown size={15} /> </div>} />


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            {
              cardData?.map((row, index) =>
                <Card
                  key={index.toString()}
                  id={row?.id}
                  title={row?.title}
                  coinEndUrl={row?.coinEndUrl}
                  icons={row?.icons}
                  symbol={row?.symbol}
                  symbolTitle={row?.symbolTitle}


                />
              )
            }

          </div>
        </div>


        <div className='mt-16 px-8 md:px-16'>
          <h1 className='text-start md:text-center text-xl md:text-4xl font-bold text-gray-900 '>
            Build Your Portfolio
          </h1>
          <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0 md:p-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
              >

                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="text-secondary mb-2 font-medium hover:underline">Trade →</button>
                {card.icon}
              </div>
            ))}
          </div>
        </div>







        <div className='mt-16 px-8 md:px-16'>

          <h1 className='text-start md:text-center text-xl md:text-4xl font-bold text-gray-900 '>
            Start Your Journey
          </h1>
          <p className=' md:text-center md:text-lg text-sm text-gray-500'>A beginner's guide on your crypto journey with Bitalix</p>






          <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-6 p-0 md:p-6 bg-gray-100">

            <div
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300 flex flex-col-reverse lg:items-start items-center lg:flex-row justify-between"
            >
              <div className="flex flex-col items-start">

                <h2 className="text-lg font-semibold text-gray-800 mb-2">How to verify your account</h2>
                <a href="#" className="text-lime-600 mt-1 font-medium hover:underline">
                  I want to see more →
                </a>
              </div>

              <div className={'float-right mt-0  lg:mt-24'}>
                <FaUserCheck size={100} className="text-lime-500 mb-4" />
              </div>

            </div>

            <div className='flex flex-col items-center gap-6 w-full'>
              <div
                className="bg-white rounded-xl w-full h-fit shadow-sm p-6 hover:shadow-md transition duration-300 flex flex-col-reverse lg:items-start items-center lg:flex-row justify-between"
              >
                <div className="flex flex-col items-start">

                  <h2 className="text-lg font-semibold text-gray-800 mb-2">How to verify your account</h2>
                  <a href="#" className="text-lime-600 mt-1 font-medium hover:underline">
                    I want to see more →
                  </a>
                </div>

                <div className={'float-right '}>
                  <FaUserCheck size={50} className="text-lime-500 mb-4" />
                </div>

              </div>
              <div
                className="bg-white rounded-xl w-full h-fit shadow-sm p-6 hover:shadow-md transition duration-300 flex flex-col-reverse lg:items-start items-center  lg:flex-row justify-between"
              >
                <div className="flex flex-col items-start">

                  <h2 className="text-lg font-semibold text-gray-800 mb-2">How to verify your account</h2>
                  <a href="#" className="text-lime-600 mt-1 font-medium hover:underline">
                    I want to see more →
                  </a>
                </div>

                <div className={'float-right '}>
                  <FaUserCheck size={50} className="text-lime-500 mb-4" />
                </div>

              </div>
            </div>
          </div>

        </div>




        <div className='mt-16 px-8 w-fit mx-auto md:px-16'>
          <h1 className='text-start md:text-center text-xl md:text-4xl font-bold text-gray-900 '>Trade Anytime, Anywhere</h1>
          <p className=' md:text-center md:text-lg text-sm text-gray-500'>Compatible with multiple devices, start trading with safety and convenience.</p>
          <div className="bg-white py-10 px-4 mt-8 sm:px-6 md:px-8 lg:px-212 flex flex-col md:flex-row items-center justify-between rounded-3xl">

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" // replace with actual QR path
                  alt="QR Code"
                  className="w-20 h-20 rounded-md border border-black"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Scan to Download</h2>
                  <p className="text-sm text-gray-500">Android</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center text-nowrap space-x-2 bg-white text-black border px-4 py-2 rounded-xl shadow">
                  <FaApple className="text-xl" />
                  <span>App Store</span>
                </button>
                <button className="flex items-center space-x-2 bg-white text-black border px-4 py-2 rounded-xl shadow">
                  <FaGooglePlay className="text-xl text-green-600" />
                  <span>Google Play</span>
                </button>
                <button className="flex items-center space-x-2 bg-white text-black border px-4 py-2 rounded-xl shadow">
                  <FaAndroid className="text-xl text-green-500" />
                  <span>Android</span>
                </button>
                <button className="flex items-center space-x-2 bg-white text-black border px-4 py-2 rounded-xl shadow">
                  <IoLogoAppleAppstore size={25} className=" text-blue-600 !relative" />
                  <span>iOS Test Flight</span>
                </button>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOphYAzW33LSa9QSAWghf9NyQ1oE6qkC6y-J7-8KhHN2piPt5l5fTwfZjP-pK5HZdLPQ&usqp=CAU"
                alt="Trading Platform"
                className="w-[400px]"
              />
            </div>
          </div>
        </div>

        <div className='mt-16 px-8 w-full mx-auto md:px-16'>
          <h1 className='text-start md:text-center text-xl md:text-4xl font-bold text-gray-900 '>Your Trusted Exchange</h1>
          <p className='md:text-center text-justify md:text-lg text-sm md:w-2/3 mx-auto text-gray-500'>
            As the infrastructure provider in the blockchain ecosystem, BitallX encourages crypto circulation at a global level and promotes the formation of global liquidity.
          </p>
          <div className=" py-10  mt-8 px-0 sm:px-10 md:px-20 lg:px-32 flex flex-col gap-6 items-center justify-between">
            {
              [
                {
                  icons: <GppGoodIcon className='!text-5xl text-sky-500' />,
                  title: "Outstanding Security Lebel",
                  desc: "With 50+ market making teams, reliable partners and an extensive order book, BitallX supports a wide array of order types with ultra-low door-to-door latency."
                },
                {
                  icons: <FaCcMastercard className='!text-5xl text-secondary' />,
                  title: "Excellent Liquidlty",
                  desc: "With 50+ market making teams, reliable partners and an extensive order book, BitallX supports a wide array of order types with ultra-low door-to-door latency."
                },
                {
                  icons: <FcSimCardChip className='!text-5xl' />,
                  title: "Outstanding Security Lebel",
                  desc: "Registered in Czech Republic, currently BitaliX holds regulatory licenses from US with MSB and NFA. Meanwhile the applications of Canada, Lithuania, and Estonia are under process."
                }
              ]?.map((item, index) =>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center rounded-md p-5 bg-white'>
                  <div className='flex flex-row items-center gap-3'>
                    {item.icons}
                    <p className='font-semibold text-black text-sm md:text-lg'>{item?.title}</p>
                  </div>
                  <p className='text-gray-500 text-xs md:mt-0 md:text-start text-justify mt-3 md:text-sm'>{item.desc}</p>
                </div>
              )
            }


          </div>
        </div>



        <div className='mt-16 px-8 w-full mx-auto md:px-16'>
          <h1 className='text-center text-xl md:text-4xl font-bold text-gray-900 '>Feel Supported All The Time</h1>

          <div className=" py-10  mt-8 px-0 sm:px-10 md:px-20 flex flex-col gap-6 items-center justify-between">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportArr.map((item, index) => (
                <div key={index} className="flex flex-col cursor-pointer items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow rounded-2xl">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className='mt-20 px-8 w-full mx-auto md:px-16'>
          <h1 className='text-center text-xl md:text-4xl font-bold text-gray-900 '>Feel Supported All The Time</h1>
          <CustomButton title='Deposit Now' size='large' className={"!mx-auto !font-semibold !mt-7 !flex hover:!text-black !items-center !justify-center"} />
        </div>

      </div>
    </>
  )
}
export default Home
import React from "react";
import { CustomDiv, CustomH1, CustomH2 } from "../../components/customHeading";


const About = () => {
  return (
    <CustomDiv>
      
      <CustomH1>
        Digital Currency <span className="text-secondary">Exchanger</span> Platform
      </CustomH1>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-lg  text-justify md:text-start  leading-relaxed">
        The Exchanger Project is a secure, scalable, and user-friendly digital platform
        designed for exchanging cryptocurrencies and fiat currencies. It enables users to
        seamlessly convert between various digital assets such as Bitcoin, Ethereum, USDT,
        and local currencies. The platform supports real-time exchange rates, instant
        transactions, multi-currency wallets, and user authentication features for a safe
        trading experience.
      </p>

      {/* Features */}
      <div>
        <CustomH2>Key Features:</CustomH2>
        <ul className="space-y-3 list-disc list-inside text-gray-700">
          <li>
            <span className="font-medium">Real-Time Currency Conversion:</span> Live
            exchange rates with automatic updates.
          </li>
          <li>
            <span className="font-medium">User Wallets:</span> Secure multi-currency wallets
            with transaction history and balance overview.
          </li>
          <li>
            <span className="font-medium">KYC and Authentication:</span> Secure user
            verification with identity checks and two-factor authentication.
          </li>
          <li>
            <span className="font-medium">Admin Panel:</span> Complete control over users,
            transactions, rates, and reports.
          </li>
          <li>
            <span className="font-medium">Payment Gateway Integration:</span> Support for
            bank transfers, credit/debit cards, and crypto payments.
          </li>
          <li>
            <span className="font-medium">Mobile and Web Accessibility:</span> Responsive
            design optimized for both mobile and desktop platforms.
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Tech Stack:</h2>
        <p className="text-gray-600 text-sm md:text-lg">
          The project is built using modern technologies like{" "}
          <span className="font-medium text-gray-800">React.js</span> (frontend),{" "}
          <span className="font-medium text-gray-800">Node.js</span> (backend), and{" "}
          <span className="font-medium text-gray-800">MongoDB</span> (database), ensuring
          speed, security, and maintainability.
        </p>
      </div>
    </CustomDiv>
  );
};

export default About;

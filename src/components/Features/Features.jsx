import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "📈",
      title: "Live Market Data",
      description:
        "Track real-time cryptocurrency prices, market capitalization, rankings, and trading volume powered by the CoinGecko API.",
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description:
        "Quickly search from hundreds of cryptocurrencies and access detailed market information instantly.",
    },
    {
      icon: "💱",
      title: "Multi Currency Support",
      description:
        "Switch seamlessly between USD, EUR, and INR for localized price tracking.",
    },
    {
      icon: "📊",
      title: "Interactive Charts",
      description:
        "Analyze historical price movements with responsive and interactive line charts.",
    },
  ];

  return (
    <section className="features" id="features">
      <h2>Why Choose CryptoTracker?</h2>
      <p className="feature-subtitle">
        Everything you need to monitor the cryptocurrency market in one place.
      </p>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{feature.icon}</span>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
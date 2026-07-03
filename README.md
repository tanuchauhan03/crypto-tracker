🚀 CryptoTracker

A modern cryptocurrency tracking web application built with React.js and Vite. The application displays real-time cryptocurrency market data, historical price charts, and the latest crypto news using public APIs.
🌐 Live Demo

> crypto-tracker-git-main-tanu-chauhans-projects.vercel.app


✨ Features

- 📈 Real-time cryptocurrency prices
- 🔍 Search cryptocurrencies by name
- 💱 Multi-currency support (USD, EUR, INR)
- 📊 Historical price charts
- 📰 Latest cryptocurrency news
- 📱 Responsive design
- ⚡ Fast performance with Vite
- 🔄 Dynamic routing using React Router

---

🛠️ Tech Stack

- React.js
- Vite
- React Router DOM
- React Context API
- Axios
- React Google Charts
- CoinGecko API
- NewsData API
- CSS3

---

📦 Installation

Clone the repository

```bash
git clone https://github.com/tanuchauhan03/crypto-tracker-react.git
```

Go to the project directory

```bash
cd crypto-tracker-react
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_KEY=your_coingecko_api_key
VITE_NEWS_API_KEY=your_newsdata_api_key
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

📁 Project Structure

```
src
│
├── assets
├── components
│   ├── Navbar
│   ├── Footer
│   ├── Features
│   ├── News
│   └── LineChart
│
├── context
│   └── CoinContext.jsx
│
├── pages
│   ├── Home
│   └── Coin
│
├── App.jsx
└── main.jsx
```

---

🔗 APIs Used

1. CoinGecko API

Provides:

- Live cryptocurrency prices
- Coin market data
- Historical price charts
- Coin details

2. NewsData API

Provides:

- Latest cryptocurrency news
- Market updates
- Trending crypto articles

---

🚀 Future Improvements

- ⭐ Favorite Coins
- ⭐ Watchlist
- ⭐ Dark/Light Mode
- ⭐ Top Gainers & Losers
- ⭐ Trending Coins
- ⭐ Pagination
- ⭐ Advanced Filters

---

👨‍💻 Author

Tanu Chauhan

GitHub: https://github.com/tanuchauhan03


---

## 📜 License

This project is created for educational and portfolio purposes.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

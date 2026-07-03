
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {

    const [allCoin, setAllCoin] = useState([]);

    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$",
    });

    const fetchAllCoin = async () => {

        try {

            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets",
                {
                    params: {
                        vs_currency: currency.name,
                        order: "market_cap_desc",
                        per_page: 100,
                        page: 1,
                        sparkline: true,
                        price_change_percentage: "24h",
                    },
                    headers: {
                        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
                    },
                }
            );

            setAllCoin(response.data);

        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin,
        currency,
        setCurrency,
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
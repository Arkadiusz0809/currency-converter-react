import { useState, useEffect } from "react";
import { getCurrenciesFetch } from "./useGetCurrenciesFetch";

export const useCurrencies = () => {
    const [currencyApi, setCurrencyApi] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await getCurrenciesFetch();

                if (!response?.data) {
                    throw new Error(response.statusText);
                }

                setCurrencyApi({
                    state: "success",
                    rates: response.data,
                    date: response.meta.last_updated_at,
                  });
                } catch {
                  setCurrencyApi({
                    state: "error",
                  });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return currencyApi;
};
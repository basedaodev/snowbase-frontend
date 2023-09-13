import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=base-2,olympus,magic-internet-money,snowdog&vs_currencies=usd";
    const { data } = await axios.get(url);

    // cache["ETH"] = data["eth-2"].usd;
    // cache["MIM"] = data["magic-internet-money"].usd;
    // cache["OHM"] = data["olympus"].usd;
    // cache["SDOG"] = data["snowdog"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};

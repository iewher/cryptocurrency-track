import axios from "axios";

export const API_URL = "https://min-api.cryptocompare.com/data/pricemultifull";

const fetchData = async (coin: string, currency: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        fsyms: coin,
        tsyms: currency,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;

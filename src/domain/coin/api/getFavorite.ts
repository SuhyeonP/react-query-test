import axios from 'axios';
import { useQuery } from 'react-query';
import { market } from '../type';

const getFavoriteCoins = async (
  list: string[],
  market: market
): Promise<any> => {
  let temp;
  if (list && list.length) {
    temp = list.join('%2C');
  } else {
    temp = 'empty';
  }
  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${market}&ids=${temp}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
  );

  return data;
};

export default function useFavorite(
  favorite: string[],
  market: market
): [any, boolean, boolean] {
  const { data, isLoading, isFetching } = useQuery(
    ['favorite-coin', favorite, market],
    async () => await getFavoriteCoins(favorite, market),
    { keepPreviousData: true, staleTime: 5000 }
  );
  return [data, isLoading, isFetching];
}
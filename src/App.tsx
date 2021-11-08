import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CoinLists from "./page/CoinLists";

const queryClient = new QueryClient();

function App() {
    return (
    <QueryClientProvider client={queryClient}>
        <CoinLists />
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;

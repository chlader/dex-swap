import React, { useState } from "react";
import "./App.css";
import { ChakraProvider, Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Swap from "./components/Swap";
// import rp from 'request'
import { mockTokens } from "./data/tokens";

function App() {
    // console.log(mockTokens)


    // const rp = require("request-promise");
    // const requestOptions = {
    //     method: "GET",
    //     uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    //     qs: {
    //         start: "1",
    //         limit: "5000",
    //         convert: "USD",
    //     },
    //     headers: {
    //         "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
    //     },
    //     json: true,
    //     gzip: true,
    // };

    // rp(requestOptions)
    //     .then((response) => {
    //         console.log("API call response:", response);
    //     })
    //     .catch((err) => {
    //         console.log("API call error:", err.message);
    //     });

    return (
        <ChakraProvider>
            <Navbar />
            <Flex mt={10}>
                <Spacer />
                <Swap {...mockTokens} />
                <Spacer />
            </Flex>
        </ChakraProvider>
    );
}

export default App;

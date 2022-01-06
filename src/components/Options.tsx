import { Flex, Image, Box, Stat, StatNumber, StatHelpText } from "@chakra-ui/react";
import React from "react";
import * as mockTokens from '../data/uniswapTokens.json';

const Options = () => {

    const clickMe = (token: any) => {
        console.log(token);
    }

    return (
        <>
            {mockTokens.tokens.map(token => (
                <Flex
                    _hover={{
                        background: "rgb(44, 47, 54)",
                        color: "white",
                    }}
                    cursor="pointer"
                    p="5px 20px"
                    onClick={() => clickMe(token)}
                >
                    <Image mt="5" src={token.logoURI} boxSize="20px" />
                    <Box p="0 20px">
                        <Stat>
                            <StatNumber>{token.symbol}</StatNumber>
                            <StatHelpText>{token.name}</StatHelpText>
                        </Stat>
                    </Box>
                </Flex>
            ))}
        </>
    );
};

export default Options;

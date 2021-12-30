import { Box, Button, Center, Flex, FormControl, FormLabel, Input, NumberInput, NumberInputField, Select, Spacer } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Token } from "../data/tokens";
import Options from "./Options";
// import Icon from "react-crypto-icons"
import { defaultToken } from "../data/tokens";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CROIcon } from "../assets/Icons";

const Swap = (tokens: Token[]) => {
    // const [defaultToken, setDefaultToken] = setState({});

    return (
        <>
            <div>
                <Center>
                    <FormControl>
                        <Box >

                            <Flex>
                                <Box>Swap</Box>
                                <Spacer />
                                <Box>Settings</Box>
                            </Flex>

                            <Box pt='5' color='#212429'>
                                <Flex>
                                    <NumberInput>
                                        <NumberInputField />
                                    </NumberInput>
                                    <Flex>
                                        {/* TODO: FIGURE OUT HOW TO GET ICONS */}
                                        <Button width='25%' rightIcon={<ChevronDownIcon />}>{defaultToken.symbol}</Button>
                                    </Flex>
                                </Flex>
                            </Box>

                            <Box pt='5'>
                                <Flex>
                                    <NumberInput>
                                        <NumberInputField />
                                    </NumberInput>
                                    <Select variant="outline" placeholder="To">
                                        <option>ETH</option>
                                        <option>BTC</option>
                                        <option>CRO</option>
                                        <option>MATIC</option>
                                    </Select>
                                </Flex>
                            </Box>

                            <Center pt='5'>
                                <Button width="100%">Swap</Button>
                            </Center>

                        </Box>
                    </FormControl>
                </Center>
            </div>
        </>
    );
};

export default Swap;
function setState(arg0: {}): [any, any] {
    throw new Error("Function not implemented.");
}


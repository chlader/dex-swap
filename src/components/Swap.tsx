import {
    Box,
    Button,
    Center,
    Divider,
    Flex,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    NumberInput,
    NumberInputField,
    Spacer,
    useDisclosure,
    Wrap,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Options from "./Options";
import TokenSelect from "./TokenSelect";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Swap = ({ user }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div>

                <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Wrap>
                                <Flex>
                                    <span>Select a token</span>
                                    <ModalCloseButton />
                                </Flex>
                                <Input borderRadius="lg" mt="5" placeholder="Search name or paste address" size="lg"></Input>
                                <Box>
                                    <Button m='1' size="md">ETH</Button>
                                    <Button m='1' size="md">ETH</Button>
                                    <Button m='1' size="md">ETH</Button>
                                    <Button m='1' size="md">ETH</Button>
                                    <Button m='1' size="md">ETH</Button>
                                    <Button m='1' size="md">ETH</Button>
                                </Box>
                            </Wrap>
                        </ModalHeader>
                        <Divider />
                        <ModalBody p="0" overflow='scroll'>
                            <Options />
                        </ModalBody>
                    </ModalContent>
                </Modal>

                <Center>
                    <FormControl>
                        <Box>
                            <Flex>
                                <Box>Swap</Box>
                                <Spacer />
                                <Box>Settings</Box>
                            </Flex>

                            <Box pt="5" color="#212429">
                                <Flex>
                                    <NumberInput defaultValue={0.00} precision={2}>
                                        <NumberInputField />
                                    </NumberInput>
                                    {/* TODO: FIGURE OUT HOW TO GET ICONS */}
                                    <Button onClick={onOpen} width="150px" rightIcon={<ChevronDownIcon />}>
                                        ETH
                                    </Button>
                                </Flex>
                            </Box>

                            <Box pt="5">
                                <Flex>
                                    <NumberInput defaultValue={0.00} precision={2}>
                                        <NumberInputField />
                                    </NumberInput>
                                    {/* TODO: FIGURE OUT HOW TO GET ICONS */}
                                    <Button onClick={onOpen} width="150px" rightIcon={<ChevronDownIcon />}>
                                        MATIC
                                    </Button>
                                </Flex>
                            </Box>

                            <Center pt="5">
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

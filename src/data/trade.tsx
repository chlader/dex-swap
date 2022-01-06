export type Trade = {
    userAddress: string | null,
    userAmount: string | number | null,
    from: {
        fromAddress: string | null,
        fromPrice: string | number | null,
        fromAmount: string | number | null
    },
    to: {
        toAddress: string | null,
        toPrice: string | number | null,
        toAmount: string | number | null
    }
};

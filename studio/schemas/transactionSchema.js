export const transactionSchema = {
    name: 'transactions',
    title: 'Transactions',
    type: 'document',
    fields: [
        {
            name: 'txHash',
            title: 'Transaction Hash',
            type: 'string',
        },
        {
            name: 'fromAdress',
            title: 'From (Wallet Adress)',
            type: 'string',
        },
        {
            name: 'toAdress',
            title: 'To (Wallet Adress)',
            type: 'string',
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number',
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
        }
    ]
}

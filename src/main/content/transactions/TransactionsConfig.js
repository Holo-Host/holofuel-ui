import Transactions from './Transactions';

export const TransactionsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/transactions',
            component: Transactions
        }
    ]
};

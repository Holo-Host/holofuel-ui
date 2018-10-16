import Account from './Account';

export const AccountConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/account',
            component: Account
        }
    ]
};

import Send from './Send';

export const SendConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/send',
            component: Send
        }
    ]
};

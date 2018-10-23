import mock from './mock';

const send = [
    {
        'id'      : '1',
        'command': 'success',
        'description'  : 'a send that will succeed'
    },
    {
        'id'      : '2',
        'command': 'fail',
        'description'  : 'a send that will fail'
    }
];

mock.onGet('/api/send').reply((config) => {
    return [200, send];
});

mock.onGet('/api/send/success').reply((config) => {
    let successMsg = "You sent {amount} to {recipient}";
    return [200, successMsg];
});

mock.onPost('/api/send/success').reply((request) => {
    let successMsg = "You sent {amount} to {recipient}";
    return [200, successMsg];
});

mock.onGet('/api/send/fail').reply((config) => {
    const fail = "You did NOT send {amount} to {recipient}";
    return [200, fail];
});

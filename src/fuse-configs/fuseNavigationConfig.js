export const fuseNavigationConfig = [
    {
        'id'      : 'HoloPal',
        'title'   : 'HoloPal',
        'type'    : 'group',
        'icon'    : 'details',
        'children': [
            {
                'id'   : 'account',
                'title': 'Account',
                'type' : 'item',
                'icon' : 'memory',
                'url'  : '/account'
            },
        ]
    },
    {
        'id'   : 'coming-soon',
        'title': 'Coming Soon',
        'type' : 'item',
        'icon' : 'alarm',
        'url'  : '/pages/coming-soon'
    }

];

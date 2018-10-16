import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {pagesConfigs} from 'main/content/pages/pagesConfigs';
import {SystemConfig} from 'main/content/system/SystemConfig';
import {ComponentsConfig} from 'main/content/components/ComponentsConfig';
import {AccessConfig} from 'main/content/access/AccessConfig';

import {AccountConfig} from 'main/content/account/AccountConfig';
import {TransactionsConfig} from 'main/content/transactions/TransactionsConfig';
import {SendConfig} from 'main/content/send/SendConfig';

const routeConfigs = [
    ...pagesConfigs,
    ComponentsConfig,
    AccountConfig,
    SystemConfig,
    AccessConfig,
    TransactionsConfig,
    SendConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        exact    : true,
        component: () => <Redirect to="/pages/coming-soon"/>
    }
];

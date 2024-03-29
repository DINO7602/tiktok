import { HeaderOnly } from '~/components/Layout';

import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

const publicRoutes = [
    { path: '', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

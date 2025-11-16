'use client';

import { useWindowWidth } from '@/hooks';

import DesktopHeader from './desktop-header/Header';
import MobileHeader from './mobile-header/Header';

const Header = () => {
    const windowWidth = useWindowWidth();
    return windowWidth >= 1085 ? <DesktopHeader /> : <MobileHeader />;
};

export default Header;
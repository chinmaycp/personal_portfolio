import React, { FunctionComponent, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem:FunctionComponent<{
    activeMenuItem: string,
    setActiveMenuItem:Function,
    name:string,
    route:string
}> = ({ activeMenuItem, setActiveMenuItem, name, route }) => {
    return (
        activeMenuItem !== name ? (
            <Link href={route}>
                <a>
                    <span onClick={() => setActiveMenuItem(name)} className="hover:text-customGreen">{name}</span>
                </a>
            </Link>
        ) : null
    );
};

const Navbar = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string>('About');
    const { pathname } = useRouter();

    useEffect(() => {
        if(pathname === '/') setActiveMenuItem('About');
        if(pathname === '/projects') setActiveMenuItem('Projects');
        if(pathname === '/resume') setActiveMenuItem('Resume');
    }, [pathname]);

    return (
        <div className="flex justify-between px-5 py-3 my-3 border-b border-gray-200">
            <span className="font-bold text-customGreen text-xl md:text-2xl border-b-4 border-customGreen">{activeMenuItem}</span>
            <div className="flex space-x-5 text-lg">
                <NavItem activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} name="About" route="/" />
                <NavItem activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} name="Projects" route="/projects" />
                <NavItem activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} name="Resume" route="/resume" />
            </div>
        </div>
    )
}

export default Navbar;
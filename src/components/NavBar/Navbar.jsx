/* eslint-disable no-unused-vars */

import { list } from "postcss";
import Link from "../Links/Link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Services', path: '/services' },
    ];

    return (

        <nav className="bg-orange-400 pl-5 " >
            <div className="md:hidden px-3 text-2xl py-1 " onClick={() => setOpen(!open)}>
                {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}

            </div>

            <ul className={` 
                ${open ? 'top-4 left-11' : '-top-60 left-11'}
                md:flex gap-x-5 justify-center p-4 shadow-2xl rounded-sm duration-1000 absolute md:static `} >
                {
                    routes.map(route => <Link key={route.id} route={route} />)

                }
            </ul>

        </nav>


    );
};

export default Navbar;
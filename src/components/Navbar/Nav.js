import Link from 'next/link'
import React, { useState } from 'react'
import { Toolbar, Button, Menu, MenuItem,Paper  } from '@mui/material';

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav>
            <div>
                <ul className='flex justify-around' >
                    <li>
                        <Link href="/" >Home</Link>
                    </li>
                    <li>
                        <Link href="/about" >About</Link>
                    </li>
                    <li>
                        <Link href="/contact" >Contact</Link>
                    </li>
                    <li>
                        <Link href="/courses" >Courses</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav
import React from 'react'
import { Link } from 'react-router';
import {PlusIcon} from 'lucide-react';

const Navbar = () => {
  return ( <header className='bg-base-300 border-b border-base-content/10' data-theme="forest">
    <div className='max-w-6xl mx-auto p-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter'>THinkBoArd</h1>
            <div className='flex items-center gap-4'>
                <Link to={"/create"} className='btn btn-primary'>
                <PlusIcon className='size-5'/>
                <span>New Note</span>
                </Link>
            </div>
        </div>

    </div>
  </header>)
}

export default Navbar;
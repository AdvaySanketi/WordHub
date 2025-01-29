import { useState, useEffect } from 'react';
import Modes from './Modes';

export default function Header() {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('mode', 'light');
        }
    }, [mode]);

    return (
        <div
            className='mx-10 flex h-20 w-full items-center justify-between bg-white dark:bg-black lg:-mx-2 lg:justify-center
    '
        >
            <a
                href='https://advay-sanketi-portfolio.vercel.app/'
                target='_blank'
            >
                <img src='/assets/images/logo.svg' alt='dictionary logo' />
            </a>
            <div
                className='mr-12 flex items-center  justify-end gap-2  lg:mr-0 lg:w-1/2
      '
            >
                <Modes
                    theme={mode}
                    onClick={() => {
                        setMode(mode === 'dark' ? 'light' : 'dark');
                    }}
                />
            </div>
        </div>
    );
}

import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme }) => {

    const handleThemeChange = (event) => {
        const isChecked = event.target.checked;
        localStorage.setItem('webSIG-theme', isChecked ? 'dark' : 'light');
    }

    useEffect(() => {

        if (theme === 'dark') {
            document.getElementById('theme-toggle').checked = true;
        } else {
            document.getElementById('theme-toggle').checked = false;
        }

    }, [theme]);

    return (
        <div className="navbar bg-base-100 shadow-sm fixed">
            <Link to="/" className="flex-1">
                <a className="px-4 py-3 text-xl">Web-SIG</a>
            </Link>
            <div className="flex-none">
                <label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input
                        type="checkbox"
                        value="dark"
                        className="toggle theme-controller"
                        id='theme-toggle'
                        onChange={handleThemeChange}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    )
}

export default Navbar
const Header = ({isDarkMode, toggleTheme}) => {

    return(
        <header className="w-full flex justify-between items-center my-6 max-w-4xl no-print">
            <h1 className="text-4xl font-bold">Bill Split</h1>
            <label className="swap swap-rotate">
                {/* Toggle Checkbox */}
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                {/* Dark Mode Icon */}
                <svg
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M5.64 17.36a9 9 0 1011.31-11.31 7 7 0 11-11.31 11.31z" />
                </svg>
                {/* Light Mode Icon: Partially Visible Sun */}
                <svg
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path>
                </svg>
            </label>
        </header>
    )
}


export default Header
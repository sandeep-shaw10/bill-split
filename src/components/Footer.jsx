const Footer = ({isDarkMode, toggleTheme}) => {

    return(
        <footer className="text-sm mt-8 no-print">
            © 2024 Bill Split | Developed by 
            <a href="https://github.com/sandeep-shaw10" target="_blank" className="text-blue-500 hover:underline ml-1">
            sandeep-shaw10
            </a> | All rights reserved.
        </footer>
    )
}


export default Footer
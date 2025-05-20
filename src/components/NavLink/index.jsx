const NavLink = ({to, text, className, children}) => {
    return (
        <a 
            href={to}
            className={className}
        >
            {text}
            {children}
        </a>
    )
}

export default NavLink
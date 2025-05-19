import './nav-link.css'

const NavLink = ({to, text, className}) => {
    return (
        <a 
            href={to}
            className={className}
        >
            {text}
        </a>
    )
}

export default NavLink
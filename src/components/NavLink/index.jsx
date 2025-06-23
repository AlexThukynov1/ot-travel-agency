import { Link } from 'react-scroll'

const NavLink = ({to, text, className, children, extraPops={}}) => {
    return (
        <Link
            to={to}
            smooth = {true}
            duration = {500}
            className={className}
            {...extraPops}
        >
            {text}
            {children}
        </Link>
    )
}

export default NavLink
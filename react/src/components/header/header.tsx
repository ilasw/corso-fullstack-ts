import { FC, PropsWithChildren } from "react";
import './header.css'

export type HeaderProps = {
    items: string[]
}

const Header: FC<PropsWithChildren<HeaderProps>> = (props) => {
    const {items, children} = props;

    return <header>
        <div className="logo">SiteName</div>
        <nav className="menu">
            <ul className="menu-list">
                { items.map((item, index) => {
                    return <li className="menu-item" key={item+index}>{item}</li>;
                }) }
            </ul>
        </nav>
    </header>
}

export { Header };

export default Header;
/* Header with logo and general navbar */

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <Link className="navbar-brand" href="/">Logo CO<sub>2</sub></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className={pathname == "/" ? "nav-link active" : "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/data-API" className={pathname == "/data-API" ? "nav-link active" : "nav-link"}>Data API</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contribute" className={pathname == "/contribute" ? "nav-link active" : "nav-link"}>Contribute</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about-us" className={pathname == "/about-us" ? "nav-link active" : "nav-link"}>About Us</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    );
}
 export default Header;
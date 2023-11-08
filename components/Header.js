/* Header with logo and general navbar */

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5 fixed-top py-3">
                <div className="container">
                <Link className="navbar-brand" href="/">CO<sub>2</sub> Radar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-1">
                            <Link href="/" className={pathname == "/" ? "nav-link active" : "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/data-API" className={pathname == "/data-API" ? "nav-link active" : "nav-link"}>Data API</Link>
                        </li>
                        <li className="nav-item px-1">
                            <Link href="/contribute" className={pathname == "/contribute" ? "nav-link active" : "nav-link"}>Contribute</Link>
                        </li>
                        <li className="nav-item px-1">
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
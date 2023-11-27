import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5 fixed-top py-3">
                <div className="container align-items-top">
                    <Link className="navbar-brand" id="navbarBrand" href="/">
                        <Image src="/logo-co2-radar.svg" alt="Logo CO2 Radar" width={30} height={30}/>
                        <span className="ms-2">CO<sub>2</sub> Radar</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown px-1">
                                <Link className="nav-link dropdown-toggle" href="/reports" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reports
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark mt-2">
                                    <li><Link className="dropdown-item py-2" href="/report-2022">Report 2022</Link></li>
                                    <li><Link className="dropdown-item py-2" href="/report-2021">Report 2021</Link></li>
                                    <li><Link className="dropdown-item py-2" href="/report-2020">Report 2020</Link></li>
                                    <li><Link className="dropdown-item py-2" href="/more-reports">More Reports</Link></li>
                                </ul>
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
/* Footer with Terms & Conditions and Copyright */

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link href="terms-and-conditions" className="nav-link px-2 text-muted link-dark">Terms & Conditions</Link></li>
                <li className="nav-item"><Link href="privacy-policy" className="nav-link px-2 text-muted link-dark">Privacy Policy</Link></li>
                <li className="nav-item"><Link href="contact" className="nav-link px-2 text-muted link-dark">Contact</Link></li>
            </ul>
            <p className="text-center text-muted">© 2023 CCIR Climate Change Is Real, Inc</p>
        </footer>
    );
}

export default Footer;
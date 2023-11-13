//Browser language detection component with disabled SSR and client-side rendering
import Link from "next/link"
import styles from "@/styles/Language.module.css" 

const Language = () => {
    const preferredLanguage = navigator.languages[0];
    
    //ISO codes of the 12 main right-to-left (RTL) languages
    const rtlLanguages = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];
            
    let rtlDirection = rtlLanguages.includes(preferredLanguage);

    if (rtlDirection === true){
        return (
          <div dir="rtl">
            <nav className="navbar navbar-expand bg-light">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" href="/report-2022">Report 2022</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/report-2021">Report 2021</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/report-2020">Report 2020</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/more-reports">More</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>  
        );
    } else return (
        <div dir="ltr">
          <nav className="navbar navbar-expand bg-light">
            <div className="container-fluid px-0 mb-3">
              <ul className="navbar-nav mb-2">
                <li className="nav-item me-2">
                  <Link className="nav-link text-primary fs-5 fw-medium px-4" style={{border: 'solid', borderRadius: '7px'}}href="/report-2022">Report 2022</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="nav-link text-dark fs-5 fw-medium px-4" href="/report-2021">Report 2021</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="nav-link text-dark fs-5 fw-medium px-4" href="/report-2020">Report 2020</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="nav-link text-dark fs-5 fw-medium px-4" href="/more-reports">More</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>  
    );
}

export default Language;




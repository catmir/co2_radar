//Browser language detection component with disabled SSR and client-side rendering
import Link from "next/link"

const Language = () => {
    const preferredLanguage = navigator.languages[0];
    
    //ISO codes of the 12 main right-to-left (RTL) languages
    const rtlLanguages = ['ar', 'ar-EG', 'ar-DZ', 'ar-BH', 'ar-IQ', 'ar-YE', 'ar-JO', 'ar-QA', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-OM', 'ar-SA', 'ar-SY', 'ar-TU', 'ar-AE', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];
            
    let rtlDirection = rtlLanguages.includes(preferredLanguage);

    if (rtlDirection === true){
        return (
          <div dir="rtl">
            <ul className="nav nav-pills mb-4">
              <li className="nav-item me-xl-3">
                <Link className="nav-link active bg-primary fs-5" href="/report-2022">Report 2022</Link>
              </li>
              <li className="nav-item me-xl-2">
                <Link className="nav-link fs-5" href="/report-2021">Report 2021</Link>
              </li>
              <li className="nav-item me-xl-2">
                <Link className="nav-link fs-5" href="/report-2020">Report 2020</Link>
              </li>
              <li className="nav-item me-xl-2">
                <Link className="nav-link fs-5" href="/more-reports">More Reports</Link>
              </li>
            </ul>
          </div>  
        );
    } else return (
        <div dir="ltr">
          <ul className="nav nav-pills mb-4">
            <li className="nav-item me-xl-3">
              <Link className="nav-link active bg-primary fs-5" href="/report-2022">Report 2022</Link>
            </li>
            <li className="nav-item me-xl-2">
              <Link className="nav-link fs-5" href="/report-2021">Report 2021</Link>
            </li>
            <li className="nav-item me-xl-2">
              <Link className="nav-link fs-5" href="/report-2020">Report 2020</Link>
            </li>
            <li className="nav-item me-xl-2">
              <Link className="nav-link fs-5" href="/more-reports">More Reports</Link>
            </li>
          </ul>
        </div>  
    );
}

export default Language;




//Browser language detection component with disabled SSR and client-side rendering
import styles from '@/styles/Language.module.css' 

const Language = () => {
    const preferredLanguage = navigator.languages[0];
    
    //ISO codes of the 12 main right-to-left (RTL) languages
    const rtlLanguages = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];
            
    let rtlDirection = rtlLanguages.includes(preferredLanguage);

    if (rtlDirection === true){
        return (
            <div dir="rtl" className={styles.navbar_rtl}>
            <p className="fs-5">Our latest reports:</p>
            <nav className="navbar navbar-expand bg-light">
              <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/report-2022">Report 2022</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/report-2021">Report 2021</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/report-2020">Report 2020</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/more-reports">More</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>  
        );
    } else return (
        <div dir="ltr" className={styles.navbar_ltr}>
        <p className="fs-5">Our latest reports:</p>
        <nav className="navbar navbar-expand bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/report-2022">Report 2022</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/report-2021">Report 2021</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/report-2020">Report 2020</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/more-reports">More</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>  
    );
}

export default Language;




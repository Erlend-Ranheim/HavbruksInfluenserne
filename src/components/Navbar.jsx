import React from 'react'
import logo from '../assets/NRK TV.svg'
import styles from '../css/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div>
                <img className={styles.logo} src={logo} alt="logo"/>
            </div>
            <ul className={styles.list}>
                <li className={styles.itemBox}>
                    <svg viewBox="0 0 24 24" className="nrk-category" width="1.500em" height="1.500em" aria-hidden="true"
                         focusable="false">
                    <path fill="currentColor" fill-rule="evenodd"
                          d="M4 4h5v5H4V4zm-2 7V2h9v9H2zm2 4h5v5H4v-5zm-2 7v-9h9v9H2zM20 4h-5v5h5V4zm-7-2v9h9V2h-9zm2 13h5v5h-5v-5zm-2 7v-9h9v9h-9z"></path>
                    </svg>
                    Kategorier
                </li>

                <li className={styles.itemBox}>
                    <svg viewBox="0 0 24 24" className="nrk-search" width="1.500em" height="1.500em"
                         aria-hidden="true" focusable="false">
                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 19c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9zm0-2.1176c-3.80102 0-6.88235-3.0814-6.88235-6.8824 0-3.80102 3.08133-6.88235 6.88235-6.88235 3.801 0 6.8824 3.08133 6.8824 6.88235 0 3.801-3.0814 6.8824-6.8824 6.8824zM15.8959 19l2.4263 4h2.3391l-2.4262-4h-2.3392z"></path>
                    </svg>
                    Søk
                </li>

                <li className={styles.itemBox}>
                    <svg viewBox="0 0 24 24" class="nrk-media-direktetv" width="1.500em" height="1.500em" aria-hidden="true" focusable="false"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1 3h22v16H1V3zm2 2v12h18V5H3zm13 18H8v-2h8v2zM8 8.5c0 .82843-.67157 1.5-1.5 1.5S5 9.32843 5 8.5 5.67157 7 6.5 7 8 7.67157 8 8.5z"></path></svg>
                    Direkte
                </li>

                <li className={styles.itemBox}>
                    <svg viewBox="0 0 24 24" className="nrk-media-programguide" width="1.500em" height="1.500em"
                         aria-hidden="true" focusable="false">
                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                              d="M1 2.33333V19.7441l11 3.3 11-3.3V2.33333l-1.7351-1.15674L12 3.95606 2.73511 1.17659 1 2.33333zm11 3.71079l-9-2.7V18.2561l8 2.4V9.25081l2-.6V20.6561l8-2.4V3.34412l-9 2.7zm7 .81189l-4 1.2v2.08809l4-1.20003V6.85601z"></path>
                    </svg>
                    TV-guide
                </li>
                <li className={styles.itemBox}>
                    <svg viewBox="0 0 24 24" className="nrk-user-notloggedin" width="1.500em" height="1.500em"
                         aria-hidden="true" focusable="false">
                        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                              d="M3 12c0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056 0-9-4.0294-9-9zm-2 0C1 5.92487 5.92487 1 12 1c6.0751 0 11 4.92487 11 11 0 6.0751-4.9249 11-11 11-6.07513 0-11-4.9249-11-11zm5 0c0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6h-2c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4H6z"></path>
                    </svg>
                    Logg på NRK
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
import styles from './footer.module.css'
import {Link} from "react-router-dom";
export default function Footer(){
    return(
        <>
            <footer className={styles.footer_box}>
                <div className={styles.left_side}>
                    <p className='typography-body1'>© 2023, Made by <span>Cubics</span></p>
                </div>
                <ul className={styles.footer_links}>
                    <li>
                        <Link to={'/'} className='typography-body1'>
                            License
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className='typography-body1'>
                            Documentation
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className='typography-body1'>
                            Support
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}
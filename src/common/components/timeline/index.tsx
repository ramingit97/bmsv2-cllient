import styles from './timeline.module.css'
import PdfIcon from "../../../assets/icon/svg/PdfIcon";

export default function Timeline(){
    return(
        <>
            <div className={styles.timeline_box}>
                <div className={styles.timeline_title}>
                    <h6 className='typography-h6'>İstifadəçi Fəaliyyətinin Taymlayn</h6>
                </div>
                <div className={styles.timeline_list}>
                    <ul>
                        <li>
                           <div className={styles.timeline_left}>
                               <div className={styles.timeline_status_box}>
                                   <span className={`${styles.timeline_status} ${styles.success}`} />
                               </div>
                               <div className={styles.timeline_text}>
                                   <h4 className="typography-body1">
                                       12 faktura ödənilib
                                   </h4>
                                   <div className={styles.timeline_additional}>
                                       <p className='typography-body2'>Şirkətə hesab-fakturalar ödənilib</p>
                                       <div className={styles.timeline_additional_item}>
                                           <PdfIcon />
                                           <span className='typography-body2'> Invoices.pdf</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                            <div className={styles.timeline_right}>
                                <span className='typography-body2'>
                                    12 dəqiqə əvvəl
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.timeline_left}>
                                <div className={styles.timeline_status_box}>
                                    <span className={`${styles.timeline_status} ${styles.primary}`} />
                                </div>
                                <div className={styles.timeline_text}>
                                    <h4 className="typography-body1">
                                        12 faktura ödənilib
                                    </h4>
                                    <div className={styles.timeline_additional}>
                                        <p className='typography-body2'>Şirkətə hesab-fakturalar ödənilib</p>
                                        <div className={styles.timeline_additional_item}>
                                            <PdfIcon />
                                            <span className='typography-body2'> Invoices.pdf</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.timeline_right}>
                                <span className='typography-body2'>
                                    12 dəqiqə əvvəl
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.timeline_left}>
                                <div className={styles.timeline_status_box}>
                                    <span className={`${styles.timeline_status} ${styles.warning}`} />
                                </div>
                                <div className={styles.timeline_text}>
                                    <h4 className="typography-body1">
                                        12 faktura ödənilib
                                    </h4>
                                    <div className={styles.timeline_additional}>
                                        <p className='typography-body2'>Şirkətə hesab-fakturalar ödənilib</p>
                                        <div className={styles.timeline_additional_item}>
                                            <PdfIcon />
                                            <span className='typography-body2'> Invoices.pdf</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.timeline_right}>
                                <span className='typography-body2'>
                                    12 dəqiqə əvvəl
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.timeline_left}>
                                <div className={styles.timeline_status_box}>
                                    <span className={`${styles.timeline_status} ${styles.info}`} />
                                </div>
                                <div className={styles.timeline_text}>
                                    <h4 className="typography-body1">
                                        12 faktura ödənilib
                                    </h4>
                                    <div className={styles.timeline_additional}>
                                        <p className='typography-body2'>Şirkətə hesab-fakturalar ödənilib</p>
                                        <div className={styles.timeline_additional_item}>
                                            <PdfIcon />
                                            <span className='typography-body2'> Invoices.pdf</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.timeline_right}>
                                <span className='typography-body2'>
                                    12 dəqiqə əvvəl
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className={styles.timeline_left}>
                                <div className={styles.timeline_status_box}>
                                    <span className={`${styles.timeline_status} ${styles.danger}`} />
                                </div>
                                <div className={styles.timeline_text}>
                                    <h4 className="typography-body1">
                                        12 faktura ödənilib
                                    </h4>
                                    <div className={styles.timeline_additional}>
                                        <p className='typography-body2'>Şirkətə hesab-fakturalar ödənilib</p>
                                        <div className={styles.timeline_additional_item}>
                                            <PdfIcon />
                                            <span className='typography-body2'> Invoices.pdf</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.timeline_right}>
                                <span className='typography-body2'>
                                    12 dəqiqə əvvəl
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
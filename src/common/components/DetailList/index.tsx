import styles from './detail.module.css'
import EditIcon from "../../../assets/icon/svg/EditIcon";
import CalendarType1Icon from "../../../assets/icon/svg/CalendarType1Icon";
import CalendarType2Icon from "../../../assets/icon/svg/CalendarType2Icon";
import {Link} from "react-router-dom";
import ButtonCustom from "../common_ui/Button/index";

export default function DetailList(){
    return(
        <>
            <div className={`${styles.detail_list_box} box-mini`}>
                <div className={styles.list_action}>
                    <span><EditIcon /></span>
                </div>
                <div className={styles.list_title}>
                    <h6 className="typography-h6">Hyundai Motor Company</h6>
                    <span className="custom_label">
                        Avtomobil salonu
                    </span>
                </div>
                <div className={styles.list_date}>
                    <div className={styles.date_box}>
                        <span>
                        <CalendarType1Icon />
                    </span>
                        <div className={styles.date_text}>
                            <span className='typography-body2'>Bitən layihə</span>
                            <p className='typography-body1'>58</p>
                        </div>
                    </div>
                    <div className={styles.date_box}>
                        <span>
                        <CalendarType2Icon />
                    </span>
                        <div className={styles.date_text}>
                            <span className='typography-body2'>Davam edən layihə</span>
                            <p className='typography-body1'>568</p>
                        </div>
                    </div>
                </div>
                <div className={styles.list_detail}>
                    <h6 className="typography-h6">
                        Details
                    </h6>
                    <ul>
                        <li>
                            <span className='typography-body2'>VÖEN:</span>
                            <p className='typography-body1'>944869</p>
                        </li>
                        <li>
                            <span className='typography-body2'>Cavabdeh şəxs:</span>
                            <Link to={'/'} className='typography-body1'>Telman Eliyev</Link>
                        </li>
                        <li>
                            <span className='typography-body2'>Telefon nömrələri:</span>
                            <p className='typography-body1'>+994555556677</p>
                        </li>
                        <li>
                            <span className='typography-body2'>E-mail:</span>
                            <p className='typography-body1'> telman@hyundai.com</p>
                        </li>
                        <li>
                            <span className='typography-body2'>Mənbəy:</span>
                            <p className='typography-body1'>Şəxsi tanışlıq</p>
                        </li>
                        <li>
                            <span className='typography-body2'>Kim görə bilər:</span>
                            <p className='typography-body1'>Hər kəs</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.list_bottom}>
                    <p className='typography-body2'>Uyğun əlaqələr:</p>
                        <ul className={styles.contact_list}>
                            <li>
                                <span>OP</span>
                            </li>
                            <li>
                                <span>
                                    <img src="/public/img/Avatar2.svg" alt=""/>
                                </span>
                            </li>
                            <li className={styles.last_item}>
                                <span>+3</span>
                            </li>
                        </ul>
                </div>
                <div className={styles.detail_actions}>
                    <ButtonCustom variant={'primary'} btnSize={'medium'}>
                        Edit
                    </ButtonCustom>
                    <ButtonCustom variant={'danger'} isOutline={true}  btnSize={'medium'}>
                        Suspend
                    </ButtonCustom>
                </div>
            </div>
        </>
    )
}
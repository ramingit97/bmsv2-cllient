import  styles from './header.module.css'
import LogoIcon from "../../../assets/icon/svg/Logo";
import ButtonCustom from "../common_ui/Button/index";
import PlusIcon from "../../../assets/icon/svg/PlusIcon";
import {Link} from "react-router-dom";
import ListCheckIcon from "../../../assets/icon/svg/ListCheckIcon";
import NotificationIcon from "../../../assets/icon/svg/NotificationIcon";
import LogoutIcon from "../../../assets/icon/svg/LogoutIcon";
import {Badge} from "antd";

export default function Header(){
    return(
        <>
            <div className={styles.header_box}>
                <div className={styles.header_left}>
                    <LogoIcon />
                    <span />
                    <h4 className='typography-h4'>
                        CRM
                    </h4>
                </div>
                <div className={styles.header_right}>
                    <ButtonCustom
                        variant='success'
                        btnSize='small'
                        icon={<PlusIcon />}
                    >
                        Yeni
                    </ButtonCustom>
                    <ul>
                        <li>
                            <Link to={'/'}>
                                <ListCheckIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <Badge dot>
                                    <NotificationIcon />
                                </Badge>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <LogoutIcon />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
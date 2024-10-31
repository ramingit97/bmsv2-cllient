import styles from './sidebar.module.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import MenuIcon from "../../../assets/icon/svg/MenuIcon";
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Search from "antd/es/input/Search";
import {Link} from "react-router-dom";
import HomeIcon from "../../../assets/icon/svg/HomeIcon";
import UserIcon from "../../../assets/icon/svg/UserIcon";
import SaleIcon from "../../../assets/icon/svg/SaleIcon";
import ProductIcon from "../../../assets/icon/svg/ProductIcon";
import UsersIcon from "../../../assets/icon/svg/UsersIcon";
import CalendarIcon from "../../../assets/icon/svg/CalendarIcon";
import FinanceIcon from "../../../assets/icon/svg/FinanceIcon";
import TaskIcon from "../../../assets/icon/svg/TaskIcon";
import DocumentsIcon from "../../../assets/icon/svg/DocumentsIcon";
import Setting from "../../../assets/icon/svg/Setting";
import {ROUTER} from "../../constants/router";


type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    { key: '1', icon: <HomeIcon />, label: <Link to="/">Əsas səhifə</Link> },
    {
        key: 'sub2',
        label: 'CRM',
        icon: <UserIcon />,
        children: [
            { key: '4', label: <Link to={ROUTER.COMPANIES}>Şirkətlər</Link> },
            { key: '5', label:<Link to={ROUTER.CONTACTS}>Əlaqələr</Link> },
        ],
    },
    {
        key: 'sub3',
        label: 'Satış',
        icon: <SaleIcon />,
        children: [
            { key: '6', label: 'Şirkətlər' },
            { key: '7', label: 'Əlaqələr' },
        ],
    },
    {
        key: 'sub4',
        label: 'Məhsul/xidmətlər',
        icon: <ProductIcon />,
        children: [
            { key: '8', label: 'Şirkətlər' },
            { key: '9', label: 'Əlaqələr' },
        ],
    },
    {
        key: 'sub5',
        label: 'İR idarəetməsi',
        icon: <UsersIcon />,
        children: [
            { key: '10', label: 'Şirkətlər' },
            { key: '11', label: 'Əlaqələr' },
        ],
    },
    {
        key: 'sub6',
        label: 'Tarixçə',
        icon: <CalendarIcon />,
        children: [
            { key: '12', label: 'Şirkətlər' },
            { key: '13', label: 'Əlaqələr' },

        ],
    },
    {
        key: 'sub7',
        label: 'Maliyyə',
        icon: <FinanceIcon />,
        children: [
            { key: '14', label: 'Şirkətlər' },
            { key: '15', label: 'Əlaqələr' },
        ],
    },
    { key: '2', icon: <TaskIcon />, label: 'Tapşırıqlar' },
    { key: '3', icon: <DocumentsIcon />, label: 'Sənədlər' },
    {
        key: 'sub8',
        label: 'Ayarlar',
        icon: <Setting />,
        children: [
            { key: '16', label: 'Şirkətlər' },
            { key: '17', label: 'Əlaqələr' },
        ],
    },
];
export default  function Sidebar(){
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    return(
        <>
            <div className={styles.sidebar_box}>
                <div className={styles.sidebar_menu}>
                    <MenuIcon />
                </div>
                <div className={styles.sidebar_user}>
                    <img src="/img/Logo.png" alt=""/>
                    <span className='typography-body1'>Rauf Əliyev</span>
                </div>
                <div className={styles.sidebar_search}>
                    <Search  placeholder="Axtar" allowClear />
                </div>
                <div className={`${styles.menu_list} menu_list`}>
                    <Menu
                        onClick={onClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                    />
                </div>
            </div>

        </>
    )
}
import styles from './tabs.module.css'
import { Tabs } from 'antd';;
import {ICompanies} from "../../types/companies.types";
import ListIcon from "../../../assets/icon/svg/ListIcon";
import ListType2Icon from "../../../assets/icon/svg/ListType2Icon";
import MailIcon from "../../../assets/icon/svg/MailIcon";
import LinkIcon from "../../../assets/icon/svg/LinkIcon";
import Timeline from "../timeline/index";


let data:ICompanies[] = [
    {
        id: 'string',
        name: 'string',
        phone: 'string',
        created_at: 55445345,
        updated_at: 4545353,
        email: 'string',
        category: 'string',
        key: 'string',
    }
]
export default function DetailTabs(){
    const { TabPane } = Tabs;

    return(
        <>
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <><span>Qeyd</span> <ListIcon /></>
                    }
                    key="1"
                >
                   <Timeline />
                </TabPane>
                <TabPane
                    tab={
                        <><span>Tapşırıq</span> <ListType2Icon /></>
                    }
                    key="2"
                >
                    Profile Content
                </TabPane>
                <TabPane
                    tab={
                        <><span>Email & mesaj</span> <MailIcon /></>
                    }
                    key="3"
                >
                    Settings Content
                </TabPane>
                <TabPane
                    tab={
                        <><span>Bağlantılar</span> <LinkIcon /></>
                    }
                    key="4"
                >
                    Settings Content
                </TabPane>
            </Tabs>
        </>
    )
}
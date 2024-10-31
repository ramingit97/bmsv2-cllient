import styles from './actions.module.css'
import ButtonCustom from "../../../common_ui/Button/index";
import ExportIcon from "../../../../../assets/icon/svg/ExportIcon";
import ImportIcon from "../../../../../assets/icon/svg/ImportIcon";
import TrashIcon from "../../../../../assets/icon/svg/TrashIcon";
import {Button, Input, Tooltip} from "antd";
import Plus2Icon from "../../../../../assets/icon/svg/Plus2Icon";
import SendIcon from "../../../../../assets/icon/svg/SendIcon";
import EditIcon from "../../../../../assets/icon/svg/EditIcon";
import {useNavigate} from "react-router-dom";

export default function TableActions({add}: { add:string }) {
    let navigate = useNavigate()
    return (
        <>

            <div className={styles.table_top}>
                <div className={styles.left_buttons}>
                    <ButtonCustom
                        variant='table'
                        btnSize={'small'}
                        icon={<ExportIcon/>}
                    >
                        İxrac et
                    </ButtonCustom>
                    <ButtonCustom
                        variant='table'
                        btnSize={'small'}
                        icon={<ImportIcon/>}
                    >
                        İdxal et
                    </ButtonCustom>
                    <ButtonCustom
                        variant='table'
                        btnSize={'small'}
                        icon={<TrashIcon/>}
                    >
                        Sil
                    </ButtonCustom>
                </div>
                <div className={styles.right_buttons}>
                    <Input size="large" placeholder="Şirkət axtar"/>
                    <ButtonCustom
                        variant='success'
                        btnSize='medium'
                        icon={<Plus2Icon/>}
                        onClick={()=> navigate(add)}

                    >
                        Yeni şirkət
                    </ButtonCustom>
                    <Tooltip title="Göndər"
                             overlayInnerStyle={{
                                 backgroundColor: 'rgba(38, 39, 50, 0.9)',
                                 color: 'white',
                                 fontSize: '11px',
                                 padding: '4px 8px',
                                 borderRadius: '6px',
                                 textDecoration:'underline',
                                 height:'24px!important'
                             }}
                    >
                        <Button type="text" className={styles.custom_btn}><SendIcon/></Button>
                    </Tooltip>

                    <Tooltip title="Cədvəl düzəlt" placement="bottom"
                             overlayInnerStyle={{
                                 backgroundColor: 'rgba(38, 39, 50, 0.9)',
                                 color: 'white',
                                 fontSize: '11px',
                                 padding: '4px 8px',
                                 borderRadius: '6px',
                                 textDecoration:'underline',
                                 height:'24px'
                             }}
                    >
                        <Button type="text" className={styles.custom_btn}><EditIcon/></Button>
                    </Tooltip>
                    <Tooltip title="Ayarlar"
                             overlayInnerStyle={{
                                 backgroundColor: 'rgba(38, 39, 50, 0.9)',
                                 color: 'white',
                                 fontSize: '11px',
                                 padding: '4px 8px',
                                 borderRadius: '6px',
                                 textDecoration:'underline',
                                 height:'24px'
                             }}
                    >
                        <Button type="text" className={styles.custom_btn}><SendIcon/></Button>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}
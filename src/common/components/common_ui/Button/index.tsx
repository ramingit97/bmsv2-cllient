import {PropsWithChildren} from "react";
import {Button as ButtonAnt, ButtonProps} from "antd";
import styles from "./button.module.css";

interface Props extends ButtonProps {
    variant: "primary" | "success" | 'danger' | 'warning' | 'info' | ' secondary' | 'table';
    btnSize: 'small' | 'medium' | 'large'
    isOutline?: boolean
}

export default function ButtonCustom({children, variant,isOutline=false, btnSize, ...props}: PropsWithChildren<Props>) {
    return (
        <>
            <ButtonAnt disabled={props.disabled}
                       className={`${styles.button_custom} ${variant && styles[variant]} ${btnSize && styles[btnSize]} ${isOutline && styles.outline_btn}`} {...props}>
                {children}
            </ButtonAnt>
        </>
    )
}
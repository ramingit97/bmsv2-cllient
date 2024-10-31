import {Col, Row} from "antd";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {ReactNode} from "react";
import Footer from "../components/Footer/index";
import styles from './layout.module.css'

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}:LayoutProps){
    return(
        <>
            <Row>
                <Col span={3}>
                    <Sidebar />
                </Col>
                <Col span={21}>
                    <div className={styles.layout_box}>
                        <div>
                            <Header />
                            <div className={styles.main_content}>
                                {children}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </Col>
            </Row>
        </>
    )
}
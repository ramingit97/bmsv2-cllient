import {Col, Row} from "antd";
// import DetailTabs from "../../../../common/components/DetailTabs";
// import DetailList from "../../../../common/components/DetailList";
import Layout from "../../../../common/Layout";

export default function CompanyDetail(){
    return(
        <>
             <Layout>
                 <Row gutter={24}>
                     <Col span={8}>
                         {/*<DetailList />*/}
                     </Col>
                     <Col span={16}>
                         {/*<DetailTabs />*/}
                     </Col>
                 </Row>
             </Layout>
        </>
    )
}
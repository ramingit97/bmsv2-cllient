import Layout from "../../common/Layout";
import TableComponent from "../../common/components/Table";
import {ICompanies} from "../../common/types/companies.types.ts";
import TableActions from "../../common/components/Table/components/Actions";
import {ROUTER} from "../../common/constants/router.ts";

const Companies = () => {
    let data:ICompanies[] = [
        {
            id:'1',
            key: '1',
            name: 'Metak MMC',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'2',
            key: '2',
            name: 'Hyundai Motor Company',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'3',
            key: '3',
            name: 'Pasha Technology',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'4',
            key: '4',
            name: 'Liffe Group',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'5',
            key: '5',
            name: 'Newlite Solutions Ltd',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'6',
            key: '6',
            name: 'Air Products & Chemicals',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'7',
            key: '7',
            name: 'General Motors',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'8',
            key: '8',
            name: 'Metak MMC',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'9',
            key: '9',
            name: 'Hyundai Motor Company',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'10',
            key: '10',
            name: 'Pasha Technology',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'11',
            key: '11',
            name: 'Liffe Group',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'12',
            key: '12',
            name: 'Newlite Solutions Ltd',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'13',
            key: '13',
            name: 'Air Products & Chemicals',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        },
        {
            id:'14',
            key: '14',
            name: 'General Motors',
            phone: '994502111551',
            email: 'elnare@starmmc.com',
            created_at: 1724830565547,
            updated_at: 1724830565547,
            category: 'Category 1'
        }
    ]
    return (
        <>
            <Layout>
               <div className="table_container">
                   <TableActions add={ROUTER.COMPANY_ADD}  />
                   <TableComponent data={data} tableName={'companies'} />
               </div>
            </Layout>
        </>
    )
}
export default Companies
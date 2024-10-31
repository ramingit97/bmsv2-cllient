import {useState} from "react";
import { Table,PaginationProps } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {Link} from "react-router-dom";
import styles from './table.module.css'

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

export default  function  TableComponent<T extends any[]>({data,tableName }:{data:T,tableName:string}){
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const total = 10;
    const totalPages = Math.ceil(total / pageSize);
    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const columns = ()=>{
        let res = [];
        const keys = Object.keys(data[0]) as (keyof T)[];
        keys.forEach((key, index)=>{
            if (index === 2) {
                res.push({
                    title: key,
                    dataIndex: key,
                    render: (text: string) => <Link to={`/${tableName}/${index}`} >{text}</Link>
                });
            } else {
                res.push({ title: key, dataIndex: key });
            }
        })
        return res;
    }
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<T> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const paginationConfig: PaginationProps = {
        current: currentPage,
        pageSize,
        total,
        onChange: handlePageChange,
        showTotal: () => `Page ${currentPage} of ${totalPages}`,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
    };
    return(
        <>
            <div className={styles.custom_table}>
                <Table
                    rowSelection={rowSelection}
                    columns={columns()}
                    dataSource={data}
                    pagination={paginationConfig}
                />
            </div>
        </>
    )
}
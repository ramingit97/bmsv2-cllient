import React from 'react';
import { Form, Input, Button, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import Layout from '../../../../common/Layout';
import { useProductAddMutation } from '../../api/ProductApi';
interface ProductFormProps {
  onSubmit: (values: ProductFormValues) => void;
}

interface ProductFormValues {
  name: string;
  description: string;
  file: RcFile | null;
  count: number;
}

const ProductAddForm: React.FC<ProductFormProps> = () => {


  const [productAdd,{isLoading,isSuccess,error,isError}] = useProductAddMutation();

  const [form] = Form.useForm();

  const handleFileChange = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'done') {
      form.setFieldsValue({ file: info.file.originFileObj });
    }
  };

  const handleFinish = (values: Omit<ProductFormValues, 'file'>) => {
    const file = form.getFieldValue('file') as RcFile;
    // onSubmit({ ...values, file });

    productAdd({
        ...values,file
    })

    console.log('values',values);
    console.log('files',file)
  };

  return (
    <Layout>
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      initialValues={{ count: 1 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the product name' }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter the product description' }]}
      >
        <Input.TextArea placeholder="Enter product description" />
      </Form.Item>

      <Form.Item
        label="File Upload"
        name="file"
        valuePropName="file"
        rules={[{ required: true, message: 'Please upload a file' }]}
      >
        <Upload
          beforeUpload={() => false} // Prevent auto upload
          onChange={handleFileChange}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Count"
        name="count"
        rules={[{ required: true, message: 'Please enter the count' }]}
      >
        <InputNumber min={1} placeholder="Enter count" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Layout>
  );
};

export default ProductAddForm;

import React from 'react';
import { Button, Form, Input } from 'antd';

const PageThree = ({
    changeItem,textThree
}) => {
    const onFinish = (values) => {
        changeItem('three', values.changeText)
    }
    return (
        <div >
            <h2>页面three</h2>
            <Form
                name="basic"
                style={{
                    maxWidth: 400,
                    display: 'flex'
                }}
                onFinish={(v) => onFinish(v)}
                autoComplete="off"
            >
                <Form.Item
                    label="修改"
                    name="changeText"
                    initialValue={textThree}
                >
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit" style={{ marginLeft: 20 }}>
                    保存
                </Button>
            </Form>
        </div>
    )
}
export default PageThree
import React from 'react';
import { Button, Form, Input } from 'antd';

const PageTwo = ({
    changeItem,textTwo
}) => {
    const onFinish = (values) => {
        changeItem('two', values.changeText)
    }
    return (
        <div >
            <h2>页面two</h2>
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
                    initialValue={textTwo}
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
export default PageTwo
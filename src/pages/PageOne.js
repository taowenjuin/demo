import React from 'react';
import { Button, Form, Input } from 'antd';

const PageOme = ({
    changeItem,textOne
}) => {
    const onFinish = (values) => {
        changeItem('one', values.changeText)
    }

    return (
        <div >
            <h2>页面one</h2>
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
                    initialValue={textOne}
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
export default PageOme


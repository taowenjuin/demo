import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MyLayout = ({ children, textOne, textTwo, textThree, textFour }) => {

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [collapsed, setCollapsed] = useState(false);
    const sideMenuData = [
        {
            key: '/pageone',
            label: '菜单一',
            children: [
                {
                    label: textOne,
                    key: '/pageone/tabone'
                },
                {
                    label: textTwo,
                    key: '/pageone/tabtwo'
                },
            ]
        },
        {
            key: '/pagetwo',
            label: '菜单二',
            children: [
                {
                    label: textThree,
                    key: '/pagetwo/tabone'
                },
                {
                    label: textFour,
                    key: '/pagetwo/tabtwo'
                },
            ]
        },
    ]
    const findOpenKeys = (key) => {
        const result = []
        const findInfo = (arr) => {
            arr.forEach(item => {
                if (key.includes(item.key)) {
                    result.push(item.key)
                    if (item.children) {
                        findInfo(item.children)
                    }
                }
            })
        }
        findInfo(sideMenuData)
        return result
    }
    const tmpOpenKeys = findOpenKeys(pathname)


    return (
        <Layout style={{ minHeight: '100vh' }} id='components-layout-demo-custom-trigger'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultOpenKeys={tmpOpenKeys}
                    defaultSelectedKeys={tmpOpenKeys}
                    onClick={({ key }) => {
                        navigate(key)
                    }}
                    items={sideMenuData}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default MyLayout;
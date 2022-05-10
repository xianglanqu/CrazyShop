import React, { useState } from 'react'
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SmileOutlined
} from '@ant-design/icons';
const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const menu = (
        <Menu
            items={[
                {
                    label:
                        'super admin'
                    ,
                },
                {
                    label: (
                        222222
                    ),
                    icon: <SmileOutlined />,
                    disabled: false,
                },
                {
                    label: (
                        333333333
                    ),
                    disabled: false,
                },
                {
                    danger: true,
                    label: 'drop out',
                },
            ]}
        />
    );

    return (
        <Header className="site-layout-background" style={{ padding: '0 16px' }}>
            {
                collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
            }
            <div style={{ float: "right" }}>
                <span>Welcome Back,Admin</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}

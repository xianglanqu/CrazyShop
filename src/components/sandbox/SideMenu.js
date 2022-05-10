import React from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
} from '@ant-design/icons';
import './index.css'
const { Sider } = Layout;
// const { SubMenu } = Menu;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <UserOutlined />),
    getItem('Option 2', '2', <UserOutlined />),
    getItem('Home', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('User Management', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('authority management', '9', <UserOutlined />),
];

export default function SideMenu() {
    return (

        <Sider trigger={null} collapsible>
            <div className="logo">Global News System</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
            />
        </Sider>
    )
}

import React from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    // VideoCameraOutlined,
    // UploadOutlined,
} from '@ant-design/icons';
import './index.css'
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('首页', '/home', <UserOutlined />),
    getItem('用户管理', '/user-manage', <UserOutlined />, [getItem('用户列表', '/user-manage/list')]),
    getItem('权限管理', '/right-manage', <UserOutlined />, [getItem('角色列表', '/right-manage/role/list'), getItem('权限列表', '/right-manage/right/list')]),
    getItem('新闻管理', 'sub1', <UserOutlined />, [
        getItem('Tom', '/user-manage/userList'),
        getItem('Bill', '4'),
    ]),
    // getItem('审核管理', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '/user-manage/list'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
    // getItem('发布管理', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '/user-manage/list'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
];
export default function SideMenu() {
    const navigate = useNavigate()
    return (
        <Sider trigger={null} collapsible>
            <div className="logo">Global News System</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['/home']}
                items={items}
                onClick={(info) => {
                    navigate(info.key)
                }}
            />
        </Sider>
    )
}

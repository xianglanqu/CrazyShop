import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
import { useNavigate } from 'react-router-dom';
import {
    UserOutlined
} from '@ant-design/icons';
import axios from 'axios'
const { Sider } = Layout;
const { SubMenu } = Menu

const iconList = {
    "/home": <UserOutlined />,
    "/user-manage": <UserOutlined />,
    "/user-manage/list": <UserOutlined />,
    "/right-manage": <UserOutlined />,
    "/right-manage/role/list": <UserOutlined />,
    "/right-manage/right/list": <UserOutlined />
    //.......
}


function SideMenu(props) {
    const [meun, setMeun] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/rights?_embed=children").then(res => {
            // console.log(res.data)
            setMeun(res.data)
        })
    }, [])


    const checkPagePermission = (item) => {
        return item.pagepermisson
    }
    const navigate = useNavigate()
    const renderMenu = (menuList) => {
        return menuList.map(item => {
            if (item.children && checkPagePermission(item)) {
                return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
                    {renderMenu(item.children)}
                </SubMenu>
            }

            return checkPagePermission(item) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => {
                navigate(item.key)
            }}>{item.title}</Menu.Item>
        })
    }
    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div className="logo" >全球新闻发布管理系统</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
                {renderMenu(meun)}
            </Menu>
        </Sider>
    )
}
export default (SideMenu)
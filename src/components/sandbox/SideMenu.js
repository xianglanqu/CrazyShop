import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
import { useLocation, useNavigate } from 'react-router-dom';
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
    const [menu, setMeun] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5001/rights?_embed=children").then(res => {
            //   console.log(res.data)

            setMeun(res.data)
        })
    }, [])


    const checkPagePermission = (item) => {
        return item.pagepermisson
    }
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location.pathname);
    const renderMenu = (menuList) => {
        return menuList.map(item => {
            if (item.children?.length > 0 && checkPagePermission(item)) {
                return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
                    {renderMenu(item.children)}
                </SubMenu>
            }

            return checkPagePermission(item) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={() => {
                navigate(item.key)
            }}>{item.title}</Menu.Item>
        })
    }
    const selectKeys = [location.pathname]
    const openKeys = ["/" + location.pathname.split("/")[1]]
    //console.log(location.pathname);
    //console.log(location.pathname.split("/")[1]);

    return (
        <Sider trigger={null} collapsible collapsed={false}>
            <div style={{ display: "flex", height: "100%", "flexDirection": "column" }}>
                <div className="logo" >全球新闻发布管理系统</div>
                <div style={{ display: 1, "overflow": "auto" }}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={selectKeys} defaultOpenKeys={openKeys}>
                        {renderMenu(menu)}

                    </Menu>
                </div>
            </div>
        </Sider >
    )
}

export default (SideMenu)
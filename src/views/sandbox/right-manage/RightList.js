import React, { useEffect, useState } from 'react'
import { Table, Tag, Button, Modal } from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
const { confirm } = Modal
export default function RightList() {
    const [dataSource, setdataSource] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5001/rights?_embed=children").then(res => {
            const list = res.data
            list[0].children = ""
            setdataSource(list)
        })
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '权限名称',
            dataIndex: 'title',
        },
        {
            title: '权限路径',
            dataIndex: 'key',
            render: (key) => {
                return <Tag color="orange">{key}</Tag>
            }
        },
        {
            title: '操作',
            // dataIndex: 'key',
            render: () => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => confirmMethod()} />
                    <Button type="primary" shape="circle" icon={<EditOutlined />} />
                </div>
            }
        },
    ];
    const confirmMethod = () => {
        confirm({
            title: 'Do you Want to delete it?',
            icon: <ExclamationCircleOutlined />,
            // content: 'Some descriptions',
            onOk() {
                deleteMethod()
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    const deleteMethod = () => {

    }
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
        </div>
    )
}

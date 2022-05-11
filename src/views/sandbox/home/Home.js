import React from 'react'
import { Button } from 'antd';
import axios from 'axios';


export default function Home() {
    const ajax = () => {
        //get data
        // axios.get("http://localhost:8000/posts").then(res => {
        //     console.log(res.data);
        // })
        //post data
        // axios.post("http://localhost:8000/posts", {
        //     title: "33333",
        //     author: "aaaaa"
        // })
        //put data （Global replacement）
        // axios.put("http://localhost:8000/posts/1", {
        //     title: "1-1-1"
        // })
        //update data patch （Partial replacement）
        // axios.patch("http://localhost:8000/posts/1", {
        //     title: "1.1"
        // })
        //delete data
        // axios.delete("http://localhost:8000/posts/1")

        //_embed （Join different tables）
        // axios.get("http://localhost:8000/posts?_embed=comments").then(res => {
        //     console.log(res.data);
        // })
        //_expand 
        axios.get("http://localhost:8000/comments?_expand=post").then(res => {
            console.log(res.data)
        })
    }
    return (
        <div>
            <Button type="primary" onClick={ajax}>Button</Button>
        </div>
    )
}

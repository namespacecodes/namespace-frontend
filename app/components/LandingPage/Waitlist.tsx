"use client"
import { Button, Form, Input } from 'antd'
import axios from 'axios';
import { error } from 'console';
import React from 'react'

const Waitlist = () => {
    const [form] =Form.useForm();
    const onFinish = (values: any) => {
        console.log(values);
        axios.post('https://name-space.onrender.com/waitList',{
            name:values.name,
            email:values.email
        }).then((res)=>{
            console.log("success");
            
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <Form form={form} onFinish={onFinish} style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }} className='space-y-3 pt-5'>
            <Form.Item  name='name' className='w-5/6 md:w-1/6' rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input  placeholder='Name' />
            </Form.Item>
            <Form.Item name='email' className='w-5/6 md:w-1/6' rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input  placeholder='Email' />
            </Form.Item>
            <Form.Item className='w-5/6 md:w-1/6'>
                <Button className='bg-[#F6014E] w-full  text-[#FEFEFE]' htmlType='submit' type='default'>Join Waitlist</Button>
            </Form.Item>
        </Form>
    )
}

export default Waitlist
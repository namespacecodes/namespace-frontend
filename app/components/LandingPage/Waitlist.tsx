"use client"
import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React, {useState } from 'react'
// https://name-space.onrender.com/
const Waitlist = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'Successfully joined waitlist',
      });
    };
  
    const error = (message:string) => {
      messageApi.open({
        type: 'error',
        content: message,
      });
    };
  
    const [loading,setLoading]= useState<boolean>(false)
    const [form] =Form.useForm();
    const onFinish = (values: any) => {
        setLoading(true)
        axios.post('https://name-space.onrender.com/waitList',{
            name:values.name,
            email:values.email
        }).then((res)=>{
            setLoading(false)
            success()
        }).catch((err)=>{
            setLoading(false)
            error(err?.response?.data?.status)
        })
    }

    return (
        <Form form={form} onFinish={onFinish} style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }} className='pt-5'>
            {contextHolder}
            <Form.Item  name='name' className='w-5/6 md:w-1/6 border-[#340181]' labelCol={{span:1}} rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input className='border-[#340181]' size='large'   placeholder='Name' />
            </Form.Item>
            <Form.Item name='email' className='w-5/6 md:w-1/6 border-[#340181]' labelCol={{span:1}} rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input className='border-[#340181]' size='large'  placeholder='Email' />
            </Form.Item>
            <Form.Item className='w-5/6 md:w-1/6' labelCol={{span:1}}>
                <Button loading={loading} size='large' className='bg-[#F6014E] w-full  text-[#FEFEFE]' htmlType='submit' type='default'>Join Waitlist</Button>
            </Form.Item>
        </Form>
    )
}

export default Waitlist
import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordCheckError, setPasswordCheckError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if ( password !== passwordCheck ) {
            return setPasswordError(true);
        }
        if ( !term ) {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordCheck = (e) => {
        setPasswordCheckError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };
    
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd-with-locales.js" />
            </Head>
        
            <AppLayout>
                <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br/>
                        <input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br/>
                        <input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </div>
                    <div>
                        <label htmlFor="user-pass">비밀번호</label>
                        <br/>
                        <input name="user-pass" value={password} type="password" required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-pass-check">비밀번호체크</label>
                        <br/>
                        <input name="user-pass-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
                        {passwordCheckError && <div style={{ color: 'red' }}> 비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>본 약관에 동의합니다</Checkbox>
                        {termError && <div style={{ color: 'red' }}> 약관에 동의하셔야합니다.</div>}
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    )
};

export default Signup;
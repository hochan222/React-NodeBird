import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.17.0/antd-with-locales.js" />
            </Head>
        
            <AppLayout>
                <div>Profile</div>
            </AppLayout>
        </>
    )
};

export default Profile;
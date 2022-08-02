import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>MateusBlog</title>
                <meta
                    name="description"
                    content="MateusCodes® Blog usando NextJS com SSG. Aqui você encontra um layout de blog moderno jutamente com o poder de uma SPA com Static Site Generator"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;

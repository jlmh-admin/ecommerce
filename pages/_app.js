import React from 'react';
import Layout from '../components/layout';
import { Toaster } from 'react-hot-toast'
import { StateContext } from '../context/statecontext';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />

      </Layout>
    </StateContext>
  );
}

export default MyApp

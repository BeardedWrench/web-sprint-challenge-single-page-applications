import React from 'react';

/**
 * CUSTOM IMPORTS 
 */

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Home( props ){


    return(
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
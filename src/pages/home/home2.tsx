import React from 'react'
import Navbar from '../../components/navbar/navbarhome'
import Banner from '../../components/banner/bnhome2'
import Card from '../../components/card/cardhome2'
import Article from '../../components/articlehome/article3'
import Footer from '../../components/footer/footer'



const home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Card />
            <Article />
            <Footer />
        </>
    )
}

export default home
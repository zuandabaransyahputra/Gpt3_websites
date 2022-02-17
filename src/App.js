import React from 'react'
import { Footer, Blog, Header, Possibility, WhatGPT3, Features } from "./containers"
import { Brand, Cta, Navbar } from "./components"
import "./App.css"

export default function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}
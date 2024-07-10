
import React from 'react'
import { Hero } from "./components/Hero"
import LicenseProcess from './components/LicenseProcess'
import Services from './components/Services'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Services />
            <LicenseProcess />
        </div>
    )
}

export default HomePage


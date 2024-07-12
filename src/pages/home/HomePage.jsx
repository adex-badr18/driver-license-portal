import React from 'react'
import Profile from "../profile/Profile"
import { Hero } from "./components/Hero"
import LicenseProcess from './components/LicenseProcess'
import Services from './components/Services'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <LicenseProcess />
            <Services />
        </div>
    )
}

export default HomePage



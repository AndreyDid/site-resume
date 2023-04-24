import React from "react";
import Header from "./header/header";
import AboutMe from "./aboutMe/aboutMe";
import Projects from "./projects/projects";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";
import Skills from "./skills/skills";

const Main = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main className='main'>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </main>
            <footer className='footer'>
                <Footer/>
            </footer>
        </div>
    )
}
export default Main
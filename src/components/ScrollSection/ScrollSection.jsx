import React from 'react';
import {
    ScrollingProvider,
    useScrollSection,
    Section,
} from 'react-scroll-section';

const StaticMenu = () => {
    const homeSection = useScrollSection('home');
    const aboutSection = useScrollSection('about');

    return (
        <ul>
            <li onClick={homeSection.onClick} selected={homeSection.selected}>
                Home
            </li>
            <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
                About
            </li>
        </ul>
    );
};

const Scroll = () => (
    <ScrollingProvider>
        <StaticMenu />
        <Section id="home">MY HOME</Section>
        <Section id="about">ABOUT ME</Section>
    </ScrollingProvider>
);
export default Scroll
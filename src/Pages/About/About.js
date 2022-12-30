import React from 'react';
import "./About.css";
import owner from "../../Images/IMG-20210310-WA0030.jpg"

const About = () => {
    return (
        <div className=' '>
           
            <div className="side_wrapper">
                <section className=" about-dev">
                    <header className="profile-card_header">
                        <div className="profile-card_header-container">
                            <div className="profile-card_header-imgbox">
                                <img src={owner} alt="Mewy Pawpins" />
                            </div>
                            <h1>Aditi Roy Chowdhury <span>Head of Chowdhurani</span></h1>
                        </div>
                    </header>
                    <div className="profile-card_about">
                        <h2>All About Ours</h2>
                        <p>I'm a Crafting maker of Jewellery from Bangladesh, looking for my Creativity in doing this. I like those man who help another. I'd do well in a home in my own way , </p>
                        <footer className="profile-card_footer">
                            <div className="social-row">
                                <div className="heart-icon" title="No Health Issues">
                                </div>
                                <div className="paw-icon" title="Gets Along Well With Other Animals">
                                </div>
                            </div>
                            <p><a className="back-to-profile" href="#">Be Unique,Be Unique</a></p>
                        </footer>
                    </div >
                </section >
            </div >
        </div >
    );
};

export default About;
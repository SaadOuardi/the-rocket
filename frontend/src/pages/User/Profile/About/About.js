import React from 'react';
import { Member } from '../../../../components/User/Profile/MemberBar/Member';
import './About.scss';

const About = ({userID}) => {
    return (
        <main>
            <div className='Main-Content FLex-Center Flex-Column'>
                <div className='Main-Header Flex-Center Primary-Padding'>
                    <Member userID={userID}/>
                </div>

                <div className='Main-Body primary-padding flex-center-center flex-column'>
                    <div className='about-container container secondary-padding'>
                        <div className=''>
                            <h1>Contact Info</h1>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Name:</h2>
                            <p>Saad Ouardi</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Email:</h2>
                            <p>saad.ouardi.developer@gmail.com</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Phone:</h2>
                            <p>(+49) 15-216-422-700</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Address:</h2>
                            <p>Offenbach, Germany</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>LinkedIn:</h2>
                            <a href='http://www.rebeca.com'>https://www.linkedin.com/in/saad-ouardi/</a>
                        </div>
                        <div className='flex-center-start primary-padding'>
                            <h2>Instagram:</h2>
                            <a href='http://www.rebeca.com'>https://www.instagram.com/ouardi.saad/</a>
                        </div>
                    </div>
                    <div className='about-container container secondary-padding'>
                        <div className=''>
                            <h1>Education And Others Information</h1>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>BirthDay:</h2>
                            <p>January 3, 2003</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>School:</h2>
                            <p>Minnesota State University, Mankato USA</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Degree:</h2>
                            <p>Bachelor's degree</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Field of study:</h2>
                            <p>Computer Science</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Employment:</h2>
                            <p>Web Development</p>
                        </div>
                    </div>
                    <div className='about-container container secondary-padding'>
                        <div className=''>
                            <h1>Hobbies and Interests</h1>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>My Hobbies:</h2>
                            <p>Football | Gaming | Coding</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Favorite Music Bands/Artists:</h2>
                            <p>Eminem | Travis Scoot | Juice WRLD | Yeat</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Favorite TV Shows:</h2>
                            <p>Vikings | La casa de papel | Squid Game</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Favorite Books:</h2>
                            <p>Antigone | Philosophiæ Naturalis Principia Mathematica</p>
                        </div>
                        <hr/>
                        <div className='flex-center-start primary-padding'>
                            <h2>Favorite Games:</h2>
                            <p>Fortnite | PUBG | WARZONE | GTAV | FIFA</p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About

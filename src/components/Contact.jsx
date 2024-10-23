import React from 'react'
import person1 from '../assets/img/people/1.png'
import person2 from '../assets/img/people/2.png'
import person3 from '../assets/img/people/3.png'

const Contact = () => {

    const person = [person1, person2, person1, person3];

    return (
        <>
            <section id="page_header" className="contact_header">
                <h2>#Let's_talk</h2>
                <p>LEAVE A MESSAGE, WE LOVE TO HEAR FROM YOU!</p>
            </section>

            <section id="con_details" className="section-p1">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>visit one of our agency locations or contacts us today</h2>
                    <h3>Head Office</h3>
                    <li>
                        <i className="fas fa-map"></i>
                        <p>Sri Sampda, Kavuri Hiils, Madhapur , Hyderabad</p>
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i>
                        <p>support@gmail.com</p>
                    </li>
                    <li>
                        <i className="fas fa-phone-alt"></i>
                        <p>+91 9955 444, +91 9955 333</p>
                    </li>
                    <li>
                        <i className="fas fa-clock"></i>
                        <p>Monday to Saturday: 9:00 AM to 6:00 PM</p>
                    </li>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19368.776102235403!2d78.43236769780205!3d17.439104605348007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c55bb43183%3A0x1abc135b23ee2703!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1664608306520!5m2!1sen!2sin"
                        width="600" height="450" loading="lazy" >

                    </iframe>
                </div>
            </section>

            <section id="form_details" className="section-p1">
                <form action="#">
                    <span>LEAVE YOUR MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Subject" />
                    <textarea name="msg" id="message" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
                    <button className="normal">Submit</button>
                </form>

                <div className="people">
                    {
                        person.map((data, index) => {
                            return (
                                <div className="item" key={index}>
                                    <img src={data} alt="people" />
                                    <p><span>R Raj</span> Testing Manager <br />phone: +91 9977 5500 <br /> Email: support@gmail.com</p>
                                </div>
                            )
                        })
                    }


                </div>

            </section>

        </>
    )
}

export default Contact
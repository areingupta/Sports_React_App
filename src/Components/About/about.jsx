import React from "react";
import './about_style.css';
import Arein from './arein_about.jpg';

const About = () => {
  return (
    <>
      
      <section className="about">
        <div className="content">
          <img src={Arein} alt="" />
          <div className="text">
          

            <h1>Hey!</h1>
            <p>
              I'm Arein Gupta. An engineering junior, pursuing B.Tech in
              Engineering Physics from Delhi Technological University. I'm
              really passionate about Programming, and development in particular. Of
              course, CS mila nahi tha, so I'm having to learn these skills on
              my own. Apart from this, I also have keen interest in Photography and Tennis.
              <br />
              I have proficiency in technologies like: <br />
              1) HTML, CSS, JS <br />
              2) ReactJS <br />
              3) Java Programming <br />
              4) DBMS <br /><br />

              I would like to further improve upon my knowledge and tech stack, and so am actively looking for Projects and Internships 
              in the field of Web Development and Software Engineering.

            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
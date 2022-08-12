/**
 * @Author: Your name
 * @Date:   2022-07-22 18:55:09
 * @Last Modified by:   Ahmed BEN JEMAA
 * @Last Modified time: 2022-08-12 08:29:14
 */
import React from "react";
import "./styles.css";

import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "./photo.jpg",
  name: "Ahmed Ben jemaa",
  profession: "DevOps Engineer/ Full stack developer",
  address: "Tunisie,Sfax",
  phone: "+216 23 676 915",
  email: "benjemaa344@gmail.com",
  about:
    "Full stack developer specializing in front-end and back-end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JAVA 11, JS ES6, HTML5, CSS3, React JS, Angular. Strong background in project management and customer relations."
};

export default function App() {
  const experienceComponent = experience.map(item => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map(item => <CVComponent item={item} />);

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>
              <i className="fa fa-cogs" /> Skills
            </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>
              <i className="fa fa-briefcase fa" /> Work Experience{" "}
            </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1>
              {" "}
              <i className="fa fa-university" /> Education{" "}
            </h1>
            {educationComponent}
          </section>

          <section className="other">
            <h1>
              {" "}
              <i className="fa fa-desktop" /> Other Interests{" "}
            </h1>
            <h3>  </h3>
            <ul>
              <li>
                <i className="fa fa-book" />  
              </li>
              <li>
                <i className="fa fa-book" />  
              </li>
            </ul>
            <h3> </h3>
            <ul> 
              <li>   </li>
              <li> </li>
            </ul>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p> </p>
        <i className="fa fa-facebook-square" />
        <i className="fa fa-instagram" />
        <i className="fa fa-github" />
        <i className="fa fa-linkedin-in" /> 
      </footer>
    </div>
  );
}

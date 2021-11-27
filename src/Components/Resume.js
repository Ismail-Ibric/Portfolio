import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <ul>{work.description.map( (item2, key) => (
            <li key={key}>{item2}</li>
          ))}</ul>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      //var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <div key={skills.name}>
          <div className="skill-name">
            {skills.name}
          </div>
          <div className="skill-info">
            <div className="skill-years">
              <b>{skills.years}</b> - years
            </div>
            <div className="skill-lastUsed">
              <b>{skills.last}</b> - used last
            </div>
          </div>
        </div>
        // <li key={skills.name}>
        //   <span style={{ width: skills.years }} className={className}></span>
        //   <em>{skills.name}</em>
        //   <span>{skills.years}</span>
        // </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

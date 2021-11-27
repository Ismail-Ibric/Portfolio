import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (project, key) {
      var projectImage = "images/portfolio/" + project.image;
      var miscData = project.misc;
      return (
      <div className="portfolio-item-wrap" key={key}>
        <div key={project.name} className="columns portfolio-item">
          <div className="item-wrap">
            <span href={project.url} title={project.name}>
              <img alt={project.name} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.name}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              {/* <div className="link-icon">
                <i className="fa fa-link"></i>
              </div> */}
            </span>
          </div>
        </div>
        <div className="details">
          <div className="table">
            <div className="row">
              <div className="label">
                Project Name:
              </div>
              <div className="content">
                {project.name}
              </div>
            </div>
            <div className="row">
              <div className="label">
                Dependencies:
              </div>
              <div className="content">
                {project.using}
              </div>
            </div>
            { miscData?.map( (entry, key) => (
              <div className="row" key={key}>
                <div className="label">
                  {entry.label}
                </div>
                <div className="content">
                  <a href={entry.url} target="_blank" rel="noreferrer">
                    {entry.content} 
                  </a>
                  { entry.contBonus ? 
                  <div className="">
                    {entry.contBonus} 
                  </div> : ""
                }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

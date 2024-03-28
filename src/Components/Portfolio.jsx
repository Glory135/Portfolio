/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me2.jpg";

const imageAltText = "My personal picture";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Multi Translator app",
    description:
      "A translattor app that  supports multiple languages at once.",
    url: "https://multi-language-translator.vercel.app/",
  },
  {
    title: "Stackbuild",
    description:
      "A blog site that calls api from https://dummyapi.io/data/v1.",
    url: "https://stackbuild-two.vercel.app/",
  },
  {
    title: "Unique Writers",
    description:
      "A blog site made with React.js, MongoDB, Express.js and Node.js where users can apply to be writers and write stories for readers",
    url: "http://unique-writters.vercel.app/",
  },
  {
    title: "Movie site",
    description:
      "A movie site made with React.js, MongoDB, Express.js and Node.js to make it a fullstack web app.",
    url: "http://g-movies.vercel.app/",
  },
  {
    title: "AutoMart",
    description:
      "A site for users to post their cars for sale made with React.js, MongoDB, Express.js and Node.js to make it a fullstack web app",
    url: "http://auto-mart.vercel.app/",
  },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="main-con">
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

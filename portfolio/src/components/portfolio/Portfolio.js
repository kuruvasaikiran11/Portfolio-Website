import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/KafenePharma.png";
import IMG2 from "../../assets/MusicPlayer.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/shoplane.png";
import IMG5 from "../../assets/TicTacToe.png";
import IMG6 from "../../assets/RockPapersScissors.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "KafenePharma Admin Panel",
    github: "https://github.com/kuruvasaikiran11/KafenePharma.git",
    demo: "https://kuruvasaikiran11.github.io/KafenePharma//",
    brief: "https://github.com/kuruvasaikiran11/KafenePharma/blob/main/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "Music Player App",
    github: "https://github.com/kuruvasaikiran11/Music_Player.git",
    demo: "https://kuruvasaikiran11.github.io/Music_Player/",
    brief: "https://github.com/kuruvasaikiran11/Music_Player/blob/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "JavaScript | HTML | CSS Calculator",
    github: "https://github.com/kuruvasaikiran11/Calculator.git",
    demo: "https://kuruvasaikiran11.github.io/Calculator/",
    brief:
      "https://github.com/kuruvasaikiran11/Calculator/blob/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "Shoplane Shopping App",
    github: "https://github.com/kuruvasaikiran11/Shoplane_ShoppingApp.git",
    demo: "https://kuruvasaikiran11.github.io/Shoplane_ShoppingApp/",
    brief: "https://github.com/kuruvasaikiran11/Shoplane_ShoppingApp/blob/main/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "JS | HTML | CSS TicTacToe Game",
    github: "https://github.com/kuruvasaikiran11/TicTacToe.git",
    demo: "https://kuruvasaikiran11.github.io/TicTacToe/",
    brief: "https://github.com/kuruvasaikiran11/TicTacToe/blob/main/README.md",
  },
  {
    id: 6,
    image: IMG6,
    title: "JS | HTML | CSS RockPapersScissors",
    github: "https://github.com/kuruvasaikiran11/RockPapersScissors.git",
    demo: "https://kuruvasaikiran11.github.io/RockPapersScissors/",
    brief: "https://github.com/kuruvasaikiran11/RockPapersScissors/edit/main/README.md",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} className="project-img" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import '../Portfolio.css';
import StarWarsQuizImage from '../Star Wars Quiz Screen Shot.png';
import ToDoImage from '../TO-Do App Screen Shot.png';
import MapImage from '../JS API Map App.png'
import CounterImage from '../Counter App Example Image.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Star Wars Quiz Game',
      description: 'A Star Wars quiz game using HTML, CSS, & Javascript.',
      image: StarWarsQuizImage,
      link: 'https://foxshane997.github.io/StarWarsQuiz.github.io/' 
    },
    {
      id: 2,
      title: 'To-Do Application',
      description: 'A To-Do Application built using React.',
      image: ToDoImage,
      link: 'https://foxshane997.github.io/SF-To-Do-List.github.io/' 
    },
    {
      id: 3,
      title: 'Counter app in React',
      description: 'A counter app made with React.',
      image: CounterImage,
      link: 'https://foxshane997.github.io/Counter/'
    },
    {
      id: 4,
      title: 'JavaScript API Map',
      description: 'Using API fetch to render a Map.',
      image: MapImage,
      link: 'https://foxshane997.github.io/Map.github.io/'
    },
    // {
    //   id: 5,
    //   title: 'Project Five',
    //   description: 'Description for project five.',
    //   image: 'https://via.placeholder.com/150',
    //   link: 'https://github.com/your-username/project-five' 
    // },
    // {
    //   id: 6,
    //   title: 'Project Six',
    //   description: 'Description for project six.',
    //   image: 'https://via.placeholder.com/150',
    //   link: 'https://github.com/your-username/project-six' 
    // }
  ];

  return (
    <div className="portfolio">
      {projects.map(project => (
        <a href={project.link} className="card" key={project.id} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </a>
      ))}
    </div>
  );
}

export default Portfolio;

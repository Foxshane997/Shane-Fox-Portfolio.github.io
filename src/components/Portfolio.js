import React from 'react';
import '../assets/styles/Portfolio.css';
import StarWarsQuizImage from '../assets/images/Star Wars Quiz Screen Shot.png';
import ToDoImage from '../assets/images/TO-Do App Screen Shot.png';
import MapImage from '../assets/images/JS API Map App.png'
import CounterImage from '../assets/images/Counter App Example Image.png'
import MoleImage from '../assets/images/React-a-mole screenshot.png'
import GalleryImage from '../assets/images/Art Gallery Screen Shot.png'
import MernApp from '../assets/images/MERN Recipe Application.png'
import TimerImage from '../assets/images/Timer Image.png'

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
    {
      id: 5,
      title: 'React-A-Mole',
      description: 'React Wack-A-Mole.',
      image: MoleImage,
      link: 'https://foxshane997.github.io/React-A-Mole/' 
    },
    {
      id: 6,
      title: 'React-Redux Art Gallery',
      description: 'A art gallery using React & Redux.',
      image: GalleryImage,
      link: 'https://foxshane997.github.io/RR-Art-Gallery/' 
    },
    {
      id: 7,
      title: 'MERN Fullstack Recipe',
      description: 'Fullstack recipe application using MealDealAPI.',
      image: MernApp,
      link: 'https://recipez-ijuh.onrender.com/'
    },
    {
      id: 8,
      title: 'Timer React Application',
      description: 'Timer App in React',
      image: TimerImage,
      link: 'https://foxshane997.github.io/Timer-Application/'
    },
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

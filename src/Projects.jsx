import React from 'react';
import './App.css';

const LinkCart = () => {
  const links = [
    { text: 'ToDo App (React JS)', url: 'https:/todo-app-react-vikash.netlify.app/' },
    { text: 'Movie Search App (JS API)', url: 'https://movie-search-app-vikash.netlify.app/' },
    { text: 'Real time weather data app (HTML, CSS & JS)', url: 'https://vikashyadaw.github.io/weatherApp/' },
    { text: 'Quiz App in (React JS)', url: 'https://quiz-app-react-vikash.netlify.app/' },
    { text: 'Simple Multi Pages Wbsite in (React JS)', url: 'https://react-simple-website00.netlify.app/' },
    { text: 'Calculator using (React JS) & Tailwind CSS ', url: 'https://neon-bombolone-1614e9.netlify.app/' },
    { text: 'Stop Watch Using React', url: 'https://stop-watch-vikash.netlify.app/' },
    { text: 'Random Qoutes Generator(React JS)', url: 'https://random-qoutes-generator-vikash.netlify.app/' },
    { text: 'Counter App (React JS)', url: 'https://vikash-react-counter.netlify.app/' },
    { text: 'Ecommerce website UI (HTML & CSS)', url: 'https://superb-tiramisu-a0f33f.netlify.app/' },
    { text: 'Educational website UI (Bootstrap)', url: 'https://pharmatechsolution.netlify.app/' },
    { text: 'A Company website UI (Bootstrap)', url: 'https://sarthisolution.netlify.app/' },
    {  text: 'My Portfolio website (HTML, CSS & JS)', url: 'https://vikashyadav.netlify.app/' },
];

  return (
    <div className="link-cart">
      <h2>My All Beginner Project</h2>
      <h5>Click on text and open live project</h5>
      <hr />
      <div className="cart-content">
        {links.map((link) => (
          <div className="link-item">
            <a target='blank' href={link.url}>{link.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkCart;

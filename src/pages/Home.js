import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../public/logo192.png';

const Home = () => {
  const content = [
    {
      title: 'Filtering',
      link: '/filter',
    },

    {
      title: 'Pagination',
      link: '/pagination',
    },
    {
      title: 'Search Input',
      link: '/search',
    },
    {
      title: 'Table Sorting',
      link: '/table',
    },
    {
      title: 'Text Editor',
      link: '/text-editor',
    },
    {
      title: 'Update Sorting',
      link: '/update',
    },
    {
      title: 'Carousel',
      link: '/carousel',
    },
    {
      title: 'Tabs',
      link: '/tab',
    },

    {
      title: 'Accordion',
      link: '/accordion',
    },
    {
      title: 'Input Nmuber',
      link: '/input-number',
    },
    {
      title: 'Navbar',
      link: '/navbar',
    },

    {
      title: 'Drawer',
      link: '/drawer',
    },
    {
      title: 'Form',
      link: '/form',
    },
    {
      title: 'Modal',
      link: '/modal',
    },
    {
      title: 'Card Completed',
      link: '/card',
    },
    {
      title: 'Batu kertas Gunting',
      link: '/suit',
    },
  ];

  return (
    <div>
      <h1>All Project using ReactJs</h1>
      <div className="flex">
        {content.map((data, index) => (
          <div key={index} className="Card">
            <p>{data.title}</p>
            {/* <img src={logo} alt="logo"></img> */}
            <Link to={data.link}>
              <button>More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

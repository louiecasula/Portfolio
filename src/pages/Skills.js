import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Skills.css';

export default function Skills() {
  return (
    <div className="skills">
      <ImageList 
        sx={{ 
          width: '100%', 
          height: '30%', 
          display: 'flexbox', 
          padding: '2%',
          background: '#FFFFFF3F',
          borderRadius: '10px',
        }} 
        cols={itemData.length} gap={20}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.img} sx={{ '--i': index }}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    title: 'Java',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
    title: 'JavaScript',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    title: 'Python',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    title: 'Spring',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    title: 'React',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg',
    title: 'HTML',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg',
    title: 'CSS',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg',
    title: 'Postgres',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    title: 'Git',
  },
];

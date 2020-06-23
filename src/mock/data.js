import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Keneth Ade | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my profilo', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Keneth Ade',
  subtitle: 'I\'m the Web Developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a Self-Taught Developer from the Philippines. 
  I have a Bachelor degree in Philosophy, and after graduating I decided to fully commit myself to Web Development. `,
  paragraphTwo: `I have always been passionate about Technology. I love learning, and I am always ready to improve and work with others.`,
  paragraphThree: `My background has given me strong problem solving skills and good critical thinking, 
  in both technical and non-technical matters.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.png',
    title: 'Robo Friends React',
    info: 'A robofriends React.js app',
    info2: '',
    url: 'https://kenjiwebdev.github.io/robofriends/',
    repo: 'https://github.com/kenjiwebdev/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project2.png',
    title: 'Face Recognition Brain',
    info: 'Face Recognition React App',
    info2: '',
    url: 'https://kenjiwebdev.github.io/face-recognition-brain/',
    repo: 'https://github.com/kenjiwebdev/face-recognition-brain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project3.png',
    title: 'Pomodoro Overload',
    info: 'A customizable Pomodoro web app. Made by using React.js.',
    info2: '',
    url: 'https://kenjiwebdev.github.io/pomodoro-overload/',
    repo: 'https://github.com/kenjiwebdev/pomodoro-overload', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kenjiwebdev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/keneth_ade',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/keneth-ade-079461153/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/kenjiwebdev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

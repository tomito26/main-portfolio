import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thomas Khaemba', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Thomas Khaemba',
  subtitle: 'I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a passionate and curious  fullstack web developer.I enjoy building projects that are innovative and change the lives of others',
  paragraphTwo:
    'I am fluent in javaScript and some of its framework such as Angular,React,Jquery in Python and some of its frameworks such as django and flask and ofcourse HTML5 CSS3 and bootstrap4',
  paragraphThree:
    'My hobbies include riding bicycles,road trips with friends and family,watching movies and swimming',
  resume:
    'https://docs.google.com/document/d/1_uNRQuoA6GZsXl7aDAX1SBrLFbxlx8x6iQpmy_3mBPA/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'neighborhood.jpg',
    title: 'Neighborhood',
    info:
      'This a website where users get notified and updated of any upcomings within their neighborhood such as businesses ,get assistance from the neighborhood management and also interact with other users on the same platfom',
    info2: 'The app is made using Django framework , HTML5 ,CSS3 ,Bootstrap4,Postgresql',
    url: 'https://neigborhoodwatch.herokuapp.com/',
    repo: 'https://github.com/tomito26/neighborhood.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'news.png',
    title: 'News App',
    info:
      'This a website that gives the user the latest news updates from various news sources around the world',
    info2: 'The app is made using News Api,Flask,HTML5,CSS3,Bootstrap4',
    url: 'https://newsapp97.herokuapp.com/',
    repo: 'https://github.com/tomito26/NewsSite.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gitsearch.png',
    title: 'GitSearch',
    info:
      'This a web application that enables the users to search for github repositories and github accounts',
    info2: 'The app was made using Angular,Typescript,HTML5,CSS3,Bootstrap,Github Api',
    url: 'https://tomito26.github.io/GitSearch/',
    repo: 'https://github.com/tomito26/GitSearch.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'delani.jpg',
    title: 'Delani Studio',
    info:
      'This a website of a business that offers software solutions such as making of websites,making of android and ios apllications',
    info2: 'The application was made using HTML5,CSS3 and JavaScript',
    url: 'https://tomito26.github.io/delano-studio/',
    repo: 'https://github.com/tomito26/delano-studio.git',
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'Blog App',
    info:
      'This is a blog app where users can share their art of writing, update their profile once they register and also comment on other users blogs',
    info2: 'The app was made using Flask,HTML5,CSS3,Bootstrap4,Postgresql',
    url: 'https://blogapp97.herokuapp.com/',
    repo: 'https://github.com/tomito26/BloggApp.git',
  },
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'Todo list app',
    info:
      'This is an application where users can add their daily activities,update and delete them once done',
    info2: 'The application was made using React Js,CSS3,JSX',
    url: 'https://tomito26.github.io/todolist/',
    repo: 'https://github.com/tomito26/todolist.git',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tommybwah@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/iamjarvis97',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://www.instagram.com/iamjarvis26/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thomas-ingasia-93a87a169/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tomito26',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

import './App.css';
import Header from './Components/Header/Header';
import styles from './App.module.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Post from './Components/Post/Post';

interface Author{
  name: string;
  role:string;
  avatarUrl:string;
}

interface PostProps{
  id:number;
  author: Author;
  publishedAt:Date;
  content:Content[];
}

interface Content{
  type:'paragraph' | 'link';
  content:string;
}

const posts:PostProps[] = [
  {
    id:1,
    author:{
      avatarUrl:'https://portfolio-8ye8.vercel.app/img/09c62903beeba336dc9da76eb5c9a107.gif',
      name:'Giovani Marchezini',
      role:'Web Developer'
    },
    content:
    [
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do   projeto é DoctorCare 🚀'},
      {type:'link', content:'👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-16 21:21:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://images.unsplash.com/photo-1516008684536-605574d804ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
      name:'Alyne de Oliveira',
      role:'Tatuadora'
    },
    content:
    [
      {type:'paragraph', content:'Fala galeraa 👋'},
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      {type:'link', content:'👉 jane.design/tattoo'},
    ],
    publishedAt: new Date('2023-08-16 20:00:00'),
  },
];

function App() { 
  return (
    <>
     <Header/>
     <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      {
        posts.map(post =>{
        return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            /> 
          ) 
        })
      }

      </main>
     </div>
    </>
  );
}

export default App;

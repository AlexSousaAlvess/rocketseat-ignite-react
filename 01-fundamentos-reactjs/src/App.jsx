import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './components/App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/8229999?v=4.png",
      name: "Alex Sousa",
      role: "Dev"
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/8229999?v=4.png",
      name: "Maria Sousa",
      role: "Dev"
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>

  )
}

import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './components/App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author='Alex'
            content='Spring com React'
          />
          <Post 
            author='João'
            content='Spring com docker'
          />
          <Post 
            author='João'
            content='Spring com docker'
          />
        </main>
      </div>

    </div>

  )
}

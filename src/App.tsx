import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import "./global.css"
import styles from "./App.module.css"

import { PostProps } from "./components/Post"

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/78274293?v=4",
      name: "Mateus Moura",
      role: "Analista de Sistemas"
    },
    content: [
      { type: "paragraph", content: "E ai pessoal !" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLR Return" },
      { type: "link", content: "link.qualquer/aqui" },
    ],
    publishedAt: new Date("2022-05-03 20:08:30")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "E ai pessoal !" },
      { type: "paragraph", content: "Segue um repositório mega da hora !" },
      { type: "link", content: "link.qualquer/aqui2" },
    ],
    publishedAt: new Date("2022-05-10 19:02:35")
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
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

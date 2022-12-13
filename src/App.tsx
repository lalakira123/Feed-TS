import { Header } from './components/Header/Header'
import { Aside } from './components/Aside/Aside'
import { Post } from './components/Post/Post'

import style from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Laerte Akira',
      role: 'Full Stack Developer',
      imageUrl: 'https://github.com/lalakira123.png'
    },
    publishedAt: new Date('2022-12-12 15:17:30'),
    contents: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
  {
    id: 2,
    author: {
      name: 'Brian Sato',
      role: 'Front End Developer',
      imageUrl: 'https://github.com/Tsuyaaa.png'
    },
    publishedAt: new Date('2022-12-13 10:14:30'),
    contents: [
      { type: 'paragraph', content: 'Fala pessoal 👋'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👉 '},
      { type: 'link', content: 'devonlane.design'}
    ]
  }
];

function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Aside/>
        <main>
          {posts.map( post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  publishedAt={post.publishedAt}
                  contents={post.contents}
                />
              ) 
            })}
        </main>
      </div>
    </>
  )
}

export default App

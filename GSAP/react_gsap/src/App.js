import './App.css';
import { React, useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

function App() {
  const [toggle, setToggle] = useState(false)

  const changeState= () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  const container = useRef(null)
  const title = useRef(null)
  const resume = useRef(null)

  console.log(container)

  useEffect(() => {
    console.log(container)
    gsap.from(container.current, {
      duration: 4,
      y: 500,
      ease: "none"
    })
    gsap.from(resume.current, {
      duration: 4,
      y: 500,
      opacity: 0.1,
      ease: "none"
    });
  }, [])

  useEffect(() => {
    toggle ? gsap.to(title.current, {
      duration: 1,
      scale: 0.7
    }) : gsap.to(title.current, {
      duration: 1,
      scale: 1
    })
  }, [toggle])

  return (
    <div className="app">
      <div className="container" ref={container} onClick={changeState}>
        <h3 ref={title}>Star Wars</h3>
        <p>The Clone Wars</p>
      </div>


      <div className="resume" ref={resume}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur facilis, hic voluptatibus quia deleniti, voluptate rerum aspernatur obcaecati ea pariatur assumenda aperiam dolores incidunt odit. Aperiam iusto maiores aspernatur?
        Saepe nisi soluta ipsum quasi excepturi facere fugit cum iste aut? Commodi autem doloribus blanditiis velit, impedit iure distinctio expedita aliquid iste quia ut cumque praesentium magni saepe? Rem, explicabo.
        Modi quae sapiente doloribus dolorem praesentium. Magni, molestias quod, doloribus animi repellendus perferendis nobis commodi corrupti perspiciatis numquam quibusdam iste, sapiente provident quos nihil quisquam qui. Laborum in assumenda provident?
        Veniam, illo! In, et. Libero nisi architecto impedit, sint fugiat at reprehenderit minima odio reiciendis eum earum cum quasi ratione ea incidunt, aspernatur consequuntur quas quis explicabo laudantium veniam possimus?
        Quia, cum corporis error ex numquam suscipit delectus blanditiis saepe officiis iusto quasi deleniti cupiditate. Maxime aliquid illo recusandae voluptatum omnis id. Error nihil ratione quos perspiciatis corporis, animi libero?
        Quisquam quasi nesciunt numquam at eveniet, ipsa facere culpa! Officiis harum nostrum corrupti tenetur aut natus molestias perferendis doloremque amet quibusdam magni, aperiam cumque, odit numquam, beatae quidem enim perspiciatis.
        Accusantium, officia! Soluta provident obcaecati nisi eum quos dolor libero deleniti aliquid ipsa repellendus assumenda porro animi rerum dolore odio earum corrupti, nulla nesciunt labore ab doloribus iste modi voluptatem!
        Eius accusantium earum dolore nulla voluptatum quas pariatur eligendi perferendis, odio sunt accusamus, laboriosam totam, est voluptatem iusto iure. Rerum molestiae sed eveniet, repellat ex ratione dolores impedit placeat molestias.
        Illo quas voluptatem fugit libero eius, saepe minima magni velit neque placeat, magnam dolorum voluptatibus eum eveniet voluptates et cupiditate. Quo rerum animi sed architecto rem optio qui mollitia eos!
        Maiores omnis cum ipsam, voluptate fugiat libero voluptatem aliquid magni ipsum tenetur mollitia nostrum nobis impedit repellat atque officiis qui. Cumque nam recusandae sint. Natus obcaecati vero in veritatis necessitatibus?
        Commodi quam velit accusantium nostrum. Iure fugit officiis facere, facilis maxime corrupti quos dolore? Distinctio culpa, eos tempora eaque incidunt tempore voluptates fuga facilis inventore soluta ipsam iste vel est.
        Nisi ipsa reprehenderit enim cumque, minus voluptas, officiis iusto quis repellat esse iste, pariatur sequi laborum. Laboriosam tempore natus molestiae ab aliquam cupiditate cumque, magnam cum molestias quidem pariatur numquam.
        Officiis ut sunt nam, eligendi ab numquam dolorem rem unde qui incidunt temporibus! Minima facere corrupti voluptatibus qui suscipit harum beatae molestias odit soluta, ex odio cupiditate temporibus incidunt molestiae.
        Iure, eaque labore laudantium ullam aperiam eum vitae adipisci tempora iusto perspiciatis dolor ut tempore, consequatur unde quibusdam, velit quam quasi sapiente hic! Ratione nisi, ducimus aut molestiae illum fuga.
        Necessitatibus, fuga porro modi delectus magni soluta tempora similique iure minus voluptates repudiandae, quisquam dolorem non ipsam. Eos minus eligendi, corrupti modi laudantium ipsum facilis? Doloremque similique at voluptatum animi?</p>
      </div>
    </div>
  );
}

export default App;

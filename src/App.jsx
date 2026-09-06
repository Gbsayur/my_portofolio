import { useEffect, useState } from 'react'
import './App.css'
import profilePhoto from './assets/orangganteng.jpg'
import heroImage from './assets/webmakanan.png'
import projectImage from './assets/project1.png'

const typedWords = ['React.js', 'frontend', 'backend', 'website cepat']

const skills = [
  { name: 'JavaScript', icon: 'bi-filetype-js', tone: 'yellow' },
  { name: 'HTML', icon: 'bi-filetype-html', tone: 'orange' },
  { name: 'CSS', icon: 'bi-filetype-css', tone: 'blue' },
  { name: 'React.js', icon: 'bi-atom', tone: 'cyan' },
  { name: 'Vite', icon: 'bi-lightning-charge-fill', tone: 'purple' },
  { name: 'Node.js', icon: 'bi-node-plus', tone: 'green' },
  { name: 'Express.js', icon: 'bi-server', tone: 'gray' },
  { name: 'PHP', icon: 'bi-filetype-php', tone: 'indigo' },
]

const projects = [
  {
    title: 'Website Sekolah',
    description: 'Landing page sekolah yang rapi, cepat dibuka, dan nyaman digunakan di layar kecil.',
    image: projectImage,
    link: 'https://website-pengunjung.vercel.app/',
    tags: ['React', 'CSS', 'Responsive'],
  },
  {
    title: 'Web UMKM Makanan',
    description: 'Profil web modern dengan fokus pada performa, aksesibilitas, dan tampilan bersih.',
    image: heroImage,
    link: 'https://umkm-makanan-ten.vercel.app/',
    tags: ['UI', 'Animation', 'Mobile'],
  },
]

function App() {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const runTyping = () => {
      const word = typedWords[wordIndex]
      setTypedText(word.slice(0, charIndex))

      if (!deleting && charIndex < word.length) {
        charIndex += 1
        timer = setTimeout(runTyping, 85)
        return
      }

      if (!deleting && charIndex === word.length) {
        deleting = true
        timer = setTimeout(runTyping, 1100)
        return
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1
        timer = setTimeout(runTyping, 42)
        return
      }

      deleting = false
      wordIndex = (wordIndex + 1) % typedWords.length
      timer = setTimeout(runTyping, 260)
    }

    runTyping()

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kembali ke beranda">Abdi.</a>
        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#about">About</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <span className="eyebrow">Web Developer Student</span>
            <h1>Abdi Rivai</h1>
            <p className="typing-line">
              Saya membangun <span>{typedText}</span><i aria-hidden="true" /> yang modern, cepat, dan nyaman di mobile.
            </p>
            <p>
              Fokus saya bukan sekadar ramai efek, tapi tampilan yang punya karakter, rapi, responsif, dan tetap ringan ketika dibuka di HP.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Lihat Project</a>
              <a className="button ghost" href="#skills">Skill Saya</a>
            </div>
            <div className="hero-badges" aria-label="Highlight">
              <span>Clean UI</span>
              <span>Fast Load</span>
              <span>Mobile First</span>
            </div>
          </div>

          <div className="hero-visual reveal delay-1" aria-label="Foto profil">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-card">
              <div className="photo-frame">
                <img src={profilePhoto} alt="Abdi Rivai" />
              </div>
              <div className="status-card floating-card">
                <span>Available</span>
                <strong>Open for learning & projects</strong>
              </div>
              <div className="mini-card floating-card slow-card">
                <strong>8</strong>
                <span>Core skills</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading reveal">
            <span className="eyebrow">About</span>
            <h2>Tidak banyak gimmick, fokus ke hasil yang terasa profesional.</h2>
          </div>
          <div className="about-grid">
            <p className="reveal delay-1">
              Saya siswa YPIPPI yang tertarik pada web development. Saat ini saya terus memperkuat dasar HTML, CSS, JavaScript, React, backend Node.js, Express, dan PHP melalui project nyata.
            </p>
            <p className="reveal delay-2">
              Tujuan saya adalah membuat website yang responsif, ringan, mudah dipahami, dan punya visual yang kuat tanpa efek berlebihan.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal">
            <span className="eyebrow">Skills</span>
            <h2>Skill yang saya kuasai.</h2>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <article className={`skill-card reveal ${skill.tone}`} style={{ '--delay': `${index * 55}ms` }} key={skill.name}>
                <span className="skill-icon"><i className={`bi ${skill.icon}`} aria-hidden="true" /></span>
                <strong>{skill.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <span className="eyebrow">Projects</span>
            <h2>Project pilihan.</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>Buka project</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="reveal">
            <span className="eyebrow">Contact</span>
            <h2>Mau diskusi project atau belajar bareng?</h2>
            <p>Kirim pesan lewat email atau hubungi saya langsung untuk kolaborasi kecil, tugas sekolah, atau project web.</p>
          </div>
          <a className="button primary reveal delay-1" href="mailto:abdirivai@example.com">abdirivai@example.com</a>
        </section>
      </main>
    </div>
  )
}

export default App

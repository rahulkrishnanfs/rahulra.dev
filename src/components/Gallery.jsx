import { useState, useEffect, useCallback } from 'react'
import { Container } from 'react-bootstrap'
import Reveal from './Reveal'

const modules = import.meta.glob('../assets/gallery/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const captions = [
  'From Prompt to Persistence — Daventry Coding Club',
  'Elevate Northampton AI COP — MongoDB Developer Day',
  'AWS GenAI & Data Day, London',
  'Cursor AI Hackathon — featured by NNBN',
  'TEDx Northampton',
  'MongoDB Community Champions',
  'MongoDB.local — with the community',
  'Civo Navigate London',
  'Google Cloud Security event',
  'Google & Firebase community event',
  'Speaking at The Charles Bradlaugh, Northampton',
  'Community dinner & networking',
  'Community meetup & networking',
  'Tech community social',
  'Recognised at Barclaycard',
  'Kubernetes Meetup, Chennai',
  'Hosting the Cursor Northampton Hackathon',
  'Speaking at COEP FOSSMeet ’18, Pune',
  'On stage at an AWS community event',
  'OpenEBS talk — cloud-native storage',
  'Cursor Hackathon featured in the Northampton Chronicle',
  'Docker 101 workshop — Innovia 2k18',
  'Introduction to Kubernetes — COEP FOSSMeet ’21',
  'Cursor Hackathon featured in the Northamptonshire Telegraph',
  'Cursor Hackathon at the University of Northampton',
  'The Cursor Northampton volunteer team',
  'Celebrating the winners — Cursor Hackathon',
  'Memory Engineering for AI Agents — main stage',
  'Speaking alongside LangChain at MongoDB.local',
  'Memory Engineering talk — Daventry Coding Club',
  'Context Engineering & tool calling — live demo',
  'With the community at MongoDB.local',
]

const images = Object.keys(modules)
  .sort()
  .map((key, i) => ({ src: modules[key], caption: captions[i] || '' }))

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const open = index !== null

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    (e) => {
      e?.stopPropagation()
      setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
    },
    [],
  )
  const next = useCallback(
    (e) => {
      e?.stopPropagation()
      setIndex((i) => (i === null ? i : (i + 1) % images.length))
    },
    [],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close, prev, next])

  return (
    <section id="gallery" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">In the field</p>
          <h2 className="section-title">Gallery</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            Moments from talks, hackathons, community meetups and press features.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <Reveal
              as="button"
              key={img.src}
              className="gallery-item"
              delay={(i % 4) * 60}
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${img.caption}`}
            >
              <img src={img.src} alt={img.caption} loading="lazy" />
              <span className="gallery-overlay">
                <span className="gallery-caption">{img.caption}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </Container>

      {open && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>
          <button className="lightbox-nav prev" onClick={prev} aria-label="Previous">
            <i className="bi bi-chevron-left"></i>
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={images[index].src} alt={images[index].caption} />
            <figcaption>{images[index].caption}</figcaption>
          </figure>
          <button className="lightbox-nav next" onClick={next} aria-label="Next">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  )
}

import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { speaking } from '../data'

export default function Speaking() {
  const featured = speaking.find((s) => s.featured)
  const rest = speaking.filter((s) => !s.featured)

  return (
    <section id="speaking" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">On stage</p>
          <h2 className="section-title">Speaking Experience</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            Talks and sessions on GenAI, DevOps, cloud-native and open source — from local meetups to international conferences.
          </p>
        </Reveal>

        {featured && (
          <Reveal className="featured-talk mb-4">
            <Row className="g-4 align-items-center">
              <Col lg={7}>
                <span className="talk-meta mb-3 d-inline-block">
                  <i className="bi bi-star-fill me-1"></i>Featured Talk · {featured.meta}
                </span>
                <h3 className="h4 fw-bold mb-1">{featured.title}</h3>
                <p className="text-muted-2 mb-2" style={{ fontSize: '0.9rem' }}>
                  <i className="bi bi-geo-alt me-1"></i>{featured.event}
                </p>
                <p className="text-muted-2" style={{ lineHeight: 1.7 }}>
                  {featured.summary}
                </p>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {featured.recording && (
                    <a href={featured.recording} target="_blank" rel="noreferrer" className="btn btn-glow btn-sm">
                      <i className="bi bi-play-circle-fill me-2"></i>Watch the talk
                    </a>
                  )}
                  {featured.link && (
                    <a href={featured.link} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
                      <i className="bi bi-calendar-event me-2"></i>View agenda
                    </a>
                  )}
                </div>
              </Col>
              <Col lg={5}>
                <a href={featured.recording || featured.link} target="_blank" rel="noreferrer" className="featured-thumb" aria-label="Watch the talk on YouTube">
                  <img
                    src="https://img.youtube.com/vi/GIhtQaxhwAc/hqdefault.jpg"
                    alt={featured.title}
                    className="featured-thumb-img"
                    loading="lazy"
                  />
                  <span className="play-btn">
                    <i className="bi bi-play-fill"></i>
                  </span>
                </a>
                {featured.gallery && (
                  <div className="d-flex gap-2 mt-2">
                    {featured.gallery.map((g) => (
                      <a key={g.src} href={g.src} target="_blank" rel="noreferrer" className="talk-photo">
                        <img src={g.src} alt={g.alt} loading="lazy" />
                      </a>
                    ))}
                  </div>
                )}
              </Col>
            </Row>
          </Reveal>
        )}

        <Row className="g-4">
          {rest.map((s, i) => {
            const inner = (
              <>
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="card-icon mb-0">
                    <i className="bi bi-mic-fill"></i>
                  </span>
                  <span className="talk-meta">{s.meta}</span>
                </div>
                <h3 className="h6 fw-bold mb-1">{s.event}</h3>
                <p className="text-muted-2 mb-2" style={{ fontSize: '0.9rem' }}>
                  <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.7rem' }}></i>
                  {s.title}
                </p>
                {s.photo && (
                  <a href={s.photo} target="_blank" rel="noreferrer" className="talk-photo">
                    <img src={s.photo} alt={`${s.event} — ${s.title}`} loading="lazy" />
                  </a>
                )}
              </>
            )
            return (
              <Col md={6} lg={4} key={s.event}>
                <Reveal className="talk-card" delay={(i % 3) * 80}>
                  {inner}
                </Reveal>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { community } from '../data'

export default function Community() {
  return (
    <section id="community" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">Building in public</p>
          <h2 className="section-title">Community & Media</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 640 }}>
            Organizing AI hackathons and meetups across the UK — and sharing the journey on stage, on air and on the mic.
          </p>
        </Reveal>
        <Row className="g-4">
          {community.map((c, i) => (
            <Col md={6} key={c.title}>
              <Reveal className="glass-card h-100" delay={(i % 2) * 80}>
                {c.thumb ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="featured-thumb community-thumb mb-3"
                    aria-label={`Watch: ${c.title}`}
                  >
                    <img src={c.thumb} alt={c.title} className="featured-thumb-img" loading="lazy" />
                    <span className="play-btn">
                      <i className="bi bi-play-fill"></i>
                    </span>
                  </a>
                ) : (
                  <span className="card-icon">
                    <i className={`bi ${c.icon}`}></i>
                  </span>
                )}
                <p className="community-type">{c.type}</p>
                <h3 className="h5 fw-bold">{c.title}</h3>
                <p className="text-muted-2" style={{ fontSize: '0.94rem' }}>
                  {c.text}
                </p>
                <a
                  className="recognition-link"
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.linkLabel}
                  <i className="bi bi-arrow-up-right ms-1"></i>
                </a>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { opensource } from '../data'

export default function OpenSource() {
  return (
    <section id="opensource" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">Giving back</p>
          <h2 className="section-title">Open Source Contributions</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            Building and leading communities, and contributing to the open-source projects I rely on.
          </p>
        </Reveal>
        <Row className="g-4">
          {opensource.map((o, i) => (
            <Col md={6} lg={4} key={o.title}>
              <Reveal className="glass-card" delay={(i % 3) * 80}>
                {o.avatar ? (
                  <span className="os-avatar">
                    <img src={o.avatar} alt={`${o.title} logo`} loading="lazy" />
                  </span>
                ) : o.logo ? (
                  <span className="os-logo">
                    <img src={o.logo} alt={`${o.title} logo`} loading="lazy" />
                  </span>
                ) : (
                  <span className="card-icon">
                    <i className={`bi ${o.icon}`}></i>
                  </span>
                )}
                <h3 className="h5 fw-bold">{o.title}</h3>
                <p className="text-muted-2" style={{ fontSize: '0.94rem' }}>
                  {o.text}
                </p>
                {o.link && (
                  <a
                    className="recognition-link"
                    href={o.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {o.linkLabel}
                    <i className="bi bi-arrow-up-right ms-1"></i>
                  </a>
                )}
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

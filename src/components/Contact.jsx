import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Container>
        <Reveal className="contact-cta text-center">
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-title mb-3">
            Let’s build something <span className="gradient-text">resilient</span>.
          </h2>
          <p className="text-muted-2 mx-auto mb-3" style={{ maxWidth: 560 }}>
            Whether it’s platform engineering, DevOps, GenAI or a speaking opportunity —
            I’d love to hear from you.
          </p>
          <p className="availability-badge mb-4">
            <i className="bi bi-mortarboard-fill me-2"></i>
            Open to collaborate on <strong>GenAI training &amp; workshops</strong>
          </p>
          <div className="contact-actions mb-4">
            <a href={`mailto:${profile.email}`} className="btn btn-glow">
              <i className="bi bi-envelope-fill me-2"></i>{profile.email}
            </a>
            <a href={profile.calcom} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-coffee">
              <i className="bi bi-calendar-check-fill me-2"></i>Book time with me
            </a>
          </div>
          <Row className="justify-content-center mt-2">
            <Col xs="auto">
              <div className="social-row justify-content-center">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </section>
  )
}

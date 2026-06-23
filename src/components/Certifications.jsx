import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            Industry-recognised certifications across Kubernetes, cloud-native, security and container platforms.
          </p>
        </Reveal>
        <Row className="g-4">
          {certifications.map((c, i) => (
            <Col md={6} lg={4} key={c.name}>
              <Reveal className="cert-card" delay={(i % 3) * 80}>
                <span className="cert-abbr">{c.abbr}</span>
                <div>
                  <h3 className="h6 fw-bold mb-1">{c.name}</h3>
                  <p className="text-muted-2 mb-0" style={{ fontSize: '0.88rem' }}>
                    <i className="bi bi-patch-check-fill me-1"></i>{c.issuer}
                  </p>
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

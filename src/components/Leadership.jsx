import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { leadership } from '../data'

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">Beyond the code</p>
          <h2 className="section-title">Leadership &amp; Community</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            Roles where I lead, mentor and give back to the open-source and developer communities.
          </p>
        </Reveal>
        <Row className="g-4">
          {leadership.map((l, i) => (
            <Col md={6} lg={4} key={l.role}>
              <Reveal className="lead-card" delay={(i % 3) * 80}>
                <span className="lead-icon">
                  <i className={`bi ${l.icon}`}></i>
                </span>
                <div>
                  <h3 className="h6 fw-bold mb-1">{l.role}</h3>
                  <p className="text-muted-2 mb-0" style={{ fontSize: '0.88rem' }}>
                    {l.org}
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

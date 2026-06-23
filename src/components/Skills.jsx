import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">Toolbox</p>
          <h2 className="section-title">Skills &amp; Stack</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            The languages, platforms and tools I reach for to ship reliable, automated systems.
          </p>
        </Reveal>
        <Row className="g-4">
          {skills.map((group, i) => (
            <Col md={6} lg={4} key={group.category}>
              <Reveal className="glass-card" delay={(i % 3) * 70}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="card-icon mb-0" style={{ width: 42, height: 42, fontSize: '1.1rem' }}>
                    <i className={`bi ${group.icon}`}></i>
                  </span>
                  <h3 className="h6 fw-bold mb-0">{group.category}</h3>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

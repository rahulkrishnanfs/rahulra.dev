import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { specialities } from '../data'

export default function Specialities() {
  return (
    <section id="specialities" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">What I do</p>
          <h2 className="section-title">Specialities</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            From cloud infrastructure to intelligent agents — building and automating
            the platforms that power modern software delivery.
          </p>
        </Reveal>
        <Row className="g-4">
          {specialities.map((s, i) => (
            <Col md={6} lg={3} key={s.title}>
              <Reveal className="glass-card" delay={(i % 4) * 80}>
                <span className="card-icon">
                  <i className={`bi ${s.icon}`}></i>
                </span>
                <h3 className="h5 fw-bold">{s.title}</h3>
                <p className="text-muted-2 mb-0" style={{ fontSize: '0.94rem' }}>
                  {s.text}
                </p>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

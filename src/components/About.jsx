import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import { about, stats } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={7}>
            <Reveal>
              <p className="section-eyebrow">About me</p>
              <h2 className="section-title">
                Engineering resilient systems, <span className="gradient-text">powered by open source</span>
              </h2>
              {about.map((p, i) => (
                <p key={i} className="text-muted-2 mb-3" style={{ lineHeight: 1.8 }}>
                  {p}
                </p>
              ))}
            </Reveal>
          </Col>
          <Col lg={5}>
            <Row className="g-3">
              {stats.map((s, i) => (
                <Col xs={6} key={s.label}>
                  <Reveal className="glass-card text-center" delay={i * 80}>
                    <div className="stat-num gradient-text">{s.num}</div>
                    <div className="stat-label mt-2">{s.label}</div>
                  </Reveal>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import { Container, Row, Col } from 'react-bootstrap'
import { profile } from '../data'
import profileImg from '../assets/profile-sketch.png'

export default function Hero() {
  return (
    <header id="home" className="hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <span className="honour-badge">
              <i className="bi bi-award-fill"></i> {profile.honour} 🏅
            </span>
            <h1 className="hero-name">
              {profile.name}
            </h1>
            <p className="hero-role">
              {profile.role}
            </p>
            <p className="hero-location">
              <i className="bi bi-geo-alt-fill me-2"></i>{profile.location}
            </p>
            <div className="pill-row">
              {profile.roles.map((r) => (
                <span key={r} className="pill">{r}</span>
              ))}
            </div>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-glow">
                <i className="bi bi-send me-2"></i>Get in touch
              </a>
              <a href="#specialities" className="btn btn-outline-soft">
                Explore my work
              </a>
            </div>
            <div className="social-row">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-visual">
              <div className="hero-glow-ring"></div>
              <div className="portrait-sketch-wrap">
                <img
                  src={profileImg}
                  alt={profile.name}
                  className="portrait-sketch"
                />
                <span className="portrait-badge">
                  <i className="bi bi-award-fill"></i> OpenUK 2026 🏅
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

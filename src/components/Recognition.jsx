import { Container, Row, Col } from 'react-bootstrap'
import Reveal from './Reveal'
import honourImg from '../assets/openuk-honour-2026.png'
import cursorImg from '../assets/cursor-ambassador.png'
import openukAmbImg from '../assets/openuk-ambassador.png'

const items = [
  {
    img: honourImg,
    badge: 'Honour 🏅',
    title: 'OpenUK 2026 New Year Honours List',
    text: 'Recognised in the OpenUK 2026 Honours for contributions to open source and the UK technology community.',
    link: 'https://openuk.uk/honours/',
    linkLabel: 'View Honours List',
  },
  {
    img: openukAmbImg,
    badge: 'Ambassador',
    title: 'OpenUK Ambassador',
    text: 'Advocating for open source, open standards and open data across the UK as an official OpenUK Ambassador.',
    link: 'https://openuk.uk/profiles/rahulkrishnan-r-a/',
    linkLabel: 'View OpenUK profile',
  },
  {
    img: cursorImg,
    badge: 'Ambassador',
    title: 'Cursor Ambassador',
    text: 'Championing AI-assisted development and the Cursor community across the UK developer ecosystem.',
  },
]

export default function Recognition() {
  return (
    <section id="recognition" className="section">
      <Container>
        <Reveal className="text-center mb-5">
          <p className="section-eyebrow">Recognition</p>
          <h2 className="section-title">Honours &amp; Ambassadorships</h2>
          <p className="text-muted-2 mx-auto" style={{ maxWidth: 620 }}>
            Proud to represent and give back to the open-source and developer communities.
          </p>
        </Reveal>
        <Row className="g-4 justify-content-center">
          {items.map((item, i) => (
            <Col md={6} lg={4} key={item.title}>
              <Reveal className="recognition-card" delay={i * 100}>
                <span className="recognition-badge">{item.badge}</span>
                <div className="recognition-img-wrap">
                  <img src={item.img} alt={item.title} className="recognition-img" />
                </div>
                <h3 className="h5 fw-bold mt-3">{item.title}</h3>
                <p className="text-muted-2 mb-0" style={{ fontSize: '0.94rem' }}>
                  {item.text}
                </p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="recognition-link mt-3">
                    {item.linkLabel}
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

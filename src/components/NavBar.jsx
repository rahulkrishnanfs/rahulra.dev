import { Navbar, Nav, Container } from 'react-bootstrap'

const links = [
  { href: '#about', label: 'About' },
  { href: '#recognition', label: 'Honours' },
  { href: '#specialities', label: 'Work' },
  { href: '#certifications', label: 'Certs' },
  { href: '#speaking', label: 'Talks' },
  { href: '#leadership', label: 'Community' },
  { href: '#community', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: 'https://medium.com/@rahulkrishnanfs', label: 'Blog', external: true },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="nav-glass py-3" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="brand-mark">
          Rahulkrishnan <span className="gradient-text">R A</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav>
            {links.map((l) => (
              <Nav.Link
                key={l.href}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {l.label}
                {l.external && <i className="bi bi-arrow-up-right ms-1" style={{ fontSize: '0.7rem' }}></i>}
              </Nav.Link>
            ))}
            <a href="#contact" className="btn btn-glow btn-sm ms-lg-3 mt-2 mt-lg-0">
              Let’s talk
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

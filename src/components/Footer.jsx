import { Container } from 'react-bootstrap'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>
          <i className="bi bi-award-fill me-1"></i>
          {profile.honour} 🏅 · #openukhonours26
        </span>
      </Container>
    </footer>
  )
}

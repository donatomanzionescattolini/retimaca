import PropTypes from 'prop-types'
import { SECTIONS } from '../data/constants'

export default function ScrollIndicator({ currentSection }) {
  return (
    <div className="section-indicator d-block d-md-none" aria-hidden="false">
      {SECTIONS.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`indicator-dot ${
            currentSection === section ? "active" : ""
          }`}
          aria-label={`Go to ${section} section`}
        />
      ))}
    </div>
  )
}

ScrollIndicator.propTypes = {
  currentSection: PropTypes.string,
}
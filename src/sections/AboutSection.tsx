import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

function AboutSection() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const reveal = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.p className="section-label" {...reveal} transition={{ duration: 0.6 }}>
          {t('about.label')}
        </motion.p>

        <motion.h2 {...reveal} transition={{ duration: 0.7, delay: 0.1 }}>
          {t('about.title')}
        </motion.h2>

        <motion.p
          className="about-description"
          {...reveal}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('about.description')}
        </motion.p>
      </div>
    </section>
  )
}

export default AboutSection

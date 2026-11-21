import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

function HeroSection() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const animation = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.p className="hero-role" {...animation} transition={{ duration: 0.7, delay: 0.1 }}>
          {t('hero.role')}
        </motion.p>

        <motion.h1 {...animation} transition={{ duration: 0.8, delay: 0.25 }}>
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="hero-description"
          {...animation}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          className="hero-actions"
          {...animation}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <a href="#projects">{t('hero.projectsButton')}</a>
          <a href="#contact">{t('hero.contactButton')}</a>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

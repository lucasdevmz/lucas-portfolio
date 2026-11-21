import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const reveal = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <motion.div className="footer-content" {...reveal} transition={{ duration: 0.7 }}>
          <a href="#home" className="footer-logo">
            L<span>.</span>
          </a>

          <p>{t('footer.message')}</p>

          <div className="footer-socials">
            <motion.a
              href="https://github.com/lucasdevmz/"
              aria-label="GitHub"
              title="GitHub"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub size={20} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/lucas-manuela/"
              aria-label="LinkedIn"
              title="LinkedIn"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedinIn size={20} />
            </motion.a>

            <motion.a
              href="#home"
              aria-label={t('footer.backToTop')}
              title={t('footer.backToTop')}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp size={19} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p>
            © {new Date().getFullYear()} Lucas. {t('footer.copyright')}
          </p>

          <p>Full-Stack Developer</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

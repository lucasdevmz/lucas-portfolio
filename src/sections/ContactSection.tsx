import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

function ContactSection() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const reveal = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.p className="section-label" {...reveal} transition={{ duration: 0.6 }}>
          {t('contact.label')}
        </motion.p>

        <motion.h2 {...reveal} transition={{ duration: 0.7, delay: 0.1 }}>
          {t('contact.title')}
        </motion.h2>

        <motion.p
          className="contact-description"
          {...reveal}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t('contact.description')}
        </motion.p>

        <motion.div
          className="contact-actions"
          {...reveal}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.a
            href="mailto:lucas.m.work@outlook.com"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Mail size={18} />
            {t('contact.emailButton')}
            <ArrowUpRight size={16} />
          </motion.a>

          <motion.a
            href="https://wa.me/258875397902"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle size={18} />
            {t('contact.whatsappButton')}
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

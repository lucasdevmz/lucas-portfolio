import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { skillGroups } from '../utils/skillGroups'

function SkillsSection() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.p
          className="section-label"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {t('skills.label')}
        </motion.p>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('skills.title')}
        </motion.h2>

        <motion.p
          className="skills-description"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('skills.description')}
        </motion.p>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            staggerChildren: shouldReduceMotion ? 0 : 0.12,
          }}
        >
          {skillGroups.map((group) => (
            <motion.div
              className="skill-card"
              key={group.titleKey}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.25 } }
              }
            >
              <h3>{t(group.titleKey)}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => {
                  if ('image' in skill) {
                    return (
                      <span className="skill-item" key={skill.name}>
                        <img src={skill.image} alt="" className="skill-icon-image" />
                        {skill.name}
                      </span>
                    )
                  }

                  const Icon = skill.icon

                  return (
                    <span className="skill-item" key={skill.name}>
                      <Icon
                        size={16}
                        color={
                          ['Express', 'GitHub', 'SQL', 'REST API'].includes(skill.name)
                            ? '#64748b'
                            : 'default'
                        }
                      />
                      {skill.name}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection

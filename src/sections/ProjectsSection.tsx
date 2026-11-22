import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import overviewImage from '../assets/projects/review.png'
import apiProductsImage from '../assets/projects/ecomba-api/get-products.png'
import { apiImages, adminImages } from '../utils/apiImages'

const apiUrl = ''

type GalleryProject = 'api' | 'admin'


function ProjectsSection() {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()

  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null)

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const currentImages = selectedProject === 'api' ? apiImages : adminImages

  const openGallery = (project: GalleryProject) => {
    setSelectedProject(project)
    setSelectedImage(0)
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setSelectedImage(null)
  }

  const showPreviousImage = () => {
    setSelectedImage((current) =>
      current === null ? null : (current - 1 + currentImages.length) % currentImages.length,
    )
  }

  const showNextImage = () => {
    setSelectedImage((current) => (current === null ? null : (current + 1) % currentImages.length))
  }

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.p
          className="section-label"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {t('projects.label')}
        </motion.p>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('projects.title')}
        </motion.h2>

        <motion.p
          className="projects-description"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('projects.description')}
        </motion.p>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            staggerChildren: shouldReduceMotion ? 0 : 0.15,
          }}
        >
          <motion.article
            className="project-card"
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
          >
            <button
              type="button"
              className="project-preview project-image-preview"
              onClick={() => openGallery('api')}
              aria-label={`${t('projects.gallery.view')}: Ecomba API`}
            >
              <motion.img
                src={apiProductsImage}
                alt={t('projects.api.gallery.products')}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.4 }}
              />
              <span>{t('projects.gallery.view')}</span>
            </button>

            <div className="project-content">
              <p className="project-category">{t('projects.api.category')}</p>

              <h3>{t('projects.api.title')}</h3>

              <p className="project-description">{t('projects.api.description')}</p>

              <div className="project-technologies">
                {['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma'].map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <button
                type="button"
                className="project-gallery-button"
                onClick={() => openGallery('api')}
              >
                {t('projects.api.explore')}
              </button>

              {apiUrl && (
                <a
                  href={apiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-explore-button"
                >
                  {t('projects.api.server')}
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.article>

          <motion.article
            className="project-card"
            variants={cardVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
          >
            <button
              type="button"
              className="project-preview project-image-preview"
              onClick={() => openGallery('admin')}
              aria-label={`${t('projects.gallery.view')}: Ecomba Admin`}
            >
              <motion.img
                src={overviewImage}
                alt={t('projects.admin.gallery.overview')}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.4 }}
              />
              <span>{t('projects.gallery.view')}</span>
            </button>

            <div className="project-content">
              <p className="project-category">{t('projects.admin.category')}</p>

              <h3>{t('projects.admin.title')}</h3>

              <p className="project-description">{t('projects.admin.description')}</p>

              <div className="project-technologies">
                {['React', 'TypeScript', 'CSS', 'Vite'].map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <button
                type="button"
                className="project-gallery-button"
                onClick={() => openGallery('admin')}
              >
                {t('projects.admin.explore')}
              </button>
            </div>
          </motion.article>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && selectedImage !== null && (
          <motion.div
            className="project-gallery-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
            }}
            onClick={closeGallery}
          >
            <motion.div
              className="project-gallery-modal"
              initial={
                shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 20 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-gallery-header">
                <div>
                  <p>
                    {selectedProject === 'api'
                      ? t('projects.api.title')
                      : t('projects.admin.title')}
                  </p>

                  <h3>{t(currentImages[selectedImage].titleKey)}</h3>
                </div>

                <button
                  type="button"
                  onClick={closeGallery}
                  aria-label={t('projects.gallery.close')}
                >
                  <X size={22} />
                </button>
              </div>

              <div className="project-gallery-image">
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label={t('projects.gallery.previous')}
                >
                  <ChevronLeft size={24} />
                </button>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${selectedProject}-${selectedImage}`}
                    src={currentImages[selectedImage].src}
                    alt={t(currentImages[selectedImage].titleKey)}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                    }}
                  />
                </AnimatePresence>

                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label={t('projects.gallery.next')}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="project-gallery-footer">
                <span>
                  {selectedImage + 1} / {currentImages.length}
                </span>

                <div className="project-gallery-thumbnails">
                  {currentImages.map((image, index) => (
                    <button
                      type="button"
                      key={image.titleKey}
                      className={selectedImage === index ? 'active' : ''}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`${t('projects.gallery.view')}: ${t(image.titleKey)}`}
                      aria-current={selectedImage === index ? 'true' : undefined}
                    >
                      <img src={image.src} alt="" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection

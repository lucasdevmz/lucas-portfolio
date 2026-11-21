import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language.split('-')[0]

  const changeLanguage = (language: 'pt' | 'en') => {
    i18n.changeLanguage(language)
  }

  return (
    <div className="language-switcher" aria-label="Language selector">
      <button
        type="button"
        className={currentLanguage === 'pt' ? 'active' : ''}
        onClick={() => changeLanguage('pt')}
        aria-pressed={currentLanguage === 'pt'}
        aria-label="Português"
      >
        PT
      </button>

      <span className="language-divider" />

      <button
        type="button"
        className={currentLanguage === 'en' ? 'active' : ''}
        onClick={() => changeLanguage('en')}
        aria-pressed={currentLanguage === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: t('navigation.home'), href: '#home' },
    { label: t('navigation.about'), href: '#about' },
    { label: t('navigation.skills'), href: '#skills' },
    { label: t('navigation.projects'), href: '#projects' },
    { label: t('navigation.contact'), href: '#contact' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#home" className="header-logo" onClick={closeMenu}>
          <span className="logo-mark">L</span>
          <span>Portfolio</span>
          <span className="logo-dot">.</span>
        </a>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <ThemeToggle />

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

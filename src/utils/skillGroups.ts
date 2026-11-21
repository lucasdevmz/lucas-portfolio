import { Database, Network } from 'lucide-react'
import vscodeIcon from '../assets/skills/vscode.svg'

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiEslint,
  SiJest,
  SiVitest,
  SiPrettier,
  SiGit,
  SiGithub,
  SiVite,
} from '@icons-pack/react-simple-icons'

export const skillGroups = [
  {
    titleKey: 'skills.categories.frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    titleKey: 'skills.categories.backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST API', icon: Network },
    ],
  },
  {
    titleKey: 'skills.categories.database',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQL', icon: Database },
      { name: 'Prisma', icon: SiPrisma },
    ],
  },
  {
    titleKey: 'skills.categories.quality',
    skills: [
      { name: 'ESLint', icon: SiEslint },
      { name: 'Jest', icon: SiJest },
      { name: 'Vitest', icon: SiVitest },
      { name: 'Prettier', icon: SiPrettier },
    ],
  },
  {
    titleKey: 'skills.categories.tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Vite', icon: SiVite },
      { name: 'VS Code', image: vscodeIcon },
    ],
  },
]

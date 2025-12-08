export const profile = {
  name: 'Zubair Khalid',
  title: 'Full-Stack Software Engineer',
  location: 'Manchester, UK',
  email: 'zubairkhalidce@gmail.com',
  phone: '+44 07859 010112',
  rightToWork: 'Spouse Visa',
  links: {
    github: 'https://github.com/dearzubi',
    githubAlt: 'https://github.com/coolpengwing',
    linkedin: 'https://linkedin.com/in/zubair-khalid',
  },
  blurb: 'Building, scaling, and shipping software for 4+ years, from concept to impact.',
}

export const skills = {
  Core: [
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'Express',
    'Tailwind CSS',
    'JavaScript',
    'REST APIs',
    'Zod Data Validation',
    'Vue.js',
    'Nuxt',
    'Lodash',
    'Axios',
  ],
  'Database & Caching': [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'MySQL',
    'SQLite',
    'Firestore',
    'TypeORM',
    'MikroORM',
    'Drizzle ORM',
    'Mongoose',
  ],
  'Cloud & DevOps': [
    'Docker',
    'GitHub Actions',
    'CI/CD',
    'Nginx',
    'AWS',
    'Google Cloud',
    'DigitalOcean',
    'Firebase',
    'Hetzner',
    'Vercel',
  ],
  'Job Scheduling': ['BullMQ', 'Hatchet.run', 'Agenda'],
  'Auth & Security': ['OAuth 2', 'JWT', 'AWS KMS', 'Firebase Auth', 'Passport.js', 'OpenSSL'],
  'Testing & Quality': ['Vitest', 'Mocha', 'Chai', 'Jest', 'ESLint'],
  'Monitoring & Logging': ['PostHog', 'Sentry', 'Winston'],
  AI: ['LangChain', 'LangGraph', 'OpenAI Agents SDK', 'Gemini', 'Anthropic', 'ElevenLabs'],
  Web3: ['EVM', 'MetaMask', 'Solana', 'Foundry', 'Hardhat', 'Solidity', 'DeFi', 'Smart Contracts'],
  Payments: ['Stripe', 'PayPal'],
}

export type ExperienceItem = {
  role: string
  company?: string
  location?: string
  start: string
  end: string
  bullets: string[]
  technologies?: string[]
  note?: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Developer',
    company: 'Hulee LTD',
    location: 'Salford, Greater Manchester, UK',
    start: 'Oct 2025',
    end: 'Dec 2025',
    bullets: [
      'Automated payroll processing by integrating Xero Payroll with the shift management platform.',
      'Introduced a centralised error monitoring and logging service using Winston and Sentry.',
      'Delivered end-to-end feature development using JavaScript, Node.js, Vue.js, and MongoDB.',
    ],
    note: 'Role ended due to company-wide downsizing and financial restructuring.',
    technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Vue.js', 'Nuxt', 'MongoDB', 'Sentry'],
  },
  {
    role: 'Senior Full-Stack Engineer (Contract)',
    company: 'Sage Studios AI (via Digitalux)',
    location: 'Remote',
    start: 'Aug 2024',
    end: 'Jul 2025',
    bullets: [
      'Architected and delivered a no-code platform for multi-agent AI workflows.',
      'Accelerated local dev builds by 60x via JIT TypeScript compilation.',
      'Setup CI/CD pipeline using Docker + GitHub Actions, cutting deployment time to < 20 minutes.',
      'Implemented maker-checker approvals to reduce erroneous LLM auto-executions.',
      'Raised LLM tool-call accuracy from ~40% to 80%+ via prompt tuning, typed schemas, and error handling.',
      'Resolved 100+ GitHub issues through cross-functional team collaboration.',
      'Web3: custodial wallets (AWS Lambda + KMS), ERC-4337 gasless txs, BullMQ orchestration, DeFi integrations & Telegram bot.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'LangGraph',
      'OpenAI Agents SDK',
    ],
  },
  {
    role: 'Full-Stack Freelancer',
    location: 'Remote',
    start: 'May 2023',
    end: 'Aug 2024',
    bullets: [
      'Built an eBay order fulfillment system enabling £10k+ client sales.',
      'Created a UK mosque discovery and prayer times React PWA serving 500+ monthly users.',
      'Developed a serverless fitness app backend for workout tracking and user management.',
      'Implemented a retail profit calculator web app from Excel sheets handling $30k+/mo sales.',
    ],
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'React', 'PostgreSQL', 'Firebase', 'Vercel'],
  },
  {
    role: 'Technical Team Lead',
    company: 'Blockchain Security Lab',
    location: 'Lahore, Pakistan',
    start: 'Sept 2021',
    end: 'Jan 2023',
    bullets: [
      'Led development of a decentralised SSL certificate issuance platform.',
      'Deployed smart contracts on Polygon PoS with AWS-hosted microservices.; secured Polygon DAO grant.',
      'Contributed to analysis of 23,000+ Ethereum smart contracts for an ACM TOSEM paper.',
      'Co-delivered a featured talk on reimagining PKI with blockchain at IEEE ICCWS-2021.',
      'Organised workshops and led hands-on Solidity training.',
    ],
    technologies: ['Solidity', 'Node.js', 'TypeScript', 'React', 'AWS', 'EVM', 'OpenSSL'],
  },
]

export type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  video?: string
  githubLink?: string | Array<{ url: string; label: string }>
  category?: string
  image?: string
  isFeatured?: boolean
}

export const projects: Project[] = [
  {
    name: 'FloAgenticAI',
    description: 'Visual no-code platform to compose event-driven, multi-agent AI workflows.',
    stack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'OpenAI Agents SDK',
      'PostgreSQL',
      'Redis',
    ],
    image: '/projects/floagenticai/image_1.png',
    link: 'https://www.floagenticai.com/',
    githubLink: 'https://github.com/dearzubi/floagenticai',
    category: 'Web App',
    isFeatured: true,
  },
  {
    name: 'Shift Manager',
    description: 'An employee rostering and shift management platform MVP.',
    stack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    category: 'Web App',
    githubLink: [
      {
        url: 'https://github.com/dearzubi/orta-full-stack-dev-test-fe',
        label: 'Frontend',
      },
      {
        url: 'https://github.com/dearzubi/orta-full-stack-dev-test-be',
        label: 'Backend',
      },
    ],
    image: '/projects/shift-manager/image_1.png',
    isFeatured: true,
  },
  {
    name: 'Masjid 24/7',
    description:
      'Modernising how UK mosques share prayer timetables with seamless uploads, widgets, and real-time updates.',
    stack: ['TypeScript', 'React', 'Tailwind CSS'],
    image: '/projects/masjid247/image_1.png',
    link: 'https://masjid247.com/',
    category: 'Web App',
    isFeatured: true,
  },
  {
    name: 'Poprofit',
    description: 'TikTok Shop profit calculator app from Excel sheets.',
    stack: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'Firebase', 'PayPal'],
    image: '/projects/poprofit/image_1.png',
    link: 'https://poprofit.com/',
  },
  {
    name: 'Altar',
    description:
      'A low-code Web3 and AI automation platform to build smart workflows with LLMs and blockchain.',
    stack: ['TypeScript', 'React', 'Node.js', 'EVM', 'Solidity', 'LangGraph'],
    image: '/projects/altar/image_1.png',
    link: 'https://sagestudios.ai/',
  },
  {
    name: 'Mura',
    description:
      'A global health and wellness platform connecting users with local trainers and experts to achieve their goals on their own terms.',
    stack: ['TypeScript', 'Firebase'],
    image: '/projects/mura/image_1.png',
    link: 'https://www.mura.fit/',
  },
  {
    name: 'PKIChain',
    description: 'A revolutionising solution for Blockchain-based DV SSL Certificates',
    stack: ['TypeScript', 'React', 'Node.js', 'OpenSSL', 'EVM', 'Solidity'],
    link: 'https://pkichain.com/',
  },
]

export const education = [
  {
    degree: 'MSc in Data Science (CGPA 3.73/4)',
    school: 'ITU, Lahore, Pakistan',
    dates: 'Sept 2020 – Oct 2022',
  },
  {
    degree: 'B.Sc. in Computer Engineering (CGPA 3.69/4)',
    school: 'UET, Taxila, Pakistan',
    dates: 'Oct 2015 – Aug 2019',
  },
]

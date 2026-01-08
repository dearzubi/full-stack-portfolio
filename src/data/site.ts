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
    linkedin: 'https://linkedin.com/in/mr-zubair-khalid',
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
      'Implemented and documented centralised logging, monitoring, and error tracking Node.js service in JavaScript using Sentry, improving visibility into production issues and post-deployment debugging.',
      'Optimised Express REST API endpoints, identifying V8 performance issues and improving response times by up to 3x under production load.',
      'Integrated Xero Payroll REST APIs into a multi-tenant Vue.js and Node.js platform, enabling automated employee synchronisation and timesheet management.',
    ],
    note: 'Role ended due to company-wide downsizing and financial restructuring.',
    technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Vue.js', 'Nuxt', 'MongoDB', 'Sentry'],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Sage Studios AI',
    location: 'Remote',
    start: 'Aug 2024',
    end: 'Jul 2025',
    bullets: [
      'Integrated DeFi trading and analytics APIs with AI agents using Node.js, enabling agentic trading workflows and contributing to an average 4x increase in gross weekly revenue (~$3,800 to ~$16,000) over a three-month period.',
      'Designed and deployed cloud infrastructure on DigitalOcean, containerised Node.js services using Docker, and implemented CI/CD pipelines with GitHub Actions.',
      'Improved LLM tool execution pipelines using prompt optimisation and typed schemas written in TypeScript, doubling tool selection accuracy and third-party API call success rates.',
      'Delivered backend and frontend features across 100+ GitHub issues using TypeScript, React, and Node.js, including API development, bug fixes, and performance improvements, in collaboration with the product team.',
      'Built an event-driven, no-code AI automation platform using TypeScript, React, Express, and Node.js, onboarding 150+ users within a month.',
      'Identified and fixed development build bottlenecks using TypeScript JIT compilation and hot reloading, reducing average build time from 5 minutes to a few seconds.',
      'Web3: Custodial Wallets (AWS Lambda + KMS), ERC-4337 gasless txs, BullMQ queues, DeFi integrations & Telegram bot.',
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
    start: 'Apr 2023',
    end: 'Aug 2024',
    bullets: [
      'Developed a Node.js and Next.js e-commerce order fulfilment system, contributing to over £10,000 in client revenue.',
      'Built a React Progressive Web App (PWA), integrated with .NET backend APIs, serving 500+ monthly active users.',
      'Implemented a serverless backend using TypeScript, Node.js, and Firebase, handling 10,000+ monthly requests.',
      'Implemented a retail profit calculator web app from Excel sheets handling $30k+/mo sales.',
    ],
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'React', 'PostgreSQL', 'Firebase', 'Vercel'],
  },
  {
    role: 'Software Developer',
    company: 'Blockchain Security Lab',
    location: 'Lahore, Pakistan',
    start: 'Sept 2021',
    end: 'Jan 2023',
    bullets: [
      'Led a 3-person team to develop a decentralised SSL certificate issuance platform using React, Express, Node.js, and Ethereum blockchain, resulting in a funding grant from NCCS Pakistan and Polygon DAO.',
      'Co-organised a technical workshop and trained over 70 industry professionals through hands-on Solidity programming sessions.',
      'Contributed to the analysis of 23,000+ Ethereum smart contracts for a research paper on smart contract storage state, published in ACM Transactions on Software Engineering and Methodology.',
      'Co-delivered a featured talk on “Reimagining PKI with Blockchain” at the IEEE 2nd International Conference on Cyberwarfare & Cybersecurity 2021 in Islamabad.',
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

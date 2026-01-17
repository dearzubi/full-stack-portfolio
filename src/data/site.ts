export const profile = {
  name: 'Zubair Khalid',
  title: 'Full-Stack Software Developer',
  location: 'Manchester, UK',
  email: 'zubairkhalidce@gmail.com',
  phone: '+44 07859 010112',
  rightToWork: 'Spouse Visa',
  links: {
    github: 'https://github.com/dearzubi',
    githubAlt: 'https://github.com/coolpengwing',
    linkedin: 'https://linkedin.com/in/mr-zubair-khalid',
  },
  blurb: 'Crafting resilient systems that handle real-world chaos gracefully.',
  coreTechnologies: [
    'TypeScript',
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Docker',
  ],
}

export const skills = {
  'Languages & Frameworks': [
    'TypeScript',
    'JavaScript (ES6+)',
    'Python',
    'Node.js',
    'React',
    'Next.js',
    'Express',
    'Vue.js',
    'Nuxt',
    'NestJS',
  ],
  APIs: ['REST APIs', 'WebSocket', 'Server-Sent Events (SSE)'],
  'Libraries & Tools': [
    'Tailwind CSS',
    'Lodash',
    'Axios',
    'Zod',
    'Yup',
    'React Flow',
    'Socket.io',
    'TanStack React Query',
    'TanStack Router',
    'SheetJS',
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

export type ExperienceLine = {
  value: string
  type: 'text' | 'heading' | 'bullet'
  subLines?: ExperienceLine[]
}

export type ExperienceItem = {
  role: string
  company?: string
  location?: string
  start: string
  end: string
  lines: ExperienceLine[]
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
    lines: [
      {
        value:
          'Delivered a queue-driven payroll synchronisation service for a multi-tenant SaaS platform (orta.co.uk) serving 15 organisations and 700+ staff members using Vue.js, Node.js, and MongoDB.',
        type: 'bullet',
        subLines: [
          {
            value:
              'Built idempotent, resumable background jobs to sync staff data with Xero Payroll API.',
            type: 'bullet',
          },
          {
            value:
              'Implemented per-employee failure isolation, enabling safe recovery from partial sync failures.',
            type: 'bullet',
          },
          {
            value: 'Performed unit and integration testing using Jest and Supertest.',
            type: 'bullet',
          },
          {
            value:
              'Collaborated with the team to define technical requirements and delivery milestones in agile sprints.',
            type: 'bullet',
          },
        ],
      },
      {
        value:
          'Implemented a centralised logging service using Winston with Sentry integration, enabling detailed error tracking with accurate stack traces and rich metadata for faster root cause analysis.',
        type: 'bullet',
      },
    ],
    note: 'Role ended due to company-wide downsizing and financial restructuring.',
    technologies: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Vue.js',
      'Nuxt',
      'MongoDB',
      'Sentry',
      'Winston',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Sage Studios AI',
    location: 'Remote',
    start: 'Aug 2024',
    end: 'Jul 2025',
    lines: [
      {
        value:
          'Architected and built an event-driven, no-code AI agent platform enabling non-technical users to create autonomous, multi-step workflows. Served 1,500+ users building automated trading, analytics, and data processing agents.',
        type: 'text',
      },
      {
        value: 'Core Platform Development:',
        type: 'heading',
        subLines: [
          {
            value:
              'Implemented drag-and-drop workflow builder using React Flow, including version history with time-travel support.',
            type: 'bullet',
          },
          {
            value:
              'Built a DAG execution engine with BullMQ job queues, ensuring idempotency, automatic retries, and graceful failure recovery across distributed workers.',
            type: 'bullet',
          },
          {
            value:
              'Delivered real-time UX using WebSockets for client-server interaction and SSE for live execution status updates.',
            type: 'bullet',
          },
          {
            value:
              'Implemented secure credential management using asymmetric encryption with AWS KMS and Lambda (Python), protecting sensitive API keys and authentication tokens.',
            type: 'bullet',
          },
          {
            value:
              'Integrated 10+ DeFi and analytics platforms, enabling agent-driven crypto analysis and trading workflows.',
            type: 'bullet',
          },
          {
            value: 'Performed unit and integration testing using Mocha, Chai, and Supertest.',
            type: 'bullet',
          },
        ],
      },
      {
        value: 'Cloud Infrastructure:',
        type: 'heading',
        subLines: [
          {
            value:
              'Provisioned production infrastructure on DigitalOcean and containerised a React/Node.js monorepo using Docker.',
            type: 'bullet',
          },
          {
            value:
              'Replaced manual deployments with automated CI/CD pipelines using GitHub Actions, reducing deployment time.',
            type: 'bullet',
          },
        ],
      },
      {
        value: 'Performance & Reliability:',
        type: 'heading',
        subLines: [
          {
            value:
              'Optimised LLM tool-calling accuracy through prompt engineering and Zod schema validation in TypeScript.',
            type: 'bullet',
          },
          {
            value:
              'Reduced development build times from 5+ minutes to a few seconds by implementing JIT TypeScript compilation, module caching, and hot module reloading.',
            type: 'bullet',
          },
          {
            value: 'Diagnosed and resolved critical production issues:',
            type: 'bullet',
            subLines: [
              {
                value:
                  'Fixed JSON serialisation bug in workflow execution that caused performance degradation and crashes.',
                type: 'bullet',
              },
              {
                value:
                  'Resolved undefined behaviour from third-party dependency monkey-patching the Node.js fetch API.',
                type: 'bullet',
              },
            ],
          },
        ],
      },
      {
        value: 'Team Collaboration:',
        type: 'heading',
        subLines: [
          {
            value:
              'Conducted code reviews focusing on security, performance, and maintainability best practices.',
            type: 'bullet',
          },
          {
            value:
              'Mentored junior developer on code architecture, async JavaScript, and agentic execution in LangGraph.',
            type: 'bullet',
          },
          {
            value:
              'Wrote technical documentation for API endpoints, system architecture, and deployment procedures.',
            type: 'bullet',
          },
        ],
      },
    ],
    technologies: [
      'TypeScript',
      'Python',
      'React',
      'React Flow',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'LangGraph',
      'OpenAI Agents SDK',
      'BullMQ',
      'Docker',
      'DigitalOcean',
      'AWS KMS',
      'GitHub Actions',
      'WebSocket',
    ],
  },
  {
    role: 'Full-Stack Freelancer',
    location: 'Remote',
    start: 'Apr 2023',
    end: 'Aug 2024',
    lines: [
      {
        value: 'E-commerce Shipping Platform (UK-based e-commerce client)',
        type: 'heading',
        subLines: [
          {
            value:
              'Built a custom shipping management system using Next.js, reducing manual label creation from ~4 minutes to seconds through automation.',
            type: 'bullet',
          },
          {
            value:
              'Integrated eBay REST APIs with OAuth 2.0 authentication, enabling automated order fulfilment.',
            type: 'bullet',
          },
          {
            value:
              'Implemented user authentication with multi-factor authentication (MFA) using Firebase Auth.',
            type: 'bullet',
          },
        ],
      },
      {
        value: 'Mosque Discovery & Prayer Timings Web App (masjid247.com)',
        type: 'heading',
        subLines: [
          {
            value:
              'Developed NestJS backend and React Progressive Web App (PWA), serving 1,000+ daily active users.',
            type: 'bullet',
          },
        ],
      },
      {
        value: 'Fitness Flutter App Serverless Backend (mura.fit)',
        type: 'heading',
        subLines: [
          {
            value:
              'Developed a TypeScript/Node.js serverless backend on GCP Cloud Run, handling 10,000+ monthly invocations.',
            type: 'bullet',
          },
          {
            value:
              'Implemented scheduled cron jobs using GCP Cloud Scheduler for automated goal reminders and notifications.',
            type: 'bullet',
          },
          { value: 'Managed data persistence in Firebase Firestore (NoSQL DB).', type: 'bullet' },
        ],
      },
    ],
    technologies: [
      'TypeScript',
      'Node.js',
      'NestJS',
      'Next.js',
      'React',
      'PostgreSQL',
      'Firebase',
      'Vercel',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Blockchain Security Lab',
    location: 'Lahore, Pakistan',
    start: 'Sept 2021',
    end: 'Jan 2023',
    lines: [
      {
        value:
          'Led a 3-person development team building a decentralised SSL certificate issuance platform to innovate public key infrastructure (PKI) using blockchain technology built using React, Express, and Node.js.',
        type: 'text',
        subLines: [
          {
            value:
              'Built a full-stack application with a distributed node network deployed on AWS EC2.',
            type: 'bullet',
          },
          {
            value:
              'Developed and deployed Solidity smart contracts on Ethereum testnets and Polygon PoS blockchain.',
            type: 'bullet',
          },
          {
            value:
              'Secured an extended funding grant from NCCS Pakistan and $20,000 in AWS credits from Polygon.',
            type: 'bullet',
          },
          {
            value:
              'Trained 70+ industry professionals in Solidity programming through hands-on technical workshops.',
            type: 'bullet',
          },
        ],
      },
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

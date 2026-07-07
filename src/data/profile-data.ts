export interface SocialLink {
  label: string
  url: string
}

export interface Position {
  role: string
  startDate: string
  endDate: string
  bullets: string[]
}

export interface Experience {
  company: string
  location?: string
  positions: Position[]
}

export interface Project {
  name: string
  description: string
  url?: string
  tags?: string[]
}

export interface BlogLink {
  title: string
  url: string
  date: string
  blurb: string
}

export interface Profile {
  name: string
  title: string
  bio: string
  hobbies: string
  resumeUrl: string
  socials: SocialLink[]
  experience: Experience[]
  projects: Project[]
  blogLinks: BlogLink[]
}

export const profile: Profile = {
  name: 'Michael McComiskey',
  title: 'Senior Software Engineer',
  bio: 'Specializes in scalable front end architecture, robust design systems, and secure AI-data integrations—focusing on bridging the gap between complex engineering workflows and seamless, accessible user experiences.',
  hobbies:
    'Outside of work: playing Irish button accordion, throwing discs, and hiking.',
  resumeUrl:
    'https://docs.google.com/document/d/1BahiCTldV9POwIK5TvoOYkuUNUuMz-C_WL-KgiXsa1A/export?format=pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/mmccomiskey' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-mccomiskey/' },
  ],
  experience: [
    {
      company: 'Wunderkind',
      location: 'Baltimore, Maryland, United States · Remote',
      positions: [
        {
          role: 'Senior Software Engineer',
          startDate: 'Jan 2023',
          endDate: 'Present',
          bullets: [
            'Serve as SME for the Wunder Design System, driving accessibility and component best practices across the platform',
            'Build and ship the Wunderkind Platform Self Service app',
            'Modernized legacy CI/CD pipelines by migrating them to GitHub Actions',
            'Architected secure OAuth 2.1 implementations connecting AI platforms (MCP servers) to data analytics',
          ],
        },
        {
          role: 'Software Engineer, Frontend',
          startDate: 'Dec 2021',
          endDate: 'Jan 2023',
          bullets: [
            'Built a React, TypeScript, Redux, and Styled Components application to streamline marketing campaign creation',
          ],
        },
      ],
    },
    {
      company: 'Blackboard',
      location: 'Baltimore, Maryland Area',
      positions: [
        {
          role: 'Software Engineer',
          startDate: 'Mar 2019',
          endDate: 'Nov 2021',
          bullets: ['Focused on front-end development using React'],
        },
        {
          role: 'Associate Software Engineer',
          startDate: 'Dec 2017',
          endDate: 'Mar 2019',
          bullets: [],
        },
      ],
    },
  ],
  projects: [],
  blogLinks: [
    {
      title: 'From Injury to Half Marathon: How I Used...',
      url: 'https://lnkd.in/p/eUAAgF76',
      date: '2026-07-02',
      blurb: 'Building running workouts led to an open source contribution.',
    },
  ],
}

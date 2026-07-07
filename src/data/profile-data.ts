export interface SocialLink {
  label: string
  url: string
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  bullets: string[]
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
  resumeUrl: string
  socials: SocialLink[]
  experience: Experience[]
  projects: Project[]
  blogLinks: BlogLink[]
}

// TODO: replace placeholder content with real profile data
export const profile: Profile = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'A short bio goes here. Replace this with a sentence or two about what you do and what you care about.',
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-handle' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' },
  ],
  experience: [
    {
      company: 'Company Name',
      role: 'Role Title',
      startDate: '2023',
      endDate: 'Present',
      bullets: [
        'Placeholder bullet point describing an accomplishment.',
        'Placeholder bullet point describing an accomplishment.',
      ],
    },
  ],
  projects: [
    {
      name: 'Project Name',
      description: 'Short description of the project.',
      url: 'https://example.com',
      tags: ['React', 'TypeScript'],
    },
  ],
  blogLinks: [
    {
      title: 'Post title',
      url: 'https://www.linkedin.com/posts/example',
      date: '2026-01-01',
      blurb: 'Short blurb summarizing the post.',
    },
  ],
}

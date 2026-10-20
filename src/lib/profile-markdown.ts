import type { Profile } from '../data/profile-data.ts'

/** Renders the profile as Markdown for agents that can't run the SPA. */
export function profileToMarkdown(profile: Profile): string {
  const lines: string[] = [
    `# ${profile.name}`,
    '',
    `${profile.title}`,
    '',
    profile.bio,
    '',
    profile.hobbies,
    '',
    '## Links',
    '',
    ...profile.socials.map((s) => `- [${s.label}](${s.url})`),
    `- [Resume (PDF)](${profile.resumeUrl})`,
    '',
    '## Experience',
  ]

  for (const exp of profile.experience) {
    lines.push('', `### ${exp.company}`)
    if (exp.location) lines.push('', exp.location)
    for (const pos of exp.positions) {
      lines.push('', `**${pos.role}** (${pos.startDate} - ${pos.endDate})`)
      if (pos.bullets.length) {
        lines.push('', ...pos.bullets.map((b) => `- ${b}`))
      }
    }
  }

  if (profile.projects.length) {
    lines.push('', '## Projects', '')
    for (const p of profile.projects) {
      const name = p.url ? `[${p.name}](${p.url})` : p.name
      lines.push(`- ${name}: ${p.description}`)
    }
  }

  if (profile.blogLinks.length) {
    lines.push('', '## Writing', '')
    for (const post of profile.blogLinks) {
      lines.push(`- [${post.title}](${post.url}) (${post.date}): ${post.blurb}`)
    }
  }

  return lines.join('\n') + '\n'
}

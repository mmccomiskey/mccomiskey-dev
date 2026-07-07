import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile-data'

export function Experience() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      {profile.experience.map((job) => (
        <Card key={`${job.company}-${job.role}`}>
          <CardHeader className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <CardTitle className="text-base">
              {job.role} · {job.company}
            </CardTitle>
            <span className="text-sm text-muted-foreground">
              {job.startDate} — {job.endDate}
            </span>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

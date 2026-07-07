import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile-data'

export function Experience() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      {profile.experience.map((job) => (
        <Card key={job.company}>
          <CardHeader>
            <CardTitle className="text-base">{job.company}</CardTitle>
            {job.location && (
              <p className="text-sm text-muted-foreground">{job.location}</p>
            )}
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {job.positions.map((position) => (
              <div key={position.role} className="flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-medium">{position.role}</span>
                  <span className="text-sm text-muted-foreground">
                    {position.startDate} — {position.endDate}
                  </span>
                </div>
                {position.bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {position.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

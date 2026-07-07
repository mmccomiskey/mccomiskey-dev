import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { profile } from '@/data/profile-data'

export function BlogFeed() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <h2 className="text-2xl font-semibold tracking-tight">Writing</h2>
      {profile.blogLinks.map((post) => (
        <a key={post.url} href={post.url} target="_blank" rel="noreferrer">
          <Card className="hover:bg-accent/50 transition-colors">
            <CardHeader className="flex flex-row items-start justify-between gap-2">
              <CardTitle className="text-base">{post.title}</CardTitle>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">{post.blurb}</p>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </CardContent>
          </Card>
        </a>
      ))}
    </section>
  )
}

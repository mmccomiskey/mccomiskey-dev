import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile-data'

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-4 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">{profile.name}</h1>
      <p className="text-lg text-muted-foreground">{profile.title}</p>
      <p className="max-w-xl text-muted-foreground">{profile.bio}</p>
      <div className="flex items-center gap-4 mt-2">
        {profile.socials.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4 hover:text-foreground text-muted-foreground"
          >
            {social.label}
          </a>
        ))}
      </div>
      <Button asChild className="mt-2">
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
          View resume
        </a>
      </Button>
    </section>
  )
}

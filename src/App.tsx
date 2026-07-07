import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { BlogFeed } from '@/components/BlogFeed'

function App() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Hero />
      <Experience />
      <BlogFeed />
    </div>
  )
}

export default App

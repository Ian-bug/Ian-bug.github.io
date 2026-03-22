import { Button } from "@/components/ui/button"
import { Github, Code2, Cpu, Rocket, Coffee } from "lucide-react"

export default function Page() {
  const projects = [
    {
      name: "Ruin Injector",
      description: "A powerful injection tool built with Rust",
      url: "https://github.com/Ian-bug/ruin-injector",
      tech: ["Rust", "Systems"],
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      name: "RainingKeysPython",
      description: "Interactive keyboard visualization project",
      url: "https://github.com/Ian-bug/RainingKeysPython",
      tech: ["Python", "Interactive"],
      icon: <Cpu className="h-5 w-5" />,
    },
  ]

  const skills = [
    "Python",
    "Rust",
    "Frontend Development",
    "Backend Development",
    "AI-Assisted Development",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Ian
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Student Developer & Builder
            </p>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m a student developer passionate about building things with
            code. I leverage AI to bring ideas to life, working with everything
            from low-level systems programming in Rust to Python automation and
            modern web development.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a
                href="https://github.com/Ian-bug"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#projects">
                <Rocket className="h-5 w-5" />
                See My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://ko-fi.com/Y8Y01WG0DL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Coffee className="h-5 w-5" />
                Support me on Ko-fi
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="cursor-default rounded-lg border border-border bg-card px-6 py-3 transition-colors hover:bg-accent"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {project.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                      {project.name}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            Interested in my work or want to collaborate? Check out my GitHub
            profile for more projects and contributions.
          </p>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a
              href="https://github.com/Ian-bug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              github.com/Ian-bug
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Built with Next.js, shadcn/ui, and AI assistance</p>
            <p className="mt-2">
              © {new Date().getFullYear()} Ian. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

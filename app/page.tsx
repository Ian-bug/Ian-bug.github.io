import { Button } from "@/components/ui/button"
import { Github, Code2, Cpu, Rocket } from "lucide-react"

export default function Page() {
  const projects = [
    {
      name: "Ruin Injector",
      description: "A powerful injection tool built with Rust",
      url: "https://github.com/Ian-bug/ruin-injector",
      tech: ["Rust", "Systems"],
      icon: <Code2 className="w-5 h-5" />
    },
    {
      name: "RainingKeysPython",
      description: "Interactive keyboard visualization project",
      url: "https://github.com/Ian-bug/RainingKeysPython",
      tech: ["Python", "Interactive"],
      icon: <Cpu className="w-5 h-5" />
    }
  ]

  const skills = [
    "Python",
    "Rust",
    "Frontend Development",
    "Backend Development",
    "AI-Assisted Development"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Ian
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Student Developer & Builder
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a student developer passionate about building things with code.
            I leverage AI to bring ideas to life, working with everything from
            low-level systems programming in Rust to Python automation and modern web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="gap-2">
              <a href="https://github.com/Ian-bug" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View GitHub Profile
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#projects">
                <Rocket className="w-5 h-5" />
                See My Work
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors cursor-default"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
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
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-muted-foreground">
            Interested in my work or want to collaborate? Check out my GitHub profile for more projects and contributions.
          </p>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href="https://github.com/Ian-bug" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              github.com/Ian-bug
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Built with Next.js, shadcn/ui, and AI assistance</p>
            <p className="mt-2">© {new Date().getFullYear()} Ian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, ExternalLink, Code2, Cpu, Terminal } from "lucide-react"

const projects = [
  {
    name: "Ruin Injector",
    description:
      "A powerful injection tool built with Rust for advanced systems programming.",
    url: "https://github.com/Ian-bug/ruin-injector",
    tech: ["Rust", "Systems Programming"],
    icon: Code2,
  },
  {
    name: "RainingKeysPython",
    description:
      "Interactive keyboard visualization project built with Python for real-time input feedback.",
    url: "https://github.com/Ian-bug/RainingKeysPython",
    tech: ["Python", "Interactive"],
    icon: Cpu,
  },
]

const skills = [
  "Python",
  "Rust",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Systems Programming",
  "AI-Assisted Development",
]

const stats = [
  { value: "10+", label: "Projects" },
  { value: "3+", label: "Languages" },
  { value: "AI", label: "Powered" },
  { value: "24/7", label: "Building" },
]

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(oklch(0.5_0_0/0.03)_1px,transparent_1px),linear-gradient(90deg,oklch(0.5_0_0/0.03)_1px,transparent_1px)] [background-size:100px_100px]" />

      <div className="pointer-events-none absolute top-0 left-0 h-1 w-1/2 bg-gradient-to-r from-primary to-transparent" />

      <div className="pointer-events-none absolute right-[15%] bottom-[30%] size-80 animate-[spin_20s_linear_infinite] rounded-full border border-primary/10" />

      <main className="relative z-10">
        <section className="flex min-h-screen items-center px-6 py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <h1 className="text-6xl leading-[0.95] font-black tracking-tight md:text-7xl lg:text-8xl">
                  Hi, I&apos;m <span className="text-primary">Ian</span>
                </h1>

                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Student developer & builder. I leverage AI to bring ideas to
                  life &mdash; from low-level systems programming in Rust to
                  Python automation and modern web development.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2 px-8">
                    <a
                      href="https://github.com/Ian-bug"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" />
                      View GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gap-2 px-8"
                  >
                    <a href="#projects">
                      <Terminal className="size-4" />
                      See My Work
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
                  <div className="relative">
                    <div className="absolute -inset-1 animate-[spin_30s_linear_infinite] rounded-full border-2 border-dashed border-primary/20" />
                    <div className="size-64 overflow-hidden rounded-full ring-4 ring-background md:size-80 lg:size-96">
                      <Image
                        src="/img/OdtSYaV.jpg"
                        alt="Ian"
                        width={384}
                        height={384}
                        className="size-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl font-black tracking-tight md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <Separator />
        </div>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1.5">
                Technologies
              </Badge>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Skills & Tools
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                The technologies I work with to build things
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-2 rounded-full bg-primary/60 transition-colors group-hover:bg-primary" />
                    <span className="font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <Separator />
        </div>

        <section id="projects" className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1.5">
                Portfolio
              </Badge>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Things I&apos;ve built and contributed to
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => {
                const Icon = project.icon
                return (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:ring-primary/20">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                            <Icon className="size-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-lg">
                              {project.name}
                            </CardTitle>
                          </div>
                          <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                        </div>
                      </CardHeader>
                      <CardContent className="-mt-2">
                        <CardDescription className="leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-[0.7rem]"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardFooter>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          <Separator />
        </div>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Interested in my work or want to collaborate? Check out my GitHub
              for more projects and contributions.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 px-8"
              >
                <a
                  href="https://github.com/Ian-bug"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  github.com/Ian-bug
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ian
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js &amp; shadcn/ui
          </p>
        </div>
      </footer>

      <div className="pointer-events-none absolute right-0 bottom-0 h-1 w-2/5 bg-gradient-to-l from-primary/50 to-transparent" />
    </div>
  )
}

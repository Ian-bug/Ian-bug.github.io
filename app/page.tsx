import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Terminal,
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
} from "lucide-react"

const projects = [
  {
    name: "Ruin Injector",
    description:
      "A Rust-based injection tool for advanced systems programming and runtime manipulation.",
    url: "https://github.com/Ian-bug/ruin-injector",
    tech: ["Rust", "Systems Programming"],
    icon: Code2,
  },
  {
    name: "RainingKeysPython",
    description:
      "Interactive keyboard visualization in Python for real-time input feedback and key display.",
    url: "https://github.com/Ian-bug/RainingKeysPython",
    tech: ["Python", "Interactive"],
    icon: Cpu,
  },
]

const skills = [
  { name: "Python", level: 90, icon: Code2 },
  { name: "Rust", level: 80, icon: Cpu },
  { name: "TypeScript", level: 85, icon: Terminal },
  { name: "React / Next.js", level: 85, icon: Zap },
  { name: "Tailwind CSS", level: 88, icon: Sparkles },
  { name: "Systems Programming", level: 75, icon: Globe },
  { name: "AI-assisted development", level: 92, icon: Sparkles },
  { name: "Git & GitHub", level: 87, icon: Github },
]

const stats = [
  { value: "10+", label: "projects built", icon: Zap },
  { value: "3+", label: "languages", icon: Code2 },
  { value: "\u221e", label: "curiosity", icon: Sparkles },
  { value: "24/7", label: "building mode", icon: Terminal },
]

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--foreground)/0.04,transparent)]" />
        <div className="absolute right-0 bottom-0 left-0 h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,var(--foreground)/0.02,transparent)]" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <nav
        className="relative z-50 flex items-center justify-between px-6 py-5 md:px-10"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-2.5">
          <span className="font-display text-lg font-bold tracking-tight">
            ian-bug
          </span>
          <span className="hidden text-xs tracking-widest text-muted-foreground/60 sm:inline-block">
            .dev
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground transition-all hover:text-foreground active:scale-[0.97]"
          >
            <a
              href="https://github.com/Ian-bug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
        </div>
      </nav>

      <main id="main-content" className="relative z-10">
        <section className="flex min-h-[100dvh] items-center px-6 pt-4 pb-16 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
              <div className="space-y-8">
                <div className="animate-fade-up inline-flex items-center gap-2 rounded-sm border border-border/40 bg-card/40 px-4 py-1.5 backdrop-blur-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40" />
                    <span className="relative inline-flex size-2 rounded-full bg-foreground" />
                  </span>
                  <span className="text-xs font-medium tracking-wide text-muted-foreground">
                    Available for projects
                  </span>
                </div>

                <div className="space-y-5">
                  <h1 className="animate-fade-up font-display text-5xl leading-[1.05] font-black tracking-[-0.03em] delay-100 sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem]">
                    I&apos;m{" "}
                    <span className="animate-shimmer bg-gradient-to-r from-foreground via-muted-foreground/70 to-foreground bg-clip-text text-transparent">
                      Ian
                    </span>
                  </h1>
                  <p className="animate-fade-up max-w-[52ch] text-base leading-[1.7] text-muted-foreground delay-200 md:text-lg">
                    Student developer who turns ideas into code.
                    <br className="hidden sm:block" />
                    From{" "}
                    <span className="font-medium text-foreground">
                      Rust systems programming
                    </span>{" "}
                    to{" "}
                    <span className="font-medium text-foreground">
                      full-stack web apps
                    </span>{" "}
                    &mdash; I build things that work.
                  </p>
                </div>

                <div className="animate-fade-up flex flex-wrap gap-3 delay-300">
                  <Button
                    asChild
                    size="lg"
                    className="group relative gap-2 overflow-hidden bg-foreground px-7 font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10 active:translate-y-px active:scale-[0.97]"
                  >
                    <a
                      href="https://github.com/Ian-bug"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4 transition-transform duration-200 group-hover:scale-110" />
                      View GitHub
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gap-2 border-border/50 bg-transparent px-7 font-semibold backdrop-blur-sm transition-all duration-200 hover:border-foreground/30 hover:bg-card active:translate-y-px active:scale-[0.97]"
                  >
                    <a href="#projects">
                      <Terminal className="size-4" />
                      See my work
                    </a>
                  </Button>
                </div>

                <div className="animate-fade-up flex flex-wrap items-center gap-2 pt-1 delay-400">
                  <span className="text-[11px] font-medium tracking-[0.1em] text-muted-foreground/50">
                    tech stack
                  </span>
                  <div className="mx-2 h-3 w-px bg-border/50" />
                  {["Python", "Rust", "TypeScript", "Next.js"].map((tech) => (
                    <span
                      key={tech}
                      className="border-b border-border/30 px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground/80 transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="animate-scale-in flex items-center justify-center delay-300 lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-sm bg-foreground/5 blur-2xl" />

                  <div className="relative">
                    <div className="absolute -inset-px rounded-none bg-gradient-to-b from-border/30 via-transparent to-border/20" />

                    <div className="relative overflow-hidden bg-card">
                      <Image
                        src="/img/OdtSYaV.jpg"
                        alt="Ian"
                        width={400}
                        height={400}
                        className="size-56 object-cover sm:size-64 md:size-72 lg:size-80 xl:size-[340px]"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="animate-float absolute -right-3 -bottom-3 flex items-center gap-2 rounded-sm border border-border/40 bg-card/95 px-4 py-2.5 shadow-lg shadow-foreground/[0.06] backdrop-blur-md">
                    <Sparkles className="size-3.5 text-foreground" />
                    <span className="text-xs font-semibold tracking-wide">
                      Student dev
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-border/40 bg-card/30 backdrop-blur-sm"
          aria-label="Stats"
        >
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 px-6 py-14 md:grid-cols-4 md:py-16">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex size-10 items-center justify-center rounded-sm border border-border/30 bg-card/60 transition-all duration-200 group-hover:border-foreground/20 group-hover:bg-foreground/5">
                    <Icon className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-foreground" />
                  </div>
                  <div className="font-display text-3xl font-bold tracking-[-0.02em] tabular-nums md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-muted-foreground/60">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="px-6 py-28 md:px-10 lg:px-16" aria-label="Skills">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 space-y-3">
              <span className="text-[11px] font-medium tracking-[0.1em] text-muted-foreground/60">
                expertise
              </span>
              <h2 className="font-display text-3xl font-black tracking-[-0.02em] md:text-4xl lg:text-5xl">
                Skills &amp; tools
              </h2>
              <div className="h-px w-16 bg-foreground/20" />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative rounded-sm border border-border/25 bg-card/20 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border/50 hover:bg-card/50 hover:shadow-lg hover:shadow-foreground/[0.04] active:scale-[0.98]"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="relative space-y-3">
                    <div className="flex items-center justify-between">
                      <skill.icon className="size-5 text-muted-foreground/70 transition-colors duration-200 group-hover:text-foreground" />
                      <span className="font-mono text-[11px] font-bold text-muted-foreground/40">
                        {skill.level}%
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight">
                      {skill.name}
                    </h3>
                    <div className="h-0.5 w-full overflow-hidden rounded-full bg-border/30">
                      <div
                        className="h-full rounded-full bg-foreground/50 transition-all duration-700 ease-out group-hover:w-full group-hover:bg-foreground/80"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="mx-auto max-w-5xl opacity-30" />

        <section
          id="projects"
          className="px-6 py-28 md:px-10 lg:px-16"
          aria-label="Projects"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 space-y-3">
              <span className="text-[11px] font-medium tracking-[0.1em] text-muted-foreground/60">
                portfolio
              </span>
              <h2 className="font-display text-3xl font-black tracking-[-0.02em] md:text-4xl lg:text-5xl">
                Featured projects
              </h2>
              <div className="h-px w-16 bg-foreground/20" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => {
                const Icon = project.icon
                return (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="relative h-full overflow-hidden border-border/25 bg-card/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-border/40 hover:shadow-xl hover:shadow-foreground/[0.04] active:scale-[0.99]">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border/25 bg-card/50 transition-all duration-200 group-hover:border-foreground/15 group-hover:bg-foreground/5">
                            <Icon className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-foreground" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-base font-bold tracking-tight transition-colors duration-200 group-hover:text-foreground">
                              {project.name}
                            </CardTitle>
                          </div>
                          <ExternalLink className="mt-1 size-3.5 shrink-0 text-muted-foreground/30 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground/60 group-hover:opacity-100" />
                        </div>
                      </CardHeader>
                      <CardContent className="-mt-1">
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground/70">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="border-b border-border/20 px-2 py-0 text-[10px] font-normal text-muted-foreground/50 transition-colors duration-200 group-hover:border-foreground/20 group-hover:text-foreground/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-[11px] font-medium text-muted-foreground/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <span>View</span>
                          <ArrowRight className="size-2.5" />
                        </div>
                      </CardFooter>
                    </Card>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <Separator className="mx-auto max-w-5xl opacity-30" />

        <section
          className="relative overflow-hidden px-6 py-32 md:px-10 lg:px-16"
          aria-label="Contact"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.025] blur-[120px]" />
            <div className="absolute bottom-0 left-0 size-[300px] rounded-full bg-foreground/[0.015] blur-[80px]" />
            <div className="absolute top-0 right-0 size-[250px] rounded-full bg-foreground/[0.015] blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-border/30 bg-card/30 px-4 py-1.5 backdrop-blur-sm">
              <Globe className="size-3.5 text-muted-foreground/70" />
              <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                Let&apos;s connect
              </span>
            </div>

            <h2 className="font-display text-4xl font-black tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Got a project idea?
              <br />
              <span className="animate-shimmer bg-gradient-to-r from-foreground via-muted-foreground/60 to-foreground bg-clip-text text-transparent">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-[1.7] text-muted-foreground md:text-lg">
              Check out my GitHub for more projects, contributions, and things
              I&apos;m currently working on.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="group relative gap-2.5 overflow-hidden bg-foreground px-8 text-base font-semibold text-background shadow-lg shadow-foreground/10 transition-all duration-200 hover:bg-foreground/90 hover:shadow-xl hover:shadow-foreground/15 active:translate-y-px active:scale-[0.97]"
              >
                <a
                  href="https://github.com/Ian-bug"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5 transition-transform duration-200 group-hover:rotate-12" />
                  github.com/Ian-bug
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row md:px-10">
          <p className="text-sm text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Ian
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Ian-bug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-muted-foreground/40 transition-colors duration-200 hover:text-muted-foreground/70"
            >
              GitHub
            </a>
            <span className="text-[11px] text-muted-foreground/30">
              Built with Next.js, shadcn/ui &amp; Tailwind CSS
            </span>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </footer>
    </div>
  )
}

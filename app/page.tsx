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
      "A powerful injection tool built with Rust for advanced systems programming and runtime manipulation.",
    url: "https://github.com/Ian-bug/ruin-injector",
    tech: ["Rust", "Systems Programming"],
    icon: Code2,
  },
  {
    name: "RainingKeysPython",
    description:
      "Interactive keyboard visualization project built with Python for real-time input feedback and keylogging display.",
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
  { name: "AI-Assisted Development", level: 92, icon: Sparkles },
  { name: "Git & GitHub", level: 87, icon: Github },
]

const stats = [
  { value: "10+", label: "Projects Built", icon: Zap },
  { value: "3+", label: "Languages", icon: Code2 },
  { value: "\u221e", label: "Curiosity", icon: Sparkles },
  { value: "24/7", label: "Building Mode", icon: Terminal },
]

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(1_0_0/0.04),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,oklch(1_0_0/0.02),transparent)]" />
      </div>

      {/* NAV */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="font-display text-lg font-bold tracking-tight">
            ian-bug
          </span>
          <span className="hidden text-xs tracking-widest text-muted-foreground/60 uppercase sm:inline-block">
            .dev
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
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

      <main className="relative z-10">
        {/* HERO */}
        <section className="flex min-h-[88vh] items-center px-6 pt-4 pb-16 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
              {/* Left content */}
              <div className="space-y-8">
                <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-border/40 bg-card/40 px-4 py-1.5 backdrop-blur-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40" />
                    <span className="relative inline-flex size-2 rounded-full bg-foreground" />
                  </span>
                  <span className="text-xs font-medium tracking-wide text-muted-foreground">
                    Available for projects
                  </span>
                </div>

                <div className="space-y-5">
                  <h1 className="animate-fade-up delay-100 font-display text-5xl leading-[1.05] font-black tracking-tight sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem]">
                    I&apos;m{" "}
                    <span className="animate-shimmer bg-gradient-to-r from-foreground via-muted-foreground/70 to-foreground bg-clip-text text-transparent">
                      Ian
                    </span>
                  </h1>
                  <p className="animate-fade-up delay-200 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
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

                <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="group relative gap-2 overflow-hidden bg-foreground px-7 font-semibold text-background transition-all hover:bg-foreground/90"
                  >
                    <a
                      href="https://github.com/Ian-bug"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4 transition-transform group-hover:scale-110" />
                      View GitHub
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gap-2 border-border/50 bg-transparent px-7 font-semibold backdrop-blur-sm hover:border-foreground/30 hover:bg-card"
                  >
                    <a href="#projects">
                      <Terminal className="size-4" />
                      See My Work
                    </a>
                  </Button>
                </div>

                <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] font-medium tracking-[0.15em] text-muted-foreground/50 uppercase">
                    Tech stack
                  </span>
                  <div className="mx-2 h-3 w-px bg-border/50" />
                  {["Python", "Rust", "TypeScript", "Next.js"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-border/30 bg-transparent px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Right: Avatar */}
              <div className="animate-scale-in delay-300 flex items-center justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-sm bg-foreground/5 blur-xl" />

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

                  <div className="animate-float absolute -bottom-3 -right-3 flex items-center gap-2 rounded-sm border border-border/40 bg-card/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
                    <Sparkles className="size-3.5 text-foreground" />
                    <span className="text-xs font-semibold tracking-wide">
                      Student Dev
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="border-y border-border/40 bg-card/20 backdrop-blur-sm">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:py-12">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="group flex flex-col items-center gap-2.5 text-center"
                >
                  <div className="flex size-9 items-center justify-center rounded-sm border border-border/30 bg-card/50 transition-all group-hover:border-foreground/20 group-hover:bg-foreground/5">
                    <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                  <div className="font-display text-2xl font-bold tracking-tight tabular-nums md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium tracking-[0.12em] text-muted-foreground/60 uppercase">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 space-y-3">
              <Badge
                variant="outline"
                className="border-border/30 bg-transparent px-3 py-1 text-[11px] font-medium tracking-wider text-muted-foreground"
              >
                Expertise
              </Badge>
              <h2 className="font-display text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                Skills &amp; Tools
              </h2>
              <div className="h-px w-16 bg-foreground/20" />
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-3 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative rounded-sm border border-border/30 bg-card/30 p-5 backdrop-blur-sm transition-all duration-400 hover:-translate-y-0.5 hover:border-border/60 hover:bg-card/60 hover:shadow-lg hover:shadow-foreground/[0.03]"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="relative space-y-3">
                    <div className="flex items-center justify-between">
                      <skill.icon className="size-5 text-muted-foreground/70 transition-colors group-hover:text-foreground" />
                      <span className="font-mono text-[11px] font-bold text-muted-foreground/50">
                        {skill.level}%
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight">
                      {skill.name}
                    </h3>
                    <div className="h-0.5 w-full overflow-hidden rounded-full bg-border/40">
                      <div
                        className="h-full rounded-full bg-foreground/60 transition-all duration-700 ease-out group-hover:w-full group-hover:bg-foreground/80"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="mx-auto max-w-5xl opacity-40" />

        {/* PROJECTS */}
        <section id="projects" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 space-y-3">
              <Badge
                variant="outline"
                className="border-border/30 bg-transparent px-3 py-1 text-[11px] font-medium tracking-wider text-muted-foreground"
              >
                Portfolio
              </Badge>
              <h2 className="font-display text-3xl font-black tracking-tight md:text-4xl lg:text-5xl">
                Featured Projects
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
                    <Card className="relative h-full overflow-hidden border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-border/50 hover:shadow-xl hover:shadow-foreground/[0.03]">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border/30 bg-card/60 transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-foreground/5">
                            <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-base font-bold tracking-tight transition-colors group-hover:text-foreground">
                              {project.name}
                            </CardTitle>
                          </div>
                          <ExternalLink className="mt-1 size-3.5 shrink-0 text-muted-foreground/40 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                        </div>
                      </CardHeader>
                      <CardContent className="-mt-1">
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground/80">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-border/25 bg-transparent px-2 py-0 text-[10px] font-normal text-muted-foreground/60 hover:border-foreground/20 hover:text-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="ml-auto flex items-center gap-1 text-[11px] font-medium text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
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

        <Separator className="mx-auto max-w-5xl opacity-40" />

        {/* CONTACT / CTA */}
        <section className="relative px-6 py-28 md:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="size-[450px] rounded-full bg-foreground/[0.02] blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/40 px-4 py-1.5 backdrop-blur-sm">
              <Globe className="size-3.5 text-muted-foreground" />
              <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
                Let&apos;s connect
              </span>
            </div>

            <h2 className="font-display text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Got a project idea?
              <br />
              <span className="animate-shimmer bg-gradient-to-r from-foreground via-muted-foreground/60 to-foreground bg-clip-text text-transparent">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg">
              Check out my GitHub for more projects, contributions, and things
              I&apos;m currently working on.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="group relative gap-2.5 overflow-hidden bg-foreground px-8 text-base font-semibold text-background shadow-lg shadow-foreground/10 transition-all hover:bg-foreground/90 hover:shadow-xl hover:shadow-foreground/15"
              >
                <a
                  href="https://github.com/Ian-bug"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5 transition-transform group-hover:rotate-12" />
                  github.com/Ian-bug
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row md:px-10">
          <p className="text-sm text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Ian. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[11px] text-muted-foreground/40">
              Built with Next.js, shadcn/ui &amp; Tailwind CSS
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Bevy Learning Journey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Following my journey learning Rust game development with the Bevy
              engine
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/blog/welcome"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Read the Blog
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg border border-border bg-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Learning in Public
              </h3>
              <p className="text-muted-foreground">
                Documenting every step of learning Bevy, from setup struggles to
                building actual projects.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Rust & ECS
              </h3>
              <p className="text-muted-foreground">
                Exploring Rust programming language and Entity Component System
                architecture through game development.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Node Editor Goal
              </h3>
              <p className="text-muted-foreground">
                Building a node editor system for visual scripting, workflows,
                and shader tools as the first major project.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Community Driven
              </h3>
              <p className="text-muted-foreground">
                Looking for interactions and feedback to stay motivated
                throughout this learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className="py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Latest Posts
          </h2>
          <div className="space-y-4">
            <a
              href="/blog/session-1"
              className="block rounded-lg border border-border bg-card p-6 hover:bg-accent transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Session 1 - ECS Basics
              </h3>
              <p className="text-muted-foreground mb-3">
                Learning Bevy's ECS by building a health regeneration system.
                Understanding Components, Systems, and Queries.
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Bevy
                </span>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  ECS
                </span>
              </div>
            </a>

            <a
              href="/blog/welcome"
              className="block rounded-lg border border-border bg-card p-6 hover:bg-accent transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Welcome - Starting the Journey
              </h3>
              <p className="text-muted-foreground mb-3">
                Introducing my Bevy learning series, goals, and the first
                project idea: a Node Editor system.
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Introduction
                </span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

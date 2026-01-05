export function BlogSidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-foreground">
            Recent Posts
          </h3>
          <nav className="space-y-2">
            <a
              href="/blog/session-1"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Session 2 - ECS Basics
            </a>
            <a
              href="/blog/welcome"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Session 1 - Getting Started
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-border">
          <h3 className="font-semibold text-sm text-foreground mb-3">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Bevy
            </span>
            <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Rust
            </span>
            <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              ECS
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

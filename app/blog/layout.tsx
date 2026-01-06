import React from "react";
import { BlogSidebar, MobileBlogSidebar } from "@/components/BlogSidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:hidden mb-4">
        <MobileBlogSidebar />
      </div>

      <div className="flex gap-8 max-w-7xl mx-auto">
        <BlogSidebar />

        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-3xl">
            <article className="rounded-lg border border-border bg-card p-8 md:p-12 shadow-sm">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {children}
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}

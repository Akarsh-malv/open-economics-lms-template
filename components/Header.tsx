"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { COURSES } from "@/lib/courseData";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-bold text-base text-foreground">Open Economics</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md hover:bg-muted/60 transition-colors"
              >
                {course.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <DarkModeToggle />
            {COURSES[0] && (
              <Link
                href={`/learn/${COURSES[0].slug}/${COURSES[0].modules[0]?.lessons[0]?.id}`}
                className="hidden sm:inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Learning
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

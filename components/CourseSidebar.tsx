"use client";

import Link from "next/link";
import { BookOpen, CheckCircle2, Circle, ChevronDown, Menu, X } from "lucide-react";
import { Course } from "@/lib/courseData";
import { useState } from "react";

interface Props {
  course: Course;
  currentLessonId: string;
  progressPct: number;
  completedCount: number;
  totalLessons: number;
}

export default function CourseSidebar({
  course,
  currentLessonId,
  progressPct,
  completedCount,
  totalLessons,
}: Props) {
  const [open, setOpen] = useState(false);

  const sidebar = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <Link
          href="/"
          className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          <BookOpen className="h-5 w-5 text-primary shrink-0" />
          <span className="font-bold text-sm text-foreground">Open Economics</span>
        </Link>
        <p className="text-xs font-semibold text-foreground line-clamp-2 mb-3">{course.title}</p>
        {/* Progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{completedCount}/{totalLessons} lessons</span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Modules & Lessons */}
      <div className="flex-1 overflow-y-auto py-2">
        {course.modules.map((mod, mi) => (
          <ModuleSection
            key={mod.id}
            mod={mod}
            modIndex={mi}
            courseSlug={course.slug}
            currentLessonId={currentLessonId}
            onNavigate={() => setOpen(false)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-3.5 left-3.5 z-30 flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border shadow-sm md:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-background border-r border-border transform transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-md hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        {sidebar}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-72 md:shrink-0 border-r border-border bg-background h-full flex-col">
        {sidebar}
      </div>
    </>
  );
}

function ModuleSection({
  mod,
  modIndex,
  courseSlug,
  currentLessonId,
  onNavigate,
}: {
  mod: Course["modules"][number];
  modIndex: number;
  courseSlug: string;
  currentLessonId: string;
  onNavigate: () => void;
}) {
  const hasActive = mod.lessons.some((l) => l.id === currentLessonId);
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-center gap-2.5 px-4 py-3 hover:bg-muted/40 transition-colors text-left"
      >
        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${hasActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
          {modIndex + 1}
        </span>
        <span className="flex-1 text-xs font-semibold text-foreground/80 leading-tight">{mod.title}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="pb-1">
          {mod.lessons.map((lesson) => {
            const isActive = lesson.id === currentLessonId;
            return (
              <Link
                key={lesson.id}
                href={`/learn/${courseSlug}/${lesson.id}`}
                onClick={onNavigate}
                className={`flex items-start gap-2.5 px-4 py-2.5 mx-1 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {lesson.completed ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600 fill-emerald-600 text-white" />
                ) : (
                  <Circle className={`h-4 w-4 shrink-0 mt-0.5 ${isActive ? "text-primary" : "text-border"}`} />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`text-xs leading-snug font-medium ${isActive ? "text-primary" : ""}`}>
                    {lesson.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{lesson.duration}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

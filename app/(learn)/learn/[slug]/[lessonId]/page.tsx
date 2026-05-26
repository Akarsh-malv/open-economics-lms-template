import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, ChevronRight, BookOpen, Target, Hash, BarChart2, Lightbulb, HelpCircle, ArrowLeft } from "lucide-react";
import { getCourse, getLesson, getAllLessons, getAdjacentLessons } from "@/lib/courseData";
import CourseSidebar from "@/components/CourseSidebar";
import DarkModeToggle from "@/components/DarkModeToggle";

interface Props {
  params: Promise<{ slug: string; lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { slug, lessonId } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const found = getLesson(slug, lessonId);
  if (!found) notFound();

  const { lesson, module: currentModule } = found;
  const allLessons = getAllLessons(course);
  const { prev, next } = getAdjacentLessons(course, lessonId);

  const completedCount = allLessons.filter((l) => l.lesson.completed).length;
  const progressPct = Math.round((completedCount / allLessons.length) * 100);

  const c = lesson.content;

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <CourseSidebar
        course={course}
        currentLessonId={lessonId}
        progressPct={progressPct}
        completedCount={completedCount}
        totalLessons={allLessons.length}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-14 border-b border-border flex items-center justify-between px-5 shrink-0 bg-background/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href={`/courses/${slug}`}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:block">Course</span>
            </Link>
            <span className="text-border hidden sm:block">·</span>
            <span className="text-sm text-muted-foreground truncate hidden sm:block">{currentModule.title}</span>
            <span className="text-border hidden sm:block">·</span>
            <span className="text-sm font-medium truncate">{lesson.title}</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-muted-foreground hidden md:block">
              {completedCount}/{allLessons.length} complete
            </span>
            <DarkModeToggle />
          </div>
        </header>

        {/* Scrollable lesson content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-32">
            {/* Lesson header */}
            <div className="mb-10">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                {currentModule.title}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
                {lesson.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  {lesson.duration} read
                </span>
                {lesson.completed && (
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 fill-emerald-600 text-white" />
                    Completed
                  </span>
                )}
              </div>
            </div>

            {/* Learning Objectives */}
            {c.objectives?.length > 0 && (
              <section className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm uppercase tracking-wide text-primary">Learning Objectives</h2>
                </div>
                <ul className="space-y-2">
                  {c.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold">
                        {i + 1}
                      </span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Key Terms */}
            {c.keyTerms?.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Hash className="h-4 w-4 text-muted-foreground" />
                  <h2 className="text-lg font-bold">Key Terms</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {c.keyTerms.map((kt) => (
                    <div key={kt.term} className="rounded-lg border border-border bg-card p-4">
                      <p className="font-semibold text-sm text-foreground mb-1">{kt.term}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{kt.definition}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Body content */}
            {c.body?.map((section, i) => (
              <section key={i} className="mb-6">
                {section.heading && (
                  <h2 className="text-lg font-bold text-foreground mb-3">{section.heading}</h2>
                )}
                <p className="text-base text-foreground/90 leading-relaxed">{section.text}</p>
              </section>
            ))}

            {/* Graph Placeholder */}
            {c.graphPlaceholder && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  <h2 className="text-lg font-bold">Diagram</h2>
                </div>
                <div className="rounded-xl border-2 border-dashed border-border bg-muted/30 p-8 text-center">
                  <BarChart2 className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="font-semibold text-foreground mb-2">{c.graphPlaceholder.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                    {c.graphPlaceholder.description}
                  </p>
                </div>
              </section>
            )}

            {/* Formulas */}
            {c.formulas?.length && c.formulas.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold text-muted-foreground">∑</span>
                  <h2 className="text-lg font-bold">Key Formulas</h2>
                </div>
                <div className="space-y-3">
                  {c.formulas.map((f) => (
                    <div key={f.name} className="rounded-xl border border-border bg-card overflow-hidden">
                      <div className="px-5 py-3 border-b border-border bg-muted/40">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{f.name}</p>
                      </div>
                      <div className="px-5 py-4">
                        <code className="block text-center font-mono text-base font-semibold text-primary bg-primary/5 rounded-lg px-4 py-3 mb-3">
                          {f.formula}
                        </code>
                        <p className="text-sm text-muted-foreground">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Examples */}
            {c.examples?.length && c.examples.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <h2 className="text-lg font-bold">Worked Examples</h2>
                </div>
                <div className="space-y-4">
                  {c.examples.map((ex, i) => (
                    <div key={i} className="rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/20 p-5">
                      <p className="font-semibold text-sm text-amber-800 dark:text-amber-300 mb-2">
                        Example: {ex.title}
                      </p>
                      <p className="text-sm text-foreground/90 leading-relaxed">{ex.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Practice Questions */}
            {c.practiceQuestions?.length && c.practiceQuestions.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  <h2 className="text-lg font-bold">Practice Questions</h2>
                </div>
                <div className="space-y-4">
                  {c.practiceQuestions.map((pq, i) => (
                    <details key={i} className="group rounded-xl border border-border bg-card overflow-hidden">
                      <summary className="flex cursor-pointer items-start gap-3 p-5 select-none hover:bg-muted/30 transition-colors">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium text-foreground">{pq.question}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 ml-auto mt-0.5 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 pt-0">
                        <div className="border-t border-border pt-4 pl-9">
                          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2">Answer</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{pq.answer}</p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Prev / Next navigation */}
            <div className="flex items-center justify-between gap-4 pt-8 border-t border-border mt-4">
              {prev ? (
                <Link
                  href={`/learn/${slug}/${prev.lesson.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                  <div className="text-left hidden sm:block">
                    <p className="text-xs text-muted-foreground">Previous</p>
                    <p className="text-sm font-medium text-foreground line-clamp-1">{prev.lesson.title}</p>
                  </div>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/learn/${slug}/${next.lesson.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-muted-foreground">Next</p>
                    <p className="text-sm font-medium text-foreground line-clamp-1">{next.lesson.title}</p>
                  </div>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

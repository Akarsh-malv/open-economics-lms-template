import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, ChevronDown, ChevronRight, Play, GraduationCap } from "lucide-react";
import { getCourse, getAllLessons } from "@/lib/courseData";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const allLessons = getAllLessons(course);
  const firstLesson = allLessons[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[320px] w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            >
              ← Back to courses
            </Link>
            <span className="block text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">
              {course.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mb-3 leading-tight">
              {course.title}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl">{course.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <section>
              <h2 className="text-xl font-bold mb-3">About This Course</h2>
              <p className="text-muted-foreground leading-relaxed">{course.description}</p>
            </section>

            {/* Instructor */}
            <section className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">Instructor</p>
                <p className="font-bold text-foreground">{course.instructor}</p>
                <p className="text-sm text-muted-foreground">{course.instructorTitle}</p>
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-xl font-bold mb-5">Course Curriculum</h2>
              <div className="space-y-4">
                {course.modules.map((mod, mi) => (
                  <div key={mod.id} className="border border-border rounded-xl overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-4 bg-muted/50">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {mi + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm">{mod.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {mod.lessons.length} lesson{mod.lessons.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                    </div>
                    <div className="divide-y divide-border">
                      {mod.lessons.map((lesson, li) => (
                        <Link
                          key={lesson.id}
                          href={`/learn/${course.slug}/${lesson.id}`}
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-muted/30 transition-colors group"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border group-hover:border-primary text-xs text-muted-foreground group-hover:text-primary transition-colors">
                            {li + 1}
                          </span>
                          <span className="flex-1 text-sm text-foreground">{lesson.title}</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {lesson.duration}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: CTA card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="relative h-36 overflow-hidden">
                <Image src={course.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-emerald-600 mb-1">Free</div>
                <p className="text-sm text-muted-foreground mb-5">Full access, no account required</p>

                {firstLesson && (
                  <Link
                    href={`/learn/${course.slug}/${firstLesson.lesson.id}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors mb-3"
                  >
                    Start Course
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                )}

                <div className="space-y-2.5 mt-5 border-t border-border pt-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 text-primary shrink-0" />
                    {allLessons.length} lessons across {course.modules.length} modules
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    Self-paced learning
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                    Certificate of completion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

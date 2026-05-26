import Link from "next/link";
import Image from "next/image";
import { BookOpen, BarChart2, TrendingUp, Users, Clock, ChevronRight, Star } from "lucide-react";
import { COURSES } from "@/lib/courseData";

export default function HomePage() {
  const totalLessons = COURSES.reduce(
    (acc, c) => acc + c.modules.reduce((a, m) => a + m.lessons.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
              Free, rigorous, university-level content
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Master Economics.
              <br />
              <span className="text-sky-300">No Tuition Required.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              Explore supply and demand, elasticity, market structures, and macroeconomic
              theory through interactive lessons built for serious learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/courses/${COURSES[0].slug}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Learning Free
                <ChevronRight className="h-4 w-4" />
              </Link>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-muted/40">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, label: "Courses", value: String(COURSES.length) },
              { icon: BarChart2, label: "Lessons", value: String(totalLessons) },
              { icon: Users, label: "Learners", value: "12,400+" },
              { icon: TrendingUp, label: "Completion Rate", value: "87%" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Curriculum</p>
            <h2 className="text-3xl font-bold text-foreground">Featured Courses</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => {
            const lessonCount = course.modules.reduce(
              (acc, m) => acc + m.lessons.length,
              0
            );
            return (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    Free
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {lessonCount} lessons
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {course.modules.length} modules
                    </span>
                    <span className="ml-auto font-semibold text-emerald-600 text-sm">
                      Free
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to start your economics journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            No sign-up required. Start reading, learning, and testing your knowledge immediately.
          </p>
          <Link
            href={`/courses/${COURSES[0].slug}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Begin First Course
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

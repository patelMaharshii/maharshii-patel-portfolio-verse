import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpenCheck, CalendarClock, ChevronLeft } from "lucide-react";

const setMeta = (title: string, description: string, canonicalPath: string) => {
  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", description);
  else {
    const m = document.createElement("meta");
    m.name = "description";
    m.content = description;
    document.head.appendChild(m);
  }
  const existingCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  const canonical = existingCanonical ?? document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", window.location.origin + canonicalPath);
  if (!existingCanonical) document.head.appendChild(canonical);
};

const upcomingCourses = [
  { code: "COMPSCI 3305B", title: "Operating Systems" },
  { code: "COMPSCI 3340B", title: "Analysis of Algorithms I" },
  { code: "COMPSCI 4453B", title: "Reinforcement Learning" },
];

const pastCourses = [
  { code: "COMPSCI 3000A", title: "Introduction to Machine Learning" },
  { code: "COMPSCI 3307A", title: "Object-Oriented Design & Analysis" },
  { code: "COMPSCI 3319A", title: "Databases I" },
  { code: "COMPSCI 3342A", title: "Organization of Programming Languages" },
  { code: "COMPSCI 2210A", title: "Data Structures & Algorithms" },
  { code: "COMPSCI 2208B", title: "Intro to Computer Organization & Architecture" },
  { code: "COMPSCI 2211A", title: "Software Tools & Systems Programming" },
  { code: "COMPSCI 2212B", title: "Introduction to Software Engineering" },
  { code: "COMPSCI 2209A", title: "Applied Logic for Computer Science" },
  { code: "COMPSCI 2214A", title: "Discrete Structures for Computer Science" },
  { code: "DATASCI 1000A", title: "Data Science Concepts" },
  { code: "DATASCI 2000B", title: "Introduction to Data Science" },
  { code: "STAT 2244A", title: "Statistics for Science" },
  { code: "CALCULUS 1000A", title: "Calculus I" },
  { code: "CALCULUS 1301B", title: "Calculus II" },
  { code: "CALCULUS 2502A", title: "Advanced Calculus I" },
  { code: "MATH 1228B", title: "Methods of Finite Mathematics" },
  { code: "MATH 1600A", title: "Linear Algebra I" },
];

const AllCourses: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setMeta(
      "Relevant Coursework | CS & Math",
      "Explore upcoming (Fall/Winter 2025) and completed CS & Math coursework.",
      "/courses"
    );
  }, []);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6 py-10 max-w-4xl">
        <header className="mb-6 flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate(-1)} aria-label="Go back">
            <ChevronLeft />
            Back
          </Button>
          <h1 className="text-3xl font-semibold tracking-tight">Relevant Coursework</h1>
        </header>

        <section aria-labelledby="upcoming-heading" className="mt-4">
          <div className="flex items-center gap-2 mb-3">
            <CalendarClock className="opacity-80" />
            <h2 id="upcoming-heading" className="text-xl font-medium">Upcoming Courses (Fall/Winter 2025)</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-medium">Planned CS & Math</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-3">
                {upcomingCourses.map((c) => (
                  <li key={c.code} className="p-3 rounded-md border bg-card text-card-foreground">
                    <div className="font-medium">{c.code}</div>
                    <div className="text-sm text-muted-foreground">{c.title}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-8" />

        <section aria-labelledby="past-heading">
          <div className="flex items-center gap-2 mb-3">
            <BookOpenCheck className="opacity-80" />
            <h2 id="past-heading" className="text-xl font-medium">Completed Courses</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <ul className="grid sm:grid-cols-2 gap-3">
                {pastCourses.map((c) => (
                  <li key={c.code} className="p-3 rounded-md border bg-card text-card-foreground">
                    <div className="font-medium">{c.code}</div>
                    <div className="text-sm text-muted-foreground">{c.title}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AllCourses;

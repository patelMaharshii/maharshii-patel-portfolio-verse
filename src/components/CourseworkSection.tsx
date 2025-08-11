import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CourseworkSection: React.FC = () => {
  const navigate = useNavigate();
  const anim = useScrollAnimation();

  return (
    <section aria-labelledby="coursework-heading" className="mt-16" ref={anim.ref as React.RefObject<HTMLElement>}>
      <header className={`mb-6 ${anim.className}`}>
        <h2 id="coursework-heading" className="text-2xl font-semibold tracking-tight">
          Relevant Coursework
        </h2>
        <p className="text-muted-foreground mt-1">
          Core Computer Science and Mathematics courses
        </p>
      </header>

      <div className={`grid gap-4 sm:grid-cols-2 ${anim.className}`}>
        <Card className="hover-scale">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <BookOpen className="opacity-80" />
              Data Structures & Algorithms (COMPSCI 2210A)
            </CardTitle>
            <CardDescription>
              Algorithm analysis, stacks/queues, trees, hashing, graphs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Mastering time/space complexity and core data structures.
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base">
              <Cpu className="opacity-80" />
              Intro to Computer Organization & Architecture (COMPSCI 2208B)
            </CardTitle>
            <CardDescription>
              Instruction sets, memory hierarchy, CPU pipelines, assembly.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Bridging low-level systems with high-level software design.
          </CardContent>
        </Card>
      </div>

      <div className={`mt-6 mb-6 flex justify-center ${anim.className}`}>
        <Button
          variant="outline"
          className="border-slate-400 text-slate-700 hover:bg-slate-100 font-mono"
          onClick={() => navigate("/courses")}
          aria-label="View all coursework"
        >
          View All Courses →
        </Button>
      </div>
    </section>
  );
};

export default CourseworkSection;

"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import WordRotate from "@/components/ui/word-rotate";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="flex flex-col items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32 ">
        <div className="text-center space-y-8 w-full">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Try now</Badge>
            </span>
            <span>One click deployment</span>
          </Badge>

          <div className="w-full px-2 text-center text-3xl md:text-6xl font-normal leading-tight">
            <h1>
              Crawl for AI Limitlessly
              <div>
                <WordRotate className="text-transparent px-2 bg-gradient-to-r from-[#6366f1] to-primary bg-clip-text" 
                duration={3000}
                words={["Deploy in Seconds","Avoid Detection","Full Browser Control","Extract Structured Data", "Real-time performance", "Runs everywhere!"]}/>
              </div>
            </h1>
          </div>

          <p className="max-w-screen-md mx-auto text:xs md:text-xl font-normal">
            {`GitHub's #1 Trending AI friendly crawler. 
            Delivers Structured, LLM-ready data from Human generated web content. 
            Lightning Fast, Runs Anywhere - All features Free and Open-source.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-3/4 md:w-1/4 font-bold group/arrow">
              Start crawling for Free
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
            <Button
              asChild
              variant="secondary"
              className="w-3/4 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/unclecode/crawl4ai"
                target="_blank"
              >
                Github respository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

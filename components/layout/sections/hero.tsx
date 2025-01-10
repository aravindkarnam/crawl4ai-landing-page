"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Try now</Badge>
            </span>
            <span>One click deployment</span>
          </Badge>

          <div className="w-full px-2 text-center text-4xl md:text-6xl font-bold leading-loose">
            <h1>
              Deploy anywhere in seconds
              <div className="mt-4">
                <span className="text-transparent px-2 bg-gradient-to-r from-[#6366f1] to-primary bg-clip-text">
                  Crawl without Boundaries
                </span>
              </div>
            </h1>
          </div>

          <p className="max-w-screen-md mx-auto text-xl font-light">
            {`GitHub's #1 trending crawler that delivers structured AI-ready data. Runs anywhere, Scales everywhere - All features free and open source`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Start crawling for free
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
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

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/30 rounded-full blur-3xl"></div>
          <iframe width="1080" height="720" src="https://www.youtube.com/embed/Ex3EpKxlMO0?si=VB0KOevgnAvB33gM" title="YouTube video player"
          className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

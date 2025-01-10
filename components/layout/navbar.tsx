"use client";
import { ChevronsDown, Github, Menu, LucideIcon, FileCheck2, Pickaxe, Globe, Waypoints, ShipWheel, Rocket, RefreshCcwDot, Bug, Telescope, LifeBuoy, Book, Wrench, ExternalLink, ChevronRight, ChevronDown, Star, Shield } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
  newTab: boolean;
}

interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

interface DeveloperProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  href: string;
}

const routeList: RouteProps[] = [
  {
    href: "/#contact",
    label: "Enterprise",
    newTab: false
  },
  {
    href: "/#community",
    label: "Community",
    newTab: false
  },
  {
    href: "https://docs.crawl4ai.com",
    label: "Docs",
    newTab: true
  },
  {
    href: "/#pricing",
    label: "Pricing",
    newTab: false
  },
  {
    href: "https://opencollective.com/",
    label: "Sponsor",
    newTab: true
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Markdown Generation",
    description: "Creates smart, concise Markdown optimized for RAG and fine-tuning applications.",
    icon: FileCheck2
  },
  {
    title: "Structured Data Extraction",
    description:
      "Supports all LLMs. Heuristic algorithms for intelligent extraction for simple applications.",
    icon: Pickaxe
  },
  {
    title: "Browser Integration",
    description:
      "Remote Browser Control. Session management. Support for proxies.",
    icon: Globe
  },
  {
    title: "Crawler & Scraper",
    description:
      "Smart website traversal for comprehensive nested page extraction.",
    icon: Waypoints
  },
  {
    title: "Stealth mode",
    description: "Avoid bot detection by mimicking real users.",
    icon: Shield
  },
  {
    title: "Playground",
    description:
      "Web UI for testing, comparing strategies with AI assistance",
    icon: ShipWheel,
    badge: "Coming soon!"
  },
];

const developerList: DeveloperProps[] = [
  {
    title: "Changelog",
    description:
      "New updates and feature improvements",
    icon: RefreshCcwDot,
    href: 'https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md'
  },
  {
    title: "Report Bug",
    description:
      "Came across a bug? Report here ->",
    icon: Bug,
    href: 'https://github.com/unclecode/crawl4ai/issues/new'
  },
  {
    title: "Help",
    description:
      "Have a question? or need Help? Ask here ->",
    icon: LifeBuoy,
    href: 'https://forums.crawl4ai.com',
  },
  {
    title: "Our Roadmap",
    description:
      "Have a great feature idea? Suggest here ->",
    icon: Telescope,
    href: 'https://features.crawl4ai.com',
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
        Crawl4AI
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Crawl4AI
                  </Link>
                </SheetTitle>
              </SheetHeader>


              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-sm hover:text-primary">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col w-[500px] p-4">
                <ul className="flex flex-col">
                  {featureList.map(({ title, description, icon: Icon, badge }) => (
                    <li
                      key={title}
                    >
                      <NavigationMenuLink asChild>
                        <a className="rounded-md p-3 text-sm flex flex-row group hover:cursor-pointer">
                          <div className="flex w-1/6 aspect-square mr-4 items-center justify-center rounded-lg bg-secondary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex flex-col w-5/6">
                            <div className="flex flex-row items-center justify-between">
                              <p className="mb-1 font-semibold leading-none text-foreground text-sm flex flex-row justify-center items-center">
                                {title}
                                <ChevronDown className="h-5 w-5 transform opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-90" />
                              </p>
                              {badge && <Badge variant="secondary" className="text-sm font-normal mb-1">{badge}</Badge>}
                            </div>
                            <p className="line-clamp-2 text-muted-foreground text-sm">
                              {description}
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-sm hover:text-primary">
              Developers
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-[800px] flex-row p-4">
                <ul className="flex flex-col w-3/5">
                  {developerList.map(({ title, description, icon: Icon, badge, href }) => (
                    <li
                      key={title}
                    >
                      <NavigationMenuLink asChild>
                        <a className="rounded-md p-3 text-sm flex flex-row group" href={href} target="_blank">
                          <div className="flex w-1/6 aspect-square mr-4 items-center justify-center rounded-lg bg-secondary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex flex-col w-5/6">
                            <div className="flex flex-row items-center justify-between">
                              <p className="mb-1 font-semibold leading-none text-foreground flex flex-row justify-center items-center">
                                {title}
                                <ChevronDown className="h-5 w-5 transform opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-90" />
                              </p>
                              {badge && <Badge className="text-xs font-normal mb-1">{badge}</Badge>}
                            </div>
                            <p className="line-clamp-3 text-muted-foreground text-sm">
                              {description}
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col w-2/5">
                  <div
                    className="flex h-1/2 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-8 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-sm font-medium flex flex-col">
                      <Wrench className="h-6 w-6 mb-2" />
                      Installation
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground mb-2">
                      Crawl4AI offers flexible installation options to suit various use cases
                    </p>
                    <Separator className="mb-4 bg-muted-foreground" decorative />
                    <NavigationMenuLink>
                      <a className="text-sm leading-tight text-muted-foreground flex flex-row mb-2 group" href="https://pypi.org/project/Crawl4AI/" target="_blank">
                        Using PIP 🐍 <ExternalLink className="h-4 w-4 ml-2 hidden group-hover:inline" />
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <a className="text-sm leading-tight text-muted-foreground flex flex-row mb-2 group" href="https://hub.docker.com/r/unclecode/crawl4ai/tags" target="_blank">
                        Using Docker 🐳 <ExternalLink className="h-4 w-4 ml-2 hidden group-hover:inline" />
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <a className="text-sm leading-tight text-muted-foreground flex flex-row group" href="https://colab.research.google.com/drive/1SgRPrByQLzjRfwoRNq1wSGE9nYY_EE8C?usp=sharing" target="_blank">
                        Try this Notebook 📕 <ExternalLink className="h-4 w-4 ml-2 hidden group-hover:inline" />
                      </a>
                    </NavigationMenuLink>
                  </div>
                  <div
                    className="flex h-1/2 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-8 no-underline outline-none focus:shadow-md mt-4"
                  >
                    <Rocket className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-base font-medium">
                      One-Click Deployment
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground mb-2">
                      Deploy your own instance of Crawl4AI with one click
                    </p>
                    <Separator className="mb-4 bg-muted-foreground" decorative />
                    <NavigationMenuLink asChild>
                      <a href="/">Try now</a>
                    </NavigationMenuLink>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-sm px-2 hover:text-primary">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/unclecode/crawl4ai"
            target="_blank"
          >
            <Github className="size-5" />
            <Badge variant="outline" className="ml-2 h-full">23.7K <Star className="size-4 ml-2 text-orange-300" /></Badge>
          </Link>
        </Button>
      </div>
    </header>
  );
};

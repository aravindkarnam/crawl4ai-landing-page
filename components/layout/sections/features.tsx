import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "FileCheck2",
    title: "Markdown Generation",
    description:
      "Creates smart, concise Markdown optimized for RAG and fine-tuning applications.",
  },
  {
    icon: "Pickaxe",
    title: "Structured Data Extraction",
    description:
      "Supports all LLMs. Heuristic algorithms for intelligent extraction for simple applications to avoid reliance on costly LLMs.",
  },
  {
    icon: "Globe",
    title: "Browser Integration",
    description:
      "Remote Browser Control. Session management. Support for proxies.",
  },
  {
    icon: "Waypoints",
    title: "Crawler & Scraper",
    description:
      "Smart website traversal for comprehensive nested page extraction.",
  },
  {
    icon: "Shield",
    title: "Stealth mode",
    description:
      "Avoid bot detection by mimicking real users.",
  },
  {
    icon: "ShipWheel",
    title: "Playground",
    description:
      "Web UI for testing, comparing strategies with AI assistance.",
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Free and open-source. Now and forever!
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        No hidden features, No strings attached 😉.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

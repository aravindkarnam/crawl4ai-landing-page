import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Zap",
    title: "Blazing Fast",
    description:
      "Delivers results 6x faster with real-time, cost-efficient performance.",
  },
  {
    icon: "Bird",
    title: "Open Source & Deployable",
    description:
      "Fully open-source with no API keys—ready for Docker and cloud integration.",
  },
  {
    icon: "HandHeart",
    title: "Thriving Community",
    description:
      "Actively maintained by a vibrant community!",
  },
  {
    icon: "Bot",
    title: "Built for AI & LLMs",
    description:
      "AI-ready web crawling tailored for LLMs, AI agents, and data pipelines.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why Crawl4AI?</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Open-source LLM Friendly Web Crawler & Scraper.
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We ship new features and bug fixes every two weeks with collaborations from a thriving community. Our roadmap is public. Help and support is available 
            right at your fingertips through forums and our discord community!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

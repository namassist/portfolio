import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import * as si from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface TechStack {
  name: string;
  icon: string;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    path: string;
    techStack: TechStack[];
    repository: string;
    demo: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderIcons = (techStack: { name: string; icon: string }[]) => {
    return techStack.map((tech) => {
      const IconComponent = si[tech.icon as keyof typeof si];
      return IconComponent ? (
        <TooltipProvider key={tech.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <IconComponent className="h-6 w-6 dark:text-zinc-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : null;
    });
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.path}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-900 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card path={item.path}>
            <CardTitle demo={item.demo} repository={item.repository}>
              {item.title}
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex items-center gap-3 mt-4">
              {renderIcons(item.techStack)}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  path,
  children,
}: {
  className?: string;
  path: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-background border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <Image
        src={path}
        alt={path}
        width={1000}
        height={1000}
        priority
        className={cn(
          "rounded-t-2xl object-cover h-20 sm:h-40 w-full bg-cover relative -mt-1",
          className
        )}
      />
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  demo,
  repository,
  children,
}: {
  className?: string;
  demo: string;
  repository: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between items-center">
      <h4
        className={cn(
          "text-zinc-100 font-bold tracking-wide mt-2 max-w-60 whitespace-nowrap text-ellipsis overflow-hidden",
          className
        )}
      >
        {children}
      </h4>
      <div className="flex items-center gap-2 dark:text-zinc-400">
        <Link
          href={repository !== "" ? repository : "#"}
          className="hover:text-blue-500 z-50 duration-300"
        >
          <si.SiGithub className="h-5 w-5" />
        </Link>
        <Link
          href={demo !== "" ? demo : "#"}
          className="hover:text-blue-500 z-50 duration-300"
        >
          <ExternalLink className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

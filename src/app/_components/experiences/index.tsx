import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import SectionTitle from "@/components/section-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSectionInView } from "@/lib/hooks";
import { working, organization, certifications } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Experiences() {
  const { ref } = useSectionInView("Experiences");

  const workingContent = working.map((item, index) => ({
    content: (
      <div
        key={index}
        className="pl-20 pr-4 w-full leading-relaxed text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal"
      >
        <h4 className="text-base md:text-lg font-bold mb-2">
          {item.role} at <span className="text-[#2c98f8]">{item.company}</span>
        </h4>
        <div className="flex justify-start items-center space-x-2 h-5 mb-4">
          <Badge variant="blue">{item.job_type}</Badge>
          <Separator orientation="vertical" className="bg-zinc-400" />
          <p>
            {item.start_at} - {item.end_at}
          </p>
        </div>
        <ul className="list-disc list-outside space-y-2 ms-4">
          {item.description.length > 0 &&
            item.description.map((desc, index) => (
              <li key={index} className="leading-relaxed">
                {desc}
              </li>
            ))}
        </ul>
      </div>
    ),
  }));

  const organizationContent = organization.map((item, index) => ({
    content: (
      <div
        key={index}
        className="pl-20 pr-4 w-full leading-relaxed text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal"
      >
        <h4 className="text-base md:text-lg font-bold mb-2">
          {item.role} at <span className="text-[#2c98f8]">{item.company}</span>
        </h4>
        <div className="flex justify-start items-center space-x-2 h-5 mb-4">
          <Badge variant="blue">{item.job_type}</Badge>
          <Separator orientation="vertical" className="bg-zinc-400" />
          <p>
            {item.start_at} - {item.end_at}
          </p>
        </div>
        <ul className="list-disc list-outside space-y-2 ms-4">
          {item.description.length > 0 &&
            item.description.map((desc, index) => (
              <li key={index} className="leading-relaxed">
                {desc}
              </li>
            ))}
        </ul>
      </div>
    ),
  }));

  const certificationContent = certifications.map((item, index) => ({
    content: (
      <div
        key={index}
        className="pl-20 pr-4 w-full leading-relaxed text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal"
      >
        <Link
          href={item?.url_credential}
          target="_blank"
          className="mb-2 flex items-center gap-1 hover:underline"
        >
          <h4 className="text-base sm:text-lg font-bold">{item.name}</h4>
          <ExternalLink className="w-3 h-3" />
        </Link>
        <div className="flex justify-start items-center space-x-2 h-5 mb-4">
          <Badge variant="blue">{item.company}</Badge>
          <Separator orientation="vertical" className="bg-zinc-400" />
          <p>Earned on {item.earned}</p>
        </div>
        <div className="grid grid-cols-2">
          <Image
            src={item.path || "/certification_frontend_hackerrank.png"}
            alt="certification frontend hackerrank"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] bg-cover"
          />
        </div>
      </div>
    ),
  }));

  return (
    <motion.section
      ref={ref}
      className="w-full pt-32 pb-10 overflow-hidden"
      id="experiences"
    >
      <div className="container mx-auto lg:px-24">
        <SectionTitle title="experiences" />
        <Tabs defaultValue="working" className="mt-14">
          <TabsList className="w-3/12">
            <TabsTrigger value="working" className="w-[calc(100%_-_4px)]">
              Working Experiences
            </TabsTrigger>
            <TabsTrigger
              value="organizational"
              className="w-[calc(100%_-_4px)]"
            >
              Organizational Experiences
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="w-[calc(100%_-_4px)]"
            >
              Profesional Certifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="working" className="w-9/12">
            <div className="animate-fade-left">
              <Timeline data={workingContent} />
            </div>
          </TabsContent>
          <TabsContent value="organizational" className="w-9/12">
            <div className="animate-fade-left">
              <Timeline data={organizationContent} />
            </div>
          </TabsContent>
          <TabsContent value="certifications" className="w-9/12">
            <div className="animate-fade-left">
              <Timeline data={certificationContent} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}

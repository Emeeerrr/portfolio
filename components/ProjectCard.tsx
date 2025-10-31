"use client";

import Link from "next/link";
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";
import { useTheme } from "next-themes";
import React from "react";

type ProjectCardProps = {
  title: string;
  kicker?: string;
  image: string;
  href?: string;
  cta?: string;
  className?: string;
};

export default function ProjectCard({
  title,
  kicker,
  image,
  href,
  cta = "View project",
  className = "",
}: ProjectCardProps) {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";
  const textColorTitle = isDark ? "text-white" : "text-black";
  const textColorKicker = isDark ? "text-white/70" : "text-black/60";

  return (
    <Card className={`relative aspect-square overflow-hidden ${className}`}>
      {/* Encabezado superpuesto */}
      <CardHeader className="absolute z-10 top-2 left-2 flex-col items-start gap-1">
        {kicker ? (
          <p className={`text-[10px] tracking-widest ${textColorKicker} uppercase font-bold`}>
            {kicker}
          </p>
        ) : null}
        <h4 className={`${textColorTitle} font-semibold text-lg drop-shadow`}>
          {title}
        </h4>
      </CardHeader>

      {/* Imagen de fondo 1:1 */}
      <Image
        removeWrapper
        alt={title}
        className="z-0 h-full w-full object-cover"
        src={image}
      />

      {/* Footer con CTA (opcional) */}
      {href ? (
        <CardFooter className="absolute z-10 bottom-2 left-2 right-2 bg-black/30 backdrop-blur-sm rounded-xl p-2">
          <Button
            as={Link}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            radius="full"
            color="primary"
            size="sm"
            className="ml-auto mr-3"
          >
            {cta}
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}

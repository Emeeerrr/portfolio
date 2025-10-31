"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as UILink,
} from "@heroui/react";

const NAV_LINKS = [
  { href: "/", label: "Home page" },
  { href: "/about", label: "About me" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname?.startsWith(href);

  return (
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="lg"
      position="sticky"
      className="sticky top-0 inset-x-0 z-50 border-b border-divider
                 backdrop-blur-lg backdrop-saturate-150 bg-background/70 px-6"
    >
      {/* Izquierda: Toggle + Brand */}
      <NavbarContent className="sm:basis-0" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NextLink
            href="/"
            className="text-2xl sm:text-3xl font-bold tracking-tight"
          >
            EMERSON R
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Centro: Links (solo desktop) */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {NAV_LINKS.map((l) => (
          <NavbarItem key={l.href} isActive={isActive(l.href)}>
            <UILink
              as={NextLink}
              href={l.href}
              color={isActive(l.href) ? "primary" : "foreground"}
              className={isActive(l.href) ? "font-semibold" : "font-normal"}
            >
              {l.label}
            </UILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Derecha: ThemeSwitch */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Menú (mobile) */}
      <NavbarMenu>
        {/* Header compacto con brand + switch */}
        <div className="flex items-center justify-between px-2 py-2">
          <span className="font-bold text-xl">EMERSON R</span>
          <ThemeSwitch />
        </div>

        {NAV_LINKS.map((l) => (
          <NavbarMenuItem key={l.href} isActive={isActive(l.href)}>
            <UILink
              as={NextLink}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              color={isActive(l.href) ? "primary" : "foreground"}
              size="lg"
              className="w-full"
            >
              {l.label}
            </UILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}

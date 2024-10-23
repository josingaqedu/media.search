"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { ThemeDropdown } from "@/components/theme-dropdown";
import { SearchModal } from "@/components/search-modal";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    {
      name: "INICIO",
      href: "/",
    },
    {
      name: "PELÍCULAS",
      href: "/movies",
    },
    {
      name: "SERIES",
      href: "/tv-shows",
    },
  ];

  return (
    <Navbar isBlurred={true} onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Button
            color="primary"
            variant="flat"
            as={Link}
            className="font-black"
            href="/"
          >
            MEDIA SEARCH
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => {
          const active = pathname === item.href;
          return (
            <NavbarItem key={index} isActive={active}>
              <Link href={item.href} color={active ? "primary" : "foreground"}>
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <SearchModal />
        </NavbarItem>
        <NavbarItem>
          <ThemeDropdown />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => {
          const active = pathname === item.href;
          return (
            <NavbarMenuItem key={index} isActive={active}>
              <Link
                className="w-full"
                href={item.href}
                size="lg"
                color={active ? "primary" : "foreground"}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

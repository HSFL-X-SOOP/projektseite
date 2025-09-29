import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import LogoSVG from "@/assets/LOGO.svg";

export const Navbar = () => {
  const location = useLocation();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <RouterLink
            className="flex justify-start items-center gap-2 text-foreground"
            to="/"
          >
            <img src={LogoSVG} alt="MARLIN Logo" className="w-8 h-8" />
            <p className="font-bold text-inherit text-lg">MARLIN</p>
          </RouterLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <RouterLink
                className={`${
                  location.pathname === item.href
                    ? "text-primary font-medium"
                    : "text-foreground"
                } hover:text-primary transition-colors`}
                to={item.href}
              >
                {item.label}
              </RouterLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <Button
            isExternal
            as={Link}
            color="primary"
            href="https://www.marlin-live.com"
            size="sm"
            variant="flat"
          >
            Live-Plattform
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="lg:hidden">
        <NavbarItem>
          <Button
            isExternal
            as={Link}
            color="primary"
            href="https://www.marlin-live.com"
            size="sm"
            variant="flat"
          >
            Live-Plattform
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {item.href.startsWith("http") ? (
                <Link
                  isExternal
                  color={
                    item.label === "Live-Plattform" ? "primary" : "foreground"
                  }
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              ) : (
                <RouterLink
                  className={`text-lg ${
                    location.pathname === item.href
                      ? "text-primary font-medium"
                      : "text-foreground"
                  }`}
                  to={item.href}
                >
                  {item.label}
                </RouterLink>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

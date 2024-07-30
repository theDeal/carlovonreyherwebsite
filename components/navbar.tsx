'use client'

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { Home, HomeIcon, Menu } from "lucide-react";
import { Link } from "@/lib/i18n";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";

import * as m from "@/paraglide/messages";

interface RouteProps {
  href: string;
  label: string;
}


export const Navbar = ({currentLanguage}: {currentLanguage: string}) => {


const routeList: RouteProps[] = [
  {
    href: "/#about",
    label: m.navigation_bar_about_me(),
  },
  {
    href: "/#projects",
    label: m.navigation_bar_projects(),
  },
];


  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-4 px-10 py-5 md:py-10 rounded-md z-50">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 md:text-lg text-xl font-semibold"
            >
                 Carlo von Reyher
             
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2" asChild >
                <Button variant={'outline'} size={'icon'}>
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                </Menu>
                </Button>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl mt-20 mb-5">
                    Carlo von Reyher
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-3 mt-7">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                 

                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-lg ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            

            <ModeToggle />
            <LanguageToggle currentLanguage={currentLanguage}/>

          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
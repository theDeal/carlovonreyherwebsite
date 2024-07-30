"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import * as m from "@/paraglide/messages";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Link from "next/link";
const languages = [
  { value: "en", label: "English", flag: "gb" },
  { value: "de", label: "German", flag: "de" },
  { value: "fr", label: "French", flag: "fr" },
  { value: "ru", label: "Russian", flag: "ru" },
  { value: "jp", label: "Japanese", flag: "jp" },
];

export function LanguageToggle() {


  const changeLanguage = (tag: any) => {
    
  };

  const getLanguageName = (language: any) => {
    switch (language) {
      case "de":
        return 'German';
      case "en":
        return 'English';
      case "fr":
        return 'French';
      case "ru":
        return 'Russian';
      default:
        return 'Japanese';
    }
  };


  const [open, setOpen] = React.useState(false);

  const value = "de";
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <Link href={'/'} locale={language.value as "de" | "en" | "fr" | "ru" | "jp" | undefined} key={language.value}>
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={() => {
                    changeLanguage(language.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className={`fi fi-${language.flag} mr-2`}></div>
                  {language.label}
                </CommandItem>
              </Link>

              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

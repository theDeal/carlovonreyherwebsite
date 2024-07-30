import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { Link, usePathname } from "@/lib/i18n";

const languages = [
  { value: "en", label: "English", flag: "gb" },
  { value: "de", label: "German", flag: "de" },
  { value: "zh-ch", label: "Chinese (Simplified)", flag: "cn" },
  { value: "fr", label: "French", flag: "fr" },
  { value: "ja", label: "Japanese", flag: "jp" },
  { value: "bn", label: "Bengali", flag: "bd" },
  { value: "ru", label: "Russian", flag: "ru" },
  { value: "es", label: "Spanish", flag: "es" }
];

export function LanguageToggle({ currentLanguage }: { currentLanguage: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentLanguageObj = languages.find(lang => lang.value === currentLanguage) || languages[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <div className={`fi fi-${currentLanguageObj.flag} mr-2`}></div>
          {currentLanguageObj.label}
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
                <Link href={pathname} locale={language?.value || 'de'} key={language.value} hrefLang={language.value}>
                  <CommandItem
                    value={language.value}
                    onSelect={() => {
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        currentLanguage === language.value ? "opacity-100" : "opacity-0"
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

export default LanguageToggle;
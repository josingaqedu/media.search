"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Selection,
} from "@nextui-org/react";

import { Loader2Icon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react";

export const ThemeDropdown = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [keys, setKeys] = useState<Selection>(new Set([theme!]));
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setKeys(new Set([theme!]));
  }, [theme]);

  return (
    <Dropdown>
      <DropdownTrigger>
        {!mounted ? (
          <Button color="primary" variant="flat" isIconOnly={true}>
            <Loader2Icon className="animate-spinner-ease-spin" size={24} />
          </Button>
        ) : (
          <Button
            color="primary"
            variant="flat"
            isIconOnly={true}
            aria-label="Toggle theme"
          >
            {resolvedTheme === "light" ? (
              <SunIcon size={24} />
            ) : (
              <MoonIcon size={24} />
            )}
          </Button>
        )}
      </DropdownTrigger>
      <DropdownMenu
        color="primary"
        aria-label="Toggle theme"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={keys}
        onSelectionChange={setKeys}
      >
        <DropdownItem
          key="light"
          startContent={<SunIcon size={24} />}
          onClick={() => setTheme("light")}
          onPress={() => setTheme("light")}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="dark"
          startContent={<MoonIcon size={24} />}
          onClick={() => setTheme("dark")}
          onPress={() => setTheme("dark")}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="system"
          startContent={<MonitorIcon size={24} />}
          onClick={() => setTheme("system")}
          onPress={() => setTheme("system")}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

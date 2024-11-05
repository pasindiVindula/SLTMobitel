"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ChevronDown } from "../icons/ChevronDown";

export default function DropDown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["English"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const icon = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent white-dropdown-button"
          endContent={icon.chevron}
          radius="sm"
          variant="light"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="English">English</DropdownItem>
        <DropdownItem key="Tamil">Tamil</DropdownItem>
        <DropdownItem key="French">French</DropdownItem>
        <DropdownItem key="Arabic">Arabic</DropdownItem>
        <DropdownItem key="Sinhala">Sinhala</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

'use client'

import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./icons/MoonIcon";
import {SunIcon} from "./icons/SunIcon";

export default function SwitchMode() {
  return (
    <Switch
      defaultSelected
      size="md"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
    </Switch>
  );
}
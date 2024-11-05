import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import DropDown from "../dropdown/NavbarDropdown";
import SwitchMode from "../switch/page";

export default function TopBar() {
  return (
    <Navbar maxWidth="xl">
      <NavbarContent justify="center" className="gap-8">
      <NavbarItem>
        <Image
          width={90}
          height={45}
          alt="SLTMobitel Logo"
          src="/images/sltmobitellogo.png"
        />
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="navbar-item-link">
          About Us
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="navbar-item-link">
          Covergae Map
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="navbar-item-link">
          Sustainability
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="navbar-item-link">
          Career
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="navbar-item-link">
          Support
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="navbar-item-link">
          Contact Us
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="#" className="navbar-item-link">
          TV Commercials
        </Link>
      </NavbarItem>
      <NavbarItem>
        <DropDown />
      </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-6">
        <NavbarItem>
        <SwitchMode />
      </NavbarItem>
      <NavbarItem>
        <Image
          width={22}
          height={22}
          alt="Search Icon"
          src="/images/Search.png"
        />
      </NavbarItem>
      <NavbarItem>
        <Image
          width={22}
          height={22}
          alt="Buy Icon"
          src="/images/Buy.png"
        />
      </NavbarItem>
      <NavbarItem>
        <Image
          width={22}
          height={22}
          alt="Profile Icon"
          src="/images/Profile.png"
        />
      </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import DropDown from "../dropdown/page";

export default function TopBar() {
  return (
    <Navbar>
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
      <NavbarContent justify="end">
        
      </NavbarContent>
    </Navbar>
  );
}

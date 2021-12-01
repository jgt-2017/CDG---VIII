import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  NavbarText,
} from "reactstrap";

export default function NavBar({
  /* state vars */
  isOpen,
  isToggled,
  /* toggles */
  toggle,
  toggleLeft,
}) {
  /* {
  const href = "/page/login";
  const router = useRouter();
  function handleSubmit() {
    router.push(href);
  } */
  // console.log(p);
  //console.log("You clicked submit.");

  return (
    <Navbar bg="light" variant="light">
      <img src="/MM_logo.jpg" alt="Logo" className="" />
      <img src="/IKEA_SAMPLE.png" align="center" alt="Logo" className="" />

      <Button align="right" color="primary">
        Logout
        {/* 
            <Link href="/page/login">Logout</Link>
          
              */}
      </Button>
    </Navbar>
  );
}

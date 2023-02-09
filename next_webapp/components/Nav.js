import { Navbar, Dropdown, Image, Button, Link } from "@nextui-org/react";
import style from "../styles/nav.module.css";

export default function Nav() {
  const collapseItems = [
    "Home",
    "About Us",
    "For Student Startups",
    "For Students",
    "Events & Programs",
    "For Corporate Startups",
    "Premium Membership",
  ];
  const collapseItemsLink = [
    "/",
    "/aboutUs",
    "/forStartups",
    "/forStudents",
    "/eventsAndProgram",
    "/forCorporateContributors",
    "/premium",
  ];

  return (
    <Navbar maxWidth={"fluid"} shouldHideOnScroll variant="sticky">
      <div className={style.navParent}>
        <Navbar.Brand
          css={{
            w: "150px",
          }}
        >
          <Image src="logo.svg" alt=""></Image>
        </Navbar.Brand>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Content enableCursorHighlight activeColor="white" hideIn="xs">
          <Navbar.Link href={"/"}>Home</Navbar.Link>
          <Navbar.Item>
            <Dropdown>
              <Dropdown.Button auto light ripple={false}>
                Why Startic Field?
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                css={{ $$dropdownMenuWidth: "280px" }}
              >
                <Dropdown.Item>
                  <Link href="./forStartups" color="text">
                    For Student Startups
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="./forStudents" color="text">
                    For Students
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="./eventsAndProgram" color="text">
                    Events and Programs
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="./forCorporateContributors" color="text">
                    For Corporate contributors
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
          <Navbar.Link href="./aboutUs">About Us</Navbar.Link>
          <Navbar.Link href="./premium">Premium Membership</Navbar.Link>
          <Navbar.Link href="./sign-in">
            <Button className="w3-large" flat color="success" auto>
              Sign In
            </Button>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse css={{ paddingLeft: "10vw" }}>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={collapseItemsLink[index]}
                className={
                  index === collapseItems.length - 1 ? style.premium : ""
                }
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

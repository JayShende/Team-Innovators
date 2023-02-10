import { Box } from "./Box.js";
import Nav from "./Nav.js";
import styles from "../styles/layout.module.css";
import Footer from "./Footer";
import Guide from "./Guide";

export const Layout = ({ children }) => (
  <Box>
    <div className={styles.navTopSpace}></div>
    <Nav></Nav>
    {children}
   
    <Footer></Footer>
  </Box>
);

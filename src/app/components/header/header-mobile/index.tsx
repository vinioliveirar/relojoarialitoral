import styles from "./headerMobile.module.scss";
import logo from "../../../assets/logoPNG.png";
import Image from "next/image";
import { Hamburger, List, ListBullets } from "@phosphor-icons/react";
import { IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
export default function HeaderMobile() {
  return (
    <header className={styles.headerMobile}>
      <div className={styles.maxWidth}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image alt="logo" src={logo} width={64} height={80} />
          </div>
          <Menu>
            <MenuButton
              as={IconButton}
              outline="none"
              aria-label="Menu Button"
              icon={<ListBullets size={40} />}
              color="#f2e090"
              border="none"
              transition="all 0.2s"
              bg="transparent"
            />
            <MenuList w="90vw" p={10} marginRight={10} bg="white" borderRadius="10px">
              <MenuItem as="a" href="#" h={50} border="none" bg="#fff" p={20} marginBottom={20}>
                Início
              </MenuItem>

              <MenuItem as="a" href="#" h={50} border="none" bg="#fff" p={20} marginBottom={20}>
                Serviços
              </MenuItem>

              <MenuItem as="a" href="#" h={50} border="none" bg="#fff" p={20} marginBottom={20}>
                Sobre
              </MenuItem>

              <MenuItem as="a" href="#" h={50} border="none" bg="#fff" p={20} marginBottom={20}>
                Contatos
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </div>
    </header>
  );
}

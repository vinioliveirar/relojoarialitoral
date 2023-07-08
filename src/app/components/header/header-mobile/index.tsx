import "./headerMobile.css";
import logo from "../../../assets/logoPNG.png";
import Image from "next/image";
import { ListBullets } from "@phosphor-icons/react";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

export default function HeaderMobile() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 292) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <header>
      <div className={"maxWidth"}>
        <nav className={fix ? "nav fixed" : "navbar"}>
          <div className={"logo"}>
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
            <MenuList w="90vw" p={10} marginRight={10} bg="#F8F7FA" borderRadius="10px">
              <MenuItem as="a" href="#" h={50} border="none" p={20} marginBottom={20}>
                Início
              </MenuItem>

              <MenuItem as="a" href="#" h={50} border="none" p={20} marginBottom={20}>
                Serviços
              </MenuItem>

              <MenuItem as="a" href="#" h={50} border="none" p={20} marginBottom={20}>
                Sobre
              </MenuItem>

              <MenuItem as="a" href="#" h={50} border="none" p={20} marginBottom={20}>
                Contatos
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </div>
    </header>
  );
}

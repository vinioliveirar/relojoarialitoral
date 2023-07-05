"use client";
import { useWindowSize } from "../../hooks/use-window-size";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";

export function Header() {
  const size = useWindowSize();
  const isDesktopMedia = size.width == undefined || size.width > 1024;

  return isDesktopMedia ? <HeaderDesktop /> : <HeaderMobile />;
}

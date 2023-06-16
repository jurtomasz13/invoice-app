"use client";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@/contexts/ThemeContext";
import profilePicture from "@/public/image-avatar.jpg";
import logoIcon from "@/public/logo.svg";

import MoonIcon from "../Icons/MoonIcon/MoonIcon";
import SunIcon from "../Icons/SunIcon/SunIcon";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.item} ${styles["logo-wrapper"]}`}>
          <Link href="/">
            <Image
              className={styles["logo-icon"]}
              src={logoIcon}
              alt="Website logo"
              priority
            />
          </Link>
        </div>
        <div className={styles.item}>
          <button onClick={toggleTheme}>
            {theme === "light" && <MoonIcon />}
            {theme === "dark" && <SunIcon />}
          </button>
        </div>
        <hr className={styles.line} />
        <div className={styles.item}>
          <Image
            src={profilePicture}
            alt="Profile picture"
            className={styles["profile-img"]}
          />
        </div>
      </nav>
      <div className={styles["navbar-offset"]}></div>
    </>
  );
}

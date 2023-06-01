import Image from "next/image";
import Link from "next/link";

import moonIcon from "@/public/icon-moon.svg";
import profilePicture from "@/public/image-avatar.jpg";
import logoIcon from "@/public/logo.svg";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.container}>
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

      <button className={styles.item}>
        <Image src={moonIcon} alt="Change theme to dark" />
      </button>

      <hr className={styles.line} />

      <div className={styles.item}>
        <Image
          src={profilePicture}
          alt="Profile picture"
          className={styles["profile-img"]}
        />
      </div>
    </nav>
  );
}

import React from "react";
import styles from "@/styles/NavBar.module.scss";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.nav_menu}`}>
        <Link className={styles.nav_link} href={""}>
          Shop
        </Link>
        <Link className={styles.nav_link} href={""}>
          Contact
        </Link>
      </div>
      <div className={`${styles.nav_menu} ${styles.nav_menu_right}`}>
        <Link className={styles.nav_link} href={""}>
          Signin
        </Link>
        <Link className={styles.nav_link} href={""}>
          Cart
        </Link>
      </div>
      <div className={styles.nav_menu_sm}>
        <Link href={""} className={styles.nav_link_sm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.hamburger}
          >
            <path
              d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
              fill="#121212"
            />
          </svg>
        </Link>
      </div>
      <div className={`${styles.nav_menu_sm} ${styles.nav_menu_right_sm}`}>
        <Link href={""} className={styles.nav_link_sm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.hamburger}
          >
            <path
              d="M6.3 21.5C5.8 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.2 4.5 19.7V8.3C4.5 7.8 4.675 7.375 5.025 7.025C5.375 6.675 5.8 6.5 6.3 6.5H8.25V6.25C8.25 5.21667 8.61667 4.33333 9.35 3.6C10.0833 2.86667 10.9667 2.5 12 2.5C13.0333 2.5 13.9167 2.86667 14.65 3.6C15.3833 4.33333 15.75 5.21667 15.75 6.25V6.5H17.7C18.2 6.5 18.625 6.675 18.975 7.025C19.325 7.375 19.5 7.8 19.5 8.3V19.7C19.5 20.2 19.325 20.625 18.975 20.975C18.625 21.325 18.2 21.5 17.7 21.5H6.3ZM6.3 20H17.7C17.7667 20 17.8333 19.9667 17.9 19.9C17.9667 19.8333 18 19.7667 18 19.7V8.3C18 8.23333 17.9667 8.16667 17.9 8.1C17.8333 8.03333 17.7667 8 17.7 8H15.75V10.25C15.75 10.4667 15.6793 10.6457 15.538 10.787C15.396 10.929 15.2167 11 15 11C14.7833 11 14.6043 10.929 14.463 10.787C14.321 10.6457 14.25 10.4667 14.25 10.25V8H9.75V10.25C9.75 10.4667 9.67933 10.6457 9.538 10.787C9.396 10.929 9.21667 11 9 11C8.78333 11 8.60433 10.929 8.463 10.787C8.321 10.6457 8.25 10.4667 8.25 10.25V8H6.3C6.23333 8 6.16667 8.03333 6.1 8.1C6.03333 8.16667 6 8.23333 6 8.3V19.7C6 19.7667 6.03333 19.8333 6.1 19.9C6.16667 19.9667 6.23333 20 6.3 20ZM9.75 6.5H14.25V6.25C14.25 5.61667 14.0333 5.08333 13.6 4.65C13.1667 4.21667 12.6333 4 12 4C11.3667 4 10.8333 4.21667 10.4 4.65C9.96667 5.08333 9.75 5.61667 9.75 6.25V6.5ZM6 20V8V20Z"
              fill="#121212"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

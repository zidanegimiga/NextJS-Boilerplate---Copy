import React, { useState, useContext } from 'react'
import styles from './SideBarItem.module.scss'
import Link from 'next/link'
import { Home, Playstore, Sights, Sound } from 'shared/Icons/SidebarIcons'
import { KalabarsContext } from "../../global/KalabarsContext";


const SideBarItem = () => {
    const { openMenu } = useContext(KalabarsContext);
  return (
    <div className={openMenu ? styles.sidebarActive : styles.sidebar}>
    <div className={styles.pagesNavigator}>
    <Link href={'/'}>
      <div className={styles.sidebarItem}>
        <Home />
        <div className={styles.sidebarText}>Home</div>
      </div>
      </Link>
      <Link href={'/sounds'}>
        <div className={styles.sidebarItem}>
          <Sound />
          <div className={styles.sidebarText}>Sounds</div>
        </div>
      </Link>
      <Link href={'/sights'}>
        <div className={styles.sidebarItem}>
          <Sights />
          <div className={styles.sidebarText}>Sights</div>
        </div>
      </Link>
    </div>
    <div className={styles.playstoreNavigator}>
      <p>WE&apos;RE ON MOBILE</p>
      <div className={styles.playstoreButton}>
        <div className={styles.playIcon}>
          <Playstore />
        </div>
        <div className={styles.playstoreButtonText}>
          <span>GET IT ON</span>
          <p>Google Play</p>
        </div>
      </div>
    </div>
    <div className={styles.cgLinksNavigator}>
      <Link href={"/privacy"}>
        <p>PRIVACY POLICY</p>
      </Link>
      <a href="https://creativesgarage.org">
        {" "}
        <p>CREATIVES GARAGE</p>{" "}
      </a>
      <Link href={"/termsofuse"}>
        <p>TERMS OF USE</p>
      </Link>
    </div>
  </div>
  )
}

export default SideBarItem
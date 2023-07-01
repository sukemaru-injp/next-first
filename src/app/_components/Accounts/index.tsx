'use client'
import React from "react";
import { accountStyle } from "./style.css";
import { FacebookIcon, GithubIcon, TwitterIcon } from "../Icons";
import { Icon } from "../Icon";

const Github = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/sukemaru-injp">
      <GithubIcon />
    </a>
  )
}

const Facebook = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100029782609298">
      <FacebookIcon />
    </a>
  )
}

const Twitter = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Inakamon_0">
      <TwitterIcon />
    </a>
  )
}

export const Accounts = () => {
  return (
    <div className={accountStyle.wrapper}>
      <p className={accountStyle.text}>Get in Touch</p>

      <div className={accountStyle.iconWrapper}>
        <Icon size='xLarge' icon={<Github />} />

        <Icon size='xLarge' icon={<Facebook />} />

        <Icon size='xLarge' icon={<Twitter />} />
      </div>
    </div>
  )
}

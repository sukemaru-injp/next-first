import React from "react";
import { profileCardStyle } from "./style.css";
import { Accounts } from '../Accounts'

type Props = {}
export const ProfileCard: React.FC<Props> = () => {
  return (
    <div className={profileCardStyle.wrapper}>
      <Accounts />
    </div>
  )
}
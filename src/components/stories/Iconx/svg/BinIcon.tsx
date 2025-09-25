import { FC } from "react";
import { Icon } from "../index.interface";

export const BinIcon: FC<Icon>  = ({ color='black', size=24 }) => <svg width={size} height={size} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.8721 24.1V7.91516H4.12207V24.3942C4.12207 24.7288 4.39328 25 4.72784 25H18.9721C19.4691 25 19.8721 24.597 19.8721 24.1Z" stroke={color} stroke-width="1.2"/>
  <path d="M21 6.20625H3V4.15C3 3.65294 3.40294 3.25 3.9 3.25H6.70439C7.07554 3.25 7.40862 3.02217 7.54317 2.67627L7.97204 1.57373C8.10658 1.22783 8.43967 1 8.81081 1H14.817C15.1577 1 15.4691 1.19232 15.6217 1.49688L16.2511 2.75312C16.4037 3.05768 16.7151 3.25 17.0557 3.25H20.1C20.5971 3.25 21 3.65294 21 4.15V6.20625Z" stroke={color} stroke-width="1.2"/>
</svg>

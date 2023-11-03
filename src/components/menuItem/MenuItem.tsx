import Image from "next/image";
import Link from "next/link";
import styles from "../sidebar/styles.module.css";

interface MenuItemProps {
    text: string;
    isActive: boolean;
    onClick: (item: string) => void;
  }
  
export default function MenuItem({ text, isActive, onClick }: MenuItemProps) {

    return (
        <li className={`${styles.menu_item} ${isActive ? styles.menu_item_active : ''}`} onClick={(e) => onClick(text)}>
            <div className={`${styles.menu_item_indicator} ${isActive ? styles.menu_item_indicator_active : ''}`}></div>
            <Image src={`/icons/${text}.svg`} alt={text.toLowerCase()} width={20} height={20} />
            {text}
        </li>
    );
}
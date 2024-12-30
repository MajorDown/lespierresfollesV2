import Link from "next/link";
import { JSX } from "react";
import styles from "./ActionBtn.module.css";

type ActionBtnProps = {
    isActive: boolean;
    title: string;
    redirectTo?: string;
    onClick?: () => void;
}

//jsdoc
/**
 * @description Bouton d'action principal
 * @param {boolean} props.isActive - Etat du bouton
 * @param {string} props.title - Titre du bouton
 * @param {string} [props.redirectTo] - Redirection du bouton
 * @param {() => void} [props.onClick] - Action du bouton
 * @returns {JSX.Element}
 */
const ActionBtn = (props: ActionBtnProps): JSX.Element => {
    return (
        <button 
            className={styles.actionBtn}
            onClick={props.onClick}
            disabled={!props.isActive}
        >
            <Link
                className={props.isActive ? styles.active : styles.inactive}
                href={props.redirectTo? props.redirectTo : ""}>
                {props.title}
            </Link>
        </button>
    )
}

export default ActionBtn;
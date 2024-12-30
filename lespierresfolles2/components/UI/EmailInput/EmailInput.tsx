'use client';
import { JSX, useState, useEffect, ChangeEvent } from "react";
import styles from "./EmailInput.module.css";

const emailRegex = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

type EmailInputProps = {
    label?: string;
    email: string;
    onChange: (email: string) => void;
}

/**
 * @description Champ de saisie d'email
 * @param {string} [props.label] - Label du champ
 * @param {string} props.email - Email
 * @param {(email: string) => void} props.onChange - Action du champ
 * @returns {JSX.Element}
 */
const EmailInput = (props: EmailInputProps): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    useEffect(() => {
        (email != "" && email.match(emailRegex)) ? setIsValid(false) : setIsValid(true);
        (email === "" && setIsValid(true)); 
    }, [email]);

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setEmail(email);
        props.onChange(email);
    }

    return (<div className={styles.container}>
        {props.label && <label className={styles.label}>{props.label}</label>}
        <input
            type={"email"}
            placeholder={"m.dupont@mail.fr"}
            className={styles.input}
            value={email}
            onChange={(event) => handleChangeEmail(event)}
            required
        />
        {isValid && <span className={styles.error}>Email invalide</span>}
    </div>)
}

export default EmailInput;
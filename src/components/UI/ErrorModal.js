import React from "react";
import Button from "../Button/Button";
import Card from "./Card";
import styles from './ErrorModal.module.css';

const ErrorModal = props => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}>
                <Card>
                    <header className={styles.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={styles.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={styles.actions}>
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
};

export default ErrorModal;
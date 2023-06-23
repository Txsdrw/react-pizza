import React from 'react';
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <h1 className={styles.root}>
            <span>😢</span>
            <br />
            <span >Ничего не найдено</span>
        </h1>
    );
};
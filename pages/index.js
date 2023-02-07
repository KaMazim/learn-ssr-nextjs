import Card from './Card';

import styles from './index.module.css';

export default () => {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src='/logo.png' className={styles.logo} alt='logo' />
            </header>
            <div className={styles.grid}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

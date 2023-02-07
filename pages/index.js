import data from './api/data.json';

import Card from './Card';

import styles from './index.module.css';

const Index = ({ cards }) => {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src='/logo.png' className={styles.logo} alt='logo' />
            </header>
            <div className={styles.grid}>
                {cards.map((card) => (
                    <Card key={card.id} />
                ))}
            </div>
        </div>
    );
};

Index.getInitialProps = async () => {
    return { cards: data };
};

export default Index;

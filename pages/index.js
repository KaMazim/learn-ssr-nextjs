import React from 'react';
import styles from './index.module.css';
import Card from './Card';
import { initStore, initialCards, addItem } from '../src/store';

class Index extends React.Component {
    static async getInitialProps({ store }) {
        return store.dispatch(initialCards());
    }

    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src='/logo.png' className={styles.logo} alt='logo' />
                </header>
                <div className={styles.grid}>
                    {this.props.cards.map((card) => (
                        <Card key={card.id} />
                    ))}
                </div>
                {/* <button onClick={() => dispatch(addItem())}></button> */}
            </div>
        );
    }
}

export default initStore.withRedux(Index);

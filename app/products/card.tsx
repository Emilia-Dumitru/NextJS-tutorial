import styles from './card.module.css';

export default function CardProduct() {
    return (
        <div className={styles.card}>
            <img
                src="https://i.postimg.cc/WpxMfBZb/beans.png"
                alt="Product Image"
                className={styles.image}
            />
            <div className={styles.content}>
                <p className={styles.price}>GH¢ 50</p>
                <h3 className={styles.title}><strong>Beans</strong></h3>
                <p className={styles.quantity}>1999 metric tonnes</p>
                <p className={styles.region}>Afigya-Kwabre</p>
                <button className={styles.button}>Purchase order</button>
            </div>
        </div>
    );
}


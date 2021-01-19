import Head from 'next/head';
import DeliveriesList from '../components/deliveries-list';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>CCK - Deliveries</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<DeliveriesList />
			</main>
		</>
	);
}

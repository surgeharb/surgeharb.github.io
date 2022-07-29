import { config } from '../config';

export const getWalletBalance = async (address: string, chain: string) => {
	const isSolanaWallet = chain === 'solana';

	const url = isSolanaWallet
		? `https://solana-gateway.moralis.io/account/mainnet/${address}/balance`
		: `https://deep-index.moralis.io/api/v2/${address}/balance?chain=${chain}`;

	try {
		const data = await fetch(url, {
			method: 'GET',
			headers: {
				accept: 'application/json',
				'X-API-Key': config.moralisApiKey
			}
		}).then((response) => response.json());

		const balance = isSolanaWallet ? +data.solana : +data.balance / 1e18;
		return Math.floor(balance * 1e4) / 1e4;
	} catch (error) {
		return 0;
	}
};

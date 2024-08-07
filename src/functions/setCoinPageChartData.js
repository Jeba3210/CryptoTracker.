import { convertDate } from './convertDate';

export const setCoinPageChartData = (
	setChartData,
	coin_prices1,
	coin_prices2
) => {
	setChartData({
		labels: coin_prices1?.map((price) => convertDate(price[0])),
		datasets: [
			{
				label: 'Crypto 1',
				data: coin_prices1?.map((price) => price[1]),
				borderColor: '#3DBC1D',
				borderWidth: 2,
				fill: false,
				tension: 0.3,
				pointRadius: 0,
				yAxisID: 'crypto1',
			},
			{
				label: 'Crypto 2',
				data: coin_prices2?.map((price) => price[1]),
				borderColor: '#3A80E9',
				borderWidth: 2,
				fill: false,
				tension: 0.3,
				pointRadius: 0,
				yAxisID: 'crypto2',
			},
		],
	});
};

import {Statistics} from './Statistics';
import data from './data.json';

export const StatisticsData = () => {
	return (
	<Statistics title = "Upload stats" stats = {data} />
);
};
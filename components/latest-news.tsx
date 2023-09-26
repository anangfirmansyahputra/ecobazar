import { news } from '@/constant';
import NewsCard from './ui/news-card';

export default function LatestNews() {
	return (
		<div className='container mx-auto xl:px-10 px-5 pb-16'>
			<h1 className='heading text-center'>Latest News</h1>
			<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8'>
				{news.map((item) => (
					<NewsCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}

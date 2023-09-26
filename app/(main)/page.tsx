import Banner from '@/components/banner';
import BestDeals from '@/components/best-deals';
import Categories from '@/components/categories';
import Featured from '@/components/featured';
import FeaturedProducts from '@/components/featured-products';
import FollowInstagram from '@/components/follow-instagram';
import HotDeals from '@/components/hot-deals';
import LatestNews from '@/components/latest-news';
import Product from '@/components/product';
import SubscribeNewsletter from '@/components/subscribe-newsletter';
import Testimonial from '@/components/testimonials';

export default function Home() {
	return (
		<>
			<Banner />
			<Featured />
			<Categories />
			<Product />
			<BestDeals />
			<HotDeals />
			<FeaturedProducts />
			<LatestNews />
			<Testimonial />
			<FollowInstagram />
			<SubscribeNewsletter />
		</>
	);
}

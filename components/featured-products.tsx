import { featuredProducts } from '@/constant';
import PopularProductCart from './popular-product-card';

export default function FeaturedProducts() {
	return (
		<div className='container mx-auto xl:px-10 px-5 py-16'>
			<div
				className='w-full relative h-[358px] rounded-xl bg-right lg:bg-left bg- bg-cover overflow-hidden flex items-center justify-end p-5 sm:p-0 sm:pr-16'
				style={{
					backgroundImage: "url('assets/img/discount-banner.svg')",
					backgroundRepeat: 'no-repeat',
				}}>
				<div className='sm:text-start text-center'>
					<div className='text-white text-base font-medium uppercase'>Summer Sale</div>
					<div className='text-[#FF8A00] text-[56px] font-semibold'>
						37% <span className='text-white font-normal'>OFF</span>
					</div>
					<p className='text-white font-light text-base'>
						Free on all your order, Free Shipping and 30 days <br />
						money-back guarantee
					</p>
					<button className='text-white bg-[#00B207] px-10 py-3 rounded-full mt-6'>Shop Now</button>
				</div>
			</div>

			<h1 className='mt-16 mb-8 heading'>Featured Products</h1>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
				{featuredProducts.map((product) => (
					<PopularProductCart key={product.id} data={product} />
				))}
			</div>
		</div>
	);
}

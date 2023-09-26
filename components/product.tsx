import { popularProducts } from '@/constant';
import PopularProductCart from '@/components/popular-product-card';
import Image from 'next/image';

export default function Product() {
	return (
		<div className='container mx-auto lg:px-10 px-5 mt-12'>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-semibold text-[#1a1a1a]'>Popular Product</h1>
				<button className='flex items-center gap-2 text-[#00B207] font-medium text-base'>
					View All <Image width={15} height={12} src={'/assets/icon/arrow-right.png'} alt='Arrow' />
				</button>
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8'>
				{popularProducts.map((product) => (
					<PopularProductCart key={product.id} data={product} />
				))}
			</div>
		</div>
	);
}

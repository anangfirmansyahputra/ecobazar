import { categories } from '@/constant';
import Image from 'next/image';

export default function Categories() {
	return (
		<div className='container mx-auto xl:px-10 px-5 mt-14'>
			<h1 className='text-3xl font-semibold text-[#1a1a1a] mb-8'>Popular Categories</h1>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
				{categories.map((item) => (
					<div key={item.title} className='shadow border border-[#e6e6e6] rounded-md flex flex-col items-center justify-center pb-6 pt-4 hover:border-[#2C742F] cursor-pointer'>
						<Image width={190} height={130} src={item.img} alt={item.title} />
						<div className='mt-4 text-[18px] text-[#1a1a1a] font-medium'>{item.title}</div>
					</div>
				))}
			</div>
		</div>
	);
}

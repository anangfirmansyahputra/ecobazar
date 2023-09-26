import Image from 'next/image';
import { features } from '@/constant';

export default function Featured() {
	return (
		<div className='container mx-auto xl:px-10 px-5 mt-6'>
			<div className='shadow-xl w-full sm:grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4 rounded-xl'>
				{features.map((item) => (
					<div key={item.title} className='flex items-center gap-4 px-10 py-10'>
						<Image src={item.icon} width={40} height={40} alt={item.title} />
						<div>
							<div className='text-base font-semibold text-[#1a1a1a]'>{item.title}</div>
							<div className='text-sm text-[#666] mt-2'>{item.content}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

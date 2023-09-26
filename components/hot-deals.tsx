import Image from 'next/image';
import React from 'react';

export default function HotDeals() {
	return (
		<div className='bg-[#F7F7F7] mt-16'>
			<div className='container mx-auto xl:px-10 px-5 py-16'>
				<div className='flex items-center justify-between'>
					<h1 className='text-[#1A1A1A] text-3xl font-semibold'>Hot Deals</h1>
					<button className='flex items-center gap-2 text-[#00B207] text-base font-medium'>
						View All
						<Image src={'/assets/icon/arrow-right.png'} width={15} height={12} alt='arrow' />
					</button>
				</div>

				<div></div>
			</div>
		</div>
	);
}

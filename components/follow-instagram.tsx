import { followInstagram } from '@/constant';
import Image from 'next/image';

export default function FollowInstagram() {
	return (
		<div className='container mx-auto xl:px-10 px-5 pb-16'>
			<img src='/assets/img/company-logo.svg' alt='' className='w-full' />
			<div>
				<h1 className='text-center heading'>Follow us on Instagram</h1>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-8 gap-6'>
					{followInstagram.map((item) => (
						<div key={item.id} className='relative w-full aspect-square group'>
							<Image src={item.img} alt='Instagram' fill className='object-cover ' />
							<div
								className='hidden absolute w-full h-full 
							bg-[#2b572e50] rounded-lg z-10 group-hover:flex items-center justify-center'>
								<button className='cursor-pointer'>
									<Image src={'/assets/icon/instagram.svg'} width={32} height={32} alt='Instagram' />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

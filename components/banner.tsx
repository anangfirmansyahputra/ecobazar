'use client';

import Image from 'next/image';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Banner() {
	useEffect(() => {
		// Aos.init();
	}, []);

	return (
		<div className='container mx-auto xl:px-10 px-5 mt-6 gap-6 flex flex-col xl:flex-row'>
			<div
				data-aos='fade-right'
				className='bg-left md:bg-center py-10 sm:py-0 sm:h-[600px] xl:w-[60%] lg:w-full px-5 sm:px-14 flex flex-col justify-center items-start rounded-xl overflow-hidden bg-cover'
				style={{
					backgroundImage: "url('assets/img/banner-big.png')",
					backgroundRepeat: 'no-repeat',
				}}>
				<h1 className='text-white text-[36px] sm:text-[48px] font-semibold leading-[120%]'>
					Fresh & Healthy <br />
					Organic Food
				</h1>
				<div className='mt-7 border-l-2 border-l-[#84D187] pl-3'>
					<div className='flex items-center gap-2'>
						<div className='text-white text-xl font-medium'>Sale up to</div>
						<div className='py-1 px-3 bg-[#FF8A00] rounded-md text-white text-xl font-semibold'>30% OFF</div>
					</div>
					<div className='text-sm font-normal text-white mt-2'>Free shipping on all your order</div>
				</div>
				<button className='bg-white text-base font-semibold mt-7 py-3 px-10 rounded-full text-[#00B207] flex items-center gap-4'>
					Shop Now <Image src={'/assets/icon/arrow-right.png'} alt='icon' width={15} height={13} />
				</button>
			</div>
			<div className='lg:w-full xl:w-[40%] flex flex-col lg:flex-row xl:flex-col gap-2  sm:gap-6'>
				<div
					data-aos='fade-left'
					data-aos-delay='200'
					className='w-full h-[288px] object-contain object-center rounded-xl overflow-hidden p-8'
					style={{
						backgroundImage: "url('/assets/img/banner1.png')",
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
					}}>
					<div className='text-[#1A1A1A] text-sm font-medium uppercase'>Summer Sale</div>
					<div className='text-[#1A1A1A] text-3xl font-semibold'>75% OFF</div>
					<div className='text-[#666] text-sm leading-[150%] mt-3'>Only Fruit & Vegetable</div>
					<button className='text-[#00B207] text-base font-semibold flex items-center gap-2 mt-5'>
						Shop Now <Image src={'/assets/icon/arrow-right.png'} alt='icon' width={15} height={13} />
					</button>
				</div>
				<div
					data-aos='fade-left'
					data-aos-delay='300'
					className='w-full h-[288px] object-contain object-center rounded-xl overflow-hidden p-8 flex items-center flex-col justify-center text-white'
					style={{
						backgroundImage: "url('/assets/img/banner2.png')",
						backgroundSize: '100%',
						backgroundRepeat: 'no-repeat',
					}}>
					<div className='uppercase text-sm font-medium'>Best Deal</div>
					<div className='text-3xl font-semibold mt-3'>
						Special Products <br /> Deal of the Month
					</div>
					<button className='text-[#00B207] text-base font-semibold flex items-center gap-2 mt-5'>
						Shop Now <Image src={'/assets/icon/arrow-right.png'} alt='icon' width={15} height={13} />
					</button>
				</div>
			</div>
		</div>
	);
}

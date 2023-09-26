import Image from 'next/image';

export default function BestDeals() {
	return (
		<div className='container mx-auto xl:px-10 px-5 mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			<div
				className='w-full aspect-square bg-cover bg-center overflow-hidden rounded-lg flex flex-col items-center py-8 text-white'
				style={{
					backgroundImage: "url('assets/img/banner-sm1.svg')",
					backgroundRepeat: 'no-repeat',
				}}>
				<div className='font-sm font-medium'>BEST DEALS</div>
				<h1 className='text-4xl font-semibold mt-4 text-center'>Sale of the Month</h1>
				<div className='flex items-start mt-2'>
					<div className='flex flex-col items-center'>
						<div className='text-2xl font-normal'>00</div>
						<div className='text-xs font-light'>DAYS</div>
					</div>
					<div className='mx-4 mt-1'>:</div>
					<div className='flex flex-col items-center'>
						<div className='text-2xl font-normal'>02</div>
						<div className='text-xs font-light'>HOURS</div>
					</div>
					<div className='mx-4 mt-1'>:</div>
					<div className='flex flex-col items-center'>
						<div className='text-2xl font-normal'>18</div>
						<div className='text-xs font-light'>MINS</div>
					</div>
					<div className='mx-4 mt-1'>:</div>
					<div className='flex flex-col items-center'>
						<div className='text-2xl font-normal'>46</div>
						<div className='text-xs font-light'>SECS</div>
					</div>
				</div>
				<button className='mt-6 flex items-center gap-2 bg-white px-8 py-3 text-[#00B207] rounded-full font-semibold text-sm'>
					Shop Now
					<Image src={'/assets/icon/arrow-right.png'} width={15} height={12} alt='Arrow Icon' />
				</button>
			</div>
			<div
				className='w-full aspect-square bg-cover bg-center overflow-hidden rounded-lg flex flex-col items-center py-8 text-white'
				style={{
					backgroundImage: "url('assets/img/banner-sm2.svg')",
					backgroundRepeat: 'no-repeat',
				}}>
				<div className='font-sm font-medium'>85% FAT FREE</div>
				<h1 className='text-4xl font-semibold mt-4'>Low-Fat Meat</h1>
				<div className='text-lg mt-3 flex items-center gap-2'>
					Started at <span className='text-[#FF8A00] text-xl font-semibold'>$79.99</span>
				</div>
				<button className='mt-6 flex items-center gap-2 bg-white px-8 py-3 text-[#00B207] rounded-full font-semibold text-sm'>
					Shop Now
					<Image src={'/assets/icon/arrow-right.png'} width={15} height={12} alt='Arrow Icon' />
				</button>
			</div>
			<div
				className='w-full aspect-square bg-cover bg-center overflow-hidden rounded-lg flex flex-col items-center py-8 text-[#1a1a1a]'
				style={{
					backgroundImage: "url('assets/img/banner-sm3.svg')",
					backgroundRepeat: 'no-repeat',
				}}>
				<div className='font-sm font-medium'>SUMMER SALE</div>
				<h1 className='text-4xl font-semibold mt-4'>100% Fresh Fruit</h1>
				<div className='text-lg mt-3 flex items-center gap-2'>
					Up to <span className='bg-[#1a1a1a] px-3 py-2 rounded-lg text-[#FCC900] text-xl font-semibold'>$79.99</span>
				</div>
				<button className='mt-6 flex items-center gap-2 bg-white px-8 py-3 text-[#00B207] rounded-full font-semibold text-sm'>
					Shop Now
					<Image src={'/assets/icon/arrow-right.png'} width={15} height={12} alt='Arrow Icon' />
				</button>
			</div>
		</div>
	);
}

import Image from 'next/image';

interface PopularProductCartProps {
	data: {
		id: number;
		name: string;
		price: number;
		discount: number;
		img: string;
		rating: number;
	};
}

export default function PopularProductCart({ data }: PopularProductCartProps) {
	const totalDiscount = (price: number, discount: number) => {
		return price - price * (discount / 100);
	};

	const USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<div className='w-full border p-3 relative group hover:border-[#2C742F]'>
			<Image src={data.img} width={400} height={400} alt={data.name} className='aspect-square' />
			<div className='text-[#4D4D4D] group-hover:text-[#2C742F] text-sm'>{data.name}</div>
			<div className='flex items-center justify-between'>
				<div>
					{data.discount !== 0 && data.discount && <span className='mr-1 text-base font-medium text-[#1a1a1a]'>{USDollar.format(totalDiscount(data.price, data.discount))}</span>}
					<span className={`${data.discount ? 'line-through text-base text-[#999]' : 'text-base font-medium text-[#1a1a1a]'}`}>{USDollar.format(data.price)}</span>
				</div>
				<div className='p-2 bg-[#F2F2F2] rounded-full group/bag hover:bg-branding-success cursor-pointer'>
					<svg className='stroke-[#1a1a1a] group-hover/bag:stroke-white' width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83334C6.66667 3.99239 8.15905 2.5 10 2.5V2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round' />
					</svg>
				</div>
			</div>
			<div className='flex gap-[1px]'>
				{data.discount !== 0 && data.discount && <div className='absolute top-4 left-4 bg-[#EA4B48] rounded-[4px] text-white p-1'>{`Sale ${data.discount}%`}</div>}
				{data.rating > 0 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
				{data.rating > 1 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
				{data.rating > 2 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
				{data.rating > 3 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
				{data.rating > 4 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
			</div>
			<div className='hidden group-hover:flex flex-col gap-[6px] absolute top-4 right-4'>
				<div className='p-2 border rounded-full cursor-pointer bg-white'>
					<Image src={'/assets/icon/heart.svg'} alt='Heart' height={20} width={20} />
				</div>
				<div className='p-2 border rounded-full cursor-pointer bg-white'>
					<Image src={'/assets/icon/eye.svg'} alt='Heart' height={20} width={20} />
				</div>
			</div>
		</div>
	);
}

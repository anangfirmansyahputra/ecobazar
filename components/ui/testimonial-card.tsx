import Image from 'next/image';

interface TestimonialCardProps {
	data: {
		id: number;
		desc: string;
		name: string;
		avatar: string;
		as: string;
		rating: number;
	};
}

export default function TestimonialCard({ data }: TestimonialCardProps) {
	return (
		<div className='shadow bg-white p-6 rounded-lg'>
			<Image src={'/assets/img/coma.svg'} alt='Coma' width={32} height={26} />
			<p className='mt-4 body-sm text-[#4D4D4D]'>{data.desc}</p>
			<div className='mt-4 flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<Image src={'/assets/img/avatar1.svg'} width={56} height={56} alt='Avatar' className='rounded-full' />
					<div>
						<div className='body-md'>{data.name}</div>
						<div className='body-sm text-[#999999]'>{data.as}</div>
					</div>
				</div>
				<div className='flex items-center gap-[2px]'>
					{data.rating > 0 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
					{data.rating > 1 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
					{data.rating > 2 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
					{data.rating > 3 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
					{data.rating > 4 ? <Image src={'/assets/icon/star.svg'} width={12} height={12} alt='star' /> : <Image src={'/assets/icon/star-gray.svg'} width={12} height={12} alt='star' />}
				</div>
			</div>
		</div>
	);
}

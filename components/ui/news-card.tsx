import Image from 'next/image';

interface NewsCardProps {
	data: {
		id: number;
		title: string;
		url: string;
		category: string;
		createdBy: string;
		img: string;
		totalComments: number;
	};
}

export default function NewsCard({ data }: NewsCardProps) {
	return (
		<div className='rounded-lg overflow-hidden shadow-lg'>
			<div className='relative aspect-square'>
				<Image src={data.img} fill alt={data.title} className='object-cover' />
			</div>
			<div className='p-6'>
				<div className='flex gap-4'>
					<div className='flex gap-1'>
						<Image src={'/assets/icon/tag.svg'} alt='Tag' width={18} height={18} />
						<span className='body-sm'>{data.category}</span>
					</div>
					<div className='flex gap-1'>
						<Image src={'/assets/icon/user.svg'} alt='Tag' width={18} height={18} />
						<span className='body-sm text-[#808080]'>By </span>
						<span className='body-sm'>{data.createdBy}</span>
					</div>
					<div className='flex gap-1'>
						<Image src={'/assets/icon/chat.svg'} alt='Tag' width={18} height={18} />
						<span className='body-sm text-[#666666]'>{data.totalComments} Comments</span>
					</div>
				</div>
				<div className='mt-2'>
					<p className='text-branding-success body-lg'>{data.title}</p>
					<button className='flex items-center gap-2 mt-5 body-md text-branding-success'>
						Read More
						<Image src={'/assets/icon/arrow-right.png'} width={15} height={13} alt='Arrow' />
					</button>
				</div>
			</div>
		</div>
	);
}

import { nav } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export default function Header() {
	return (
		<div>
			<div className='container mx-auto px-5 xl:px-10 flex items-center justify-between py-2 text-xs text-[#666]'>
				<div className='sm:first-line:flex items-center hidden'>
					<img src='/assets/icon/Map Pin.png' alt='' className='mr-[8px]' />
					<div>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
				</div>
				<div className='flex items-center'>
					<div className='mr-5'>Eng</div>
					<div className='pr-5 border-r-[1px] mr-5'>USD</div>
					<div className='flex'>
						<div>Sign In</div>
						<div className='mx-[4px]'>/</div>
						<div>Sign Up</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='container mx-auto px-5 xl:px-10 flex items-center justify-between py-[27px]'>
				<div className='flex items-center gap-2'>
					<Image src={'/assets/icon/logo.jpg'} alt='Logo' width={32} height={32} className='hidden sm:block' />
					<h1 className='text-[#002603] text-[32px] font-medium hidden lg:block'>Ecobazar</h1>
				</div>
				<div className='flex'>
					<div className='border flex py-3 px-4 rounded-tl-xl rounded-bl-xl items-center gap-2'>
						<img src='/assets/icon/search.png' alt='' />
						<input type='text' placeholder='Search' className='flex-1 outline-none text-[15px]' />
					</div>
					<button className='bg-[#00B207] text-sm font-semibold text-white px-6 rounded-tr-xl rounded-br-xl'>Search</button>
				</div>

				<div className='sm:flex items-center hidden'>
					<Image src={'/assets/icon/heart.png'} width={27} height={23} alt='Heart' />
					<div className='flex items-center pl-4 border-l ml-4'>
						<div className='relative mr-3'>
							<Image src={'/assets/icon/bag.png'} width={34} height={34} alt='Bag' />
							<div className='bg-[#2C742F] flex items-center justify-center rounded-full h-5 w-5 text-[10px] text-white absolute -top-1 right-0'>2</div>
						</div>
						<div>
							<div className='text-[11px] text-[#4D4D4D]'>Shoping cart</div>
							<div className='font-medium text-sm mt-[7px]'>$57.00</div>
						</div>
					</div>
				</div>
			</div>

			<nav className=' py-3 sm:py-5 bg-[#333333] flex items-center'>
				<div className='container mx-auto px-5 xl:px-10  items-center hidden sm:flex'>
					{nav.map((item) => (
						<Link href={item.url} key={item.name} className={`${item.name === 'Home' ? 'text-white' : 'text-[#999]'} font-medium text-sm mr-8`}>
							{item.name}
						</Link>
					))}
					<div className='ml-auto flex items-center gap-2'>
						<Image src={'/assets/icon/phone.png'} alt='Phone' width={28} height={28} />
						<div className='text-white text-sm font-medium'>(219) 555-0114</div>
					</div>
				</div>
				<div className='px-5  flex items-center justify-end w-full'>
					<Button variant={'secondary'} size={'icon'}>
						<Menu />
					</Button>
				</div>
			</nav>
		</div>
	);
}

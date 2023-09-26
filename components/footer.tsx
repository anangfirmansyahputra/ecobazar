import { footerNav } from '@/constant';

export default function Footer() {
	return (
		<div className='w-full bg-[#1A1A1A] text-white'>
			<div className='container mx-auto xl:px-10 px-5 pt-16 flex flex-col sm:flex-row gap-28'>
				<div className='w-full sm:w-[23%]'>
					<div className='flex items-center gap-2'>
						<img src={'/assets/icon/logo-footer.svg'} alt='logo' />
						<h1 className='text-3xl font-medium'>Ecobazar</h1>
					</div>
					<p className='text-[#808080] mt-4 text-sm'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
					<div className='mt-5'>
						<span className='border-b border-b-[#00B207] pb-[6px] text-sm font-medium'>(219) 555-0114</span>
						<span className='px-4 text-[#808080] text-base'>or</span>
						<span className='border-b border-b-[#00B207] pb-[6px] text-sm font-medium'>Proxy@gmail.com</span>
					</div>
				</div>
				<div className='grid grid-cols-4 flex-1'>
					{footerNav.map((nav) => (
						<div key={nav.title}>
							<div className='text-base font-medium'>{nav.title}</div>
							{nav.children.map((item) => (
								<div key={item.label} className='text-sm text-[#999] mt-5 hover:text-white cursor-pointer'>
									{item.label}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			<div className='container mx-auto xl:px-10 px-5 mt-16'>
				<div className='w-full h-[1px] bg-[#333333]'></div>
				<p className='py-8 text-sm text-[#808080] font-light'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
			</div>
		</div>
	);
}

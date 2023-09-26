import { testimonials } from '@/constant';
import TestimonialCard from './ui/testimonial-card';

export default function Testimonial() {
	return (
		<div className='bg-[#F2F2F2]'>
			<div className='container mx-auto xl:px-10 px-5 py-16'>
				<h1 className='heading'>Client Testimonials</h1>
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6'>
					{testimonials.map((testimonial) => (
						<TestimonialCard key={testimonial.id} data={testimonial} />
					))}
				</div>
			</div>
		</div>
	);
}

import { Icon } from '@iconify/react';

export default function LinkHolder() {
    return (
        <div className="bg-[#1A1A1A] w-full p-4 flex justify-between items-center rounded-lg">
            <div className='flex items-center gap-2'>
                <Icon icon="fa6-brands:facebook" width={20} color='white' />
                <h1 className='text-white'>Facebook</h1>
            </div>
            <Icon icon="mdi:arrow-right" color='white' />
        </div>
    )
}
import Btn from './Btn'
///images
import Image from 'next/image'
import Star from '../../../public/images/Star.svg'
import Shield from '../../../public/images/Shield.svg'
import Send from '../../../public/images/Send.svg'

const HandelMony = () => {
    return (
        <section id='about' className='py-14'>
            <div className="collect flex justify-between gap-6 items-center max-lg:flex-wrap">
                <div className='w-135 max-xl:w-200 max-lg:w-1/1'>
                    <h2 className='h2'>You do the business, we`ll handle the money.</h2>
                    <p className='p my-7 '>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <Btn/>
                </div>
                <ul className='flex flex-col gap-6 max-lg:-ml-5 w-[500px] max-lg:w-1/1'>
                    <li className='flex gap-4 items-center transition duration-300 hover:bg-linear-to-b from-[#585858] to-[#14101D] p-4 rounded-lg
                    '>
                        <div className='p-3 rounded-full bg-[#2092772b]'>
                            <Image src={Star} alt='star'/>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-[#eee]'>Rewards</h3>
                            <p className='p'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center transition duration-300 hover:bg-linear-to-b from-[#585858] to-[#14101D] p-4 rounded-lg
                    '>
                        <div className='p-3 rounded-full bg-[#2092772b]'>
                            <Image src={Shield} alt='star'/>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-[#eee]'>100% Secured</h3>
                            <p className='p'>We take proactive steps make sure your information and transactions are secure.</p>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center transition duration-300 hover:bg-linear-to-b from-[#585858] to-[#14101D] p-4 rounded-lg
                    '>
                        <div className='p-3 rounded-full bg-[#2092772b]'>
                            <Image src={Send} alt='star'/>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-[#eee]'>Balance Transfer</h3>
                            <p className='p'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HandelMony
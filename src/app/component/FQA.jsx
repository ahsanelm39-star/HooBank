import Image from "next/image"
import People1 from '../../../public/images/people01.png'
import People2 from '../../../public/images/people02.png'
import People3 from '../../../public/images/people03.png'

const FQA = () => { 
    return (
        <section className="py-14 collect">
            <div className="flex justify-between items-center gap-4 max-lg:flex-wrap max-lg:text-center">
                <h2 className="h2 w-[540px] max-lg:w-1/1">What people are saying about us</h2>
                <p className="p w-[440px] max-lg:w-1/1">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="flex max-lg:flex-wrap justify-center items-center gap-8 mt-16">
                <div className="max-lg:w-1/1 border rounded-lg shadow-lg p-6 space-y-4
                    bg-linear-to-l from-[#585858] to-[#14101D] p-4 rounded-lg w-120"
                    >
                    <div className="flex items-center space-x-4">
                        <div
                        className="h-12 w-12 flex items-center justify-center rounded-full"
                        >
                        <Image src={People1} alt={'people'}/>
                        </div>
                        <div>
                        <h3 className="text-xl text-[#c1bebe] font-bold">Herman Jensen</h3>
                        <div className="text-[#989797]">Founder & Leader</div>
                        </div>
                    </div>

                    <div className="flex text-orange-500 text-xl">★★★★★</div>

                    <p className="p">
                        Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </p>
                </div>
                {/* ???? */}
                <div className="max-lg:w-1/1 border rounded-lg shadow-lg p-6 space-y-4
                    bg-linear-to-l from-[#585858] to-[#14101D] p-4 rounded-lg w-120"
                    >
                    <div className="flex items-center space-x-4">
                        <div
                        className="h-12 w-12 flex items-center justify-center rounded-full"
                        >
                        <Image src={People2} alt={'people'}/>
                        </div>
                        <div>
                        <h3 className="text-xl text-[#c1bebe] font-bold">Steve Mark</h3>
                        <div className="text-[#989797]">Content Creator</div>
                        </div>
                    </div>

                    <div className="flex text-orange-500 text-xl">★★★★★</div>

                    <p className="p">Money makes your life easier. If you`re lucky to have it, you`re lucky, but it will not replace you as the driver.</p>
                </div>
                {/* ??? */}
                <div className=" max-lg:w-1/1 border rounded-lg shadow-lg p-6 space-y-4
                    bg-linear-to-l from-[#585858] to-[#14101D] p-4 rounded-lg w-120"
                    >
                    <div className="flex items-center space-x-4">
                        <div
                        className="h-12 w-12 flex items-center justify-center rounded-full"
                        >
                        <Image src={People3} alt={'people'}/>
                        </div>
                        <div>
                        <h3 className="text-xl text-[#c1bebe] font-bold">Kenn Gallagher</h3>
                        <div className="text-[#989797]">Founder & Leader</div>
                        </div>
                    </div>

                    <div className="flex text-orange-500 text-xl">★★★★★</div>

                    <p className="p">
                        It is usually people in the money business, finance, and international trade that are really rich.
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default FQA
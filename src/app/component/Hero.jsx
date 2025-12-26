import Image from "next/image"
import Discount from '../../../public/images/Discount.svg'
import Roboot from '../../../public/images/robot.png'
import Arrow from '../../../public/images/arrow-up.svg'
import Link from "next/link"

function Hero() {
    return (
        <section className="h-screen md:h-[90vh] flex justify-center items-center md:relative max-md:flex-wrap max-md:gap-8 max-md:pt-20">
            <div className="collect flex justify-between items-center">
                <div className="max-w-[670px] relative z-10 relative">
                    <div className="flex items-center gap-2 bg-[#161616] p-1 rounded-md w-fit pr-2">
                        <Image src={Discount} alt="discount image" />
                        <div className="text-[#898989] text-[12px]"><span className="text-[#ccc]">20%</span> DISCOUT FOR <span className="text-[#ccc]">1MONTH</span> ACCOUNT</div>
                    </div>
                    <h1 className="text-white text-[38px] md:text-[60px] lg:text-[72px]/[90px] font-bold mb-6">
                        The Next <span className="spechial_bg">Generation</span> Payment Method
                    </h1>
                    <p className="p max-w-[483px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quam omnis in minima aut obcaecati ullam a nobis ducimus commodi, maiores asperiores delectus? Rem veritatis deserunt aliquid molestias, in tempora!</p>
                    <Link href={"#contact"} className="max-lg:hidden absolute top-20 right-40 lg:right-20 spechial_bg font-bold p-6 rounded-full
                    border border-[#33BBCF] cursor-pointer">
                        <div className=" flex  gap-2">
                            <span>Get</span>
                            <Image src={Arrow} alt="arrow"/>
                        </div>
                        <span>Started</span>
                    </Link>
                </div>
            </div>
            <div className="max-w-[669px] max-h-[674px] md:absolute md:top-[50%] md:right-0 md:translate-y-[-50%]">
                    <Image src={Roboot} alt="robot"/>
            </div>
        </section>
    )
}

export default Hero
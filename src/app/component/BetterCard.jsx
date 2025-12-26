import Btn from "./Btn"
//images
import Image from "next/image"
import Card from '../../../public/images/card.png'

const BetterCard = () => {
    return (
        <section id="solution" className="py-14 collect flex justify-between items-center gap-6 max-md:gap-12 max-md:flex-wrap">
            <div className="w-140 max-md:w-1/1 max-md:text-center">
                <h2 className="h2">Find a better card deal in few easy steps.</h2>
                <p className="p pt-6 pb-8">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <Btn/>
            </div>
            <div className="w-[510px] max-md:w-1/1 max-md:text-center">
                <Image src={Card} alt="card"/>
            </div>
        </section>
    )
}

export default BetterCard
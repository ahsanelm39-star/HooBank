import Image from "next/image"
import Bill from '../../../public/images/bill.png'
import Google from '../../../public/images/google.svg'
import Appel from '../../../public/images/apple.svg'

const ControlBilling = () => {
    return (
        <section id="features" className="collect py-14 flex items-center justify-between gap-6 max-lg:gap-8 max-lg:flex-wrap">
            <div className="w-[500px] max-lg:w-1/1">
                <Image src={Bill} alt="billing"/>
            </div>
            <div className="w-[480px] max-lg:w-1/1 max-lg:text-center">
                <h2 className="h2">
                    Easily control your billing & invoicing.
                </h2>
                <p className="p my-8">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className="flex gap-6 max-lg:justify-center">
                    <Image src={Appel} alt="appel" className="w-[140px]"/>
                    <Image src={Google} alt="google" className="w-[140px]"/>
                </div>
            </div>
        </section>
    )
}

export default ControlBilling
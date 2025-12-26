import Image from "next/image"
import Logo1 from '../../../public/images/airbnb.png'
import Logo2 from '../../../public/images/binance.png'
import Logo3 from '../../../public/images/coinbase.png'
import Logo4 from '../../../public/images/dropbox.png'

const ComponyLogo = () => {
    return (
        <div className="collect py-14 [mask-image:linear-gradient(to_right,transparent,black,transparent)] overflow-hidden">
            <div className="logo_box flex gap-10 items-center justify-center ">
                <Image src={Logo1} alt="company logo" className="w-40"/>
                <Image src={Logo2} alt="company logo" className="w-40"/>
                <Image src={Logo3} alt="company logo" className="w-40"/>
                <Image src={Logo4} alt="company logo" className="w-40"/>
                <Image src={Logo1} alt="company logo" className="w-40"/>
                <Image src={Logo2} alt="company logo" className="w-40"/>
                <Image src={Logo3} alt="company logo" className="w-40"/>
                <Image src={Logo4} alt="company logo" className="w-40"/>
                <Image src={Logo1} alt="company logo" className="w-40"/>
                <Image src={Logo2} alt="company logo" className="w-40"/>
                <Image src={Logo3} alt="company logo" className="w-40"/>
                <Image src={Logo4} alt="company logo" className="w-40"/>
                <Image src={Logo1} alt="company logo" className="w-40"/>
                <Image src={Logo2} alt="company logo" className="w-40"/>
                <Image src={Logo3} alt="company logo" className="w-40"/>
                <Image src={Logo4} alt="company logo" className="w-40"/>
                <Image src={Logo1} alt="company logo" className="w-40"/>
                <Image src={Logo2} alt="company logo" className="w-40"/>
                <Image src={Logo3} alt="company logo" className="w-40"/>
                <Image src={Logo4} alt="company logo" className="w-40"/>
            </div>
        </div>
    )
}

export default ComponyLogo
import Btn from "./Btn"

const Contact = () => {
    return (
        <div id="contact" className="collect">
            <div className="p-14 max-md:py-8 max-lg:px-0 flex justify-between items-center gap-8 max-lg:flex-col">
                <div className="max-lg:text-center">
                    <h2 className="h2">Let’s try our service now!</h2>
                    <p className="p pt-6">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <Btn/>
            </div>
        </div>
    )
}

export default Contact
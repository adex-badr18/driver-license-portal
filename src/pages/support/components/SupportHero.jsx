

const SupportHero = () => {
    return (
        <div>
            <div className={`inline-block rounded-md bg-[url("src/assets/customercare.jpg")] mb-3 md:mb-8 w-full h-40 md:h-80 lg:h-[30rem] bg-cover`}></div>

            <h1 className="text-green-500 text-xl md:text-3xl font-bold mb-4">Support</h1>
            <p className="md:text-base text-sm  leading-normal  ">Don't hesitate to reach out to our friendly customer support team. They are happy to assist you with any questions or challenge you may encounter on this platform. you can reach out to us at <a className="text-bl" href=""> DlSupport@Acme.com</a> or  call <span className="font-bold">0900123456</span> </p>
        </div>

    )
}

export default SupportHero
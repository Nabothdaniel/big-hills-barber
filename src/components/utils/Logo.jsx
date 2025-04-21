import HillsLogo from "../../assets/images/hill-banner.jpeg";

const Logo = () => {
    return (
        <span className=" inline-flex  items-center gap-3 text-2xl font-semibold whitespace-nowrap text-white">
            <img src={HillsLogo} alt="big hils logo" className="h-10 w-10 rounded-full object-cover" />
            Big Hills
        </span>
    )
}

export default Logo

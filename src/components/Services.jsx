import { Link } from "react-router-dom";
import useServices from "../hooks/useServices";
import { FaArrowRightLong } from "react-icons/fa6";


const Services = () => {
    const [services] = useServices();
    console.log(services);

    return (
        <div className="px-10 md:px-32 lg:px-64 py-5">
            <h2 className="text-2xl md:text-3xl font-bold  md:px-10 text-center pt-2">Explore Our Storage Space, Co-Working Space, Co-Warehouse & Services</h2>
            <p className="px-10 text-center pt-8 ">Carefully crafted for a hassle-free and affordable experience</p>
            <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 ">
                {
                    services.map(item => <div key={item.id} className="relative pb-12 md:pb-8 pt-16">
                        <div>
                            <img className="w[70px] h-[70px]" src={item.image} alt="" />
                        </div>
                        <h3 className="font-bold pt-5">{item.serviceName}</h3>
                        <p className="py-3 block">{item.features}</p>
                        <p className="pt-2 absolute bottom-0 ">
                            <Link to="" className="text-[#0099ff] font-bold flex items-center ">
                                <span className="pr-2">Learn More</span> <FaArrowRightLong></FaArrowRightLong>
                            </Link>
                        </p>
                    </div>)
                }
            </div>

        </div>
    );
};


export default Services;
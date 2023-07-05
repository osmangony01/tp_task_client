import useServices from "../hooks/useServices";
import { FaArrowRightLong } from "react-icons/fa6";


const Task = () => {
    const [services] = useServices();
    console.log(services);

    return (
        <div className="px-60">
            <h2 className="text-3xl font-semibold px-10 text-center pt-2">Explore Our Storage Space, Co-Working Space, Co-Warehouse & Services</h2>
            <p className="px-10 text-center py-8">Carefully crafted for a hassle-free and affordable experience</p>
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-x-12 gap-y-10 pt-5">
                {
                    services.map(item => <div key={item.id}>
                        <div>
                            <img className="w[70px] h-[70px]" src={item.image} alt="" />
                        </div>
                        <h3 className="font-bold pt-5">{item.serviceName}</h3>
                        <p className="py-3">{item.features}</p>
                        <p className="pt-2">
                            <button className="text-[#0099ff] font-bold flex items-center ">
                                <span className="pr-2">Learn More</span> <FaArrowRightLong></FaArrowRightLong>
                            </button>
                        </p>
                    </div>)
                }
            </div>

        </div>
    );
};


export default Task;
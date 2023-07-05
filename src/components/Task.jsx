import useServices from "../hooks/useServices";

const Task = () => {
    const [services] = useServices();
    console.log(services);

    return (
        <div className="px-60">
            

        </div>
    );
};

export default Task;
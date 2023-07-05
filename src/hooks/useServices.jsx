import { useQuery } from '@tanstack/react-query';

const useServices = () => {
    const {isLoading, data: services = [] } = useQuery(['services'], async () => {
        const res = await fetch(`http://localhost:5000/services`);
        return res.json();
    })

    // if(isLoading){
    //     return <div>Loading...</div>
    // }

    return [services];
};

export default useServices;
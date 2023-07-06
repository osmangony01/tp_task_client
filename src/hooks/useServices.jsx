import { useQuery } from '@tanstack/react-query';

const useServices = () => {
    const {isLoading, data: services = [] } = useQuery(['services'], async () => {
        const res = await fetch(`https://tp-task-server.vercel.app/services`);
        return res.json();
    })

    return [services];
};

export default useServices;
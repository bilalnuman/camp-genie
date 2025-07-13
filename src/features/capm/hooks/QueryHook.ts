import { useMutation, useQuery } from '@tanstack/react-query';
import { login, me, signup } from '../services';



export const useGetCamps = (filters: any, options = {}) => {
    return useQuery({
        queryKey: ["camps", filters],
        queryFn: () => me(), // replace with actual fetch
        retry: 0,
        ...options,
    });
};


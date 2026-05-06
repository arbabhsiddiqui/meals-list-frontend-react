///hooks/useMeals.ts
import { useQuery } from '@tanstack/react-query';
import { fetchMeals } from './service';

export const useMeals = () => {
    return useQuery({
        queryKey: ['meals'],
        queryFn: fetchMeals,
        staleTime: 1000 * 60 * 5,
    });
};
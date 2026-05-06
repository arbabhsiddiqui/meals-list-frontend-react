import axios from 'axios';
import type { Meal } from './types';

export const fetchMeals = async (): Promise<Meal[]> => {
    const url = import.meta.env.VITE_API_BASE_URL;

    if (!url) throw new Error('API URL is not defined');

    const { data } = await axios.get(url);

    // Normalize response once here
    return data?.data?.data || [];
};
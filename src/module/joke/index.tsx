import MealCard from './meal.card';
import type { Meal } from './types';
import { useMeals } from './useMeals';



function JokesList() {
    const { data: meals, isLoading, isError, error } = useMeals();


    // 3. Early Returns (Senior Tip: Keep the main JSX clean)
    if (isLoading) {
        return (
            <div className="flex h-96 items-center justify-center bg-[#030712]">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="bg-[#030712] p-10 text-center text-red-400">
                Error: {error instanceof Error ? error.message : "Failed to load jokes"}
            </div>
        );
    }

    if (!meals || meals.length === 0) {
        return (
            <p className="text-center text-slate-500 mt-10">
                No meals found.
            </p>
        );
    }

    return (
        <main className="min-h-screen bg-[#030712] p-6 lg:p-10">
            {/* 4. Grid Container with better spacing and responsiveness */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center max-w-7xl mx-auto">
                {meals.map((item: Meal) => (
                    <MealCard key={item.id} item={item} />
                ))}
            </div>
        </main>
    );
}

export default JokesList;
import type { Meal } from "./types";

type MealCardProps = {
    item: Meal;
};

const MealCard = ({ item }: MealCardProps) => {
    const tags = item.strTags?.split(",") || [];

    return (
        <div
            className="group relative flex flex-col min-w-[300px] max-w-[450px] p-5 rounded-[24px] 
      bg-[#07102D] bg-gradient-to-tr from-[#07102D] to-[#3A3C54] 
      border border-[#545A6A] shadow-2xl cursor-pointer 
      transition-all duration-500 ease-out
      hover:scale-[1.03] hover:border-blue-400/50 
      hover:shadow-[0_20px_50px_rgba(8,112,184,0.25)]"
        >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 aspect-square mb-4">
                <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                {item.strMeal}
            </h3>

            {/* Meta */}
            <div className="flex gap-2 mt-2 text-xs">
                <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {item.strCategory}
                </span>
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-300 border border-green-500/20">
                    {item.strArea}
                </span>
            </div>

            {/* Instructions */}
            <p className="text-xs text-slate-400 mt-3 line-clamp-3">
                {item.strInstructions}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action Button */}
            <a
                href={item.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-center py-3 rounded-xl bg-white text-[#07102D] font-bold text-sm 
        transition-all duration-300 hover:opacity-100 active:scale-95"
            >
                ▶ Watch Recipe
            </a>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-1/2 
      bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-700 opacity-50" />
        </div>
    );
};

export default MealCard;
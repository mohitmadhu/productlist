import React from 'react';


const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-6">

            {categories.map((category) => (

                <button key={category} onClick={() => onSelectCategory(category)}

                    className={`px-4 py-2 rounded ${selectedCategory === category

                        ? "bg-blue-600 text-white"

                        : "bg-white"

                        }`}

                >{category}

                </button>

            ))}

        </div>

    );

}

export default CategoryFilter;

import { useState } from 'react';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import productsData from './data/products.json'

function App() {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(productsData.map((product) => product.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
        (product) => product.category === selectedCategory
      );


  return (
    
      <div className="min-h-screen bg-gray-300 px-10 py-8">
        <h1 className='text-3xl font-bold text-center mb-6'>Product Store</h1>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ProductList products={filteredProducts} />

      </div>

    
  );
}

export default App;

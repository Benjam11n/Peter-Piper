import ProductGrid from "../../components/products/ProductGrid";
import ProductFilters from "../../components/products/ProductFilters";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl text-gray-600">
            Explore our curated selection of rare and exotic chilies
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

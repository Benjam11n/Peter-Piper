import Link from 'next/link';
import ChiliChart from '@/components/ui/ChiliChart';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    origin: string;
    price: number;
    description: string;
    stats: Array<{ attribute: string; value: number }>;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.origin}</p>
        <p className="text-xl font-bold text-red-600 mb-4">${product.price}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <div className="mb-6 h-64">
          <ChiliChart stats={product.stats} />
        </div>
        <Link
          href={`/products/${product.id}`}
          className="inline-block w-full bg-red-600 text-white text-center px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

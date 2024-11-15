import { motion } from "framer-motion";
import Link from "next/link";
import ChiliChart from "@/components/ui/ChiliChart";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-xl overflow-hidden card-hover"
    >
      <div className="aspect-square bg-gradient-fire p-1">
        <div className="w-full h-full bg-brand-black flex items-center justify-center">
          <span className="text-white/50">Product Image</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-2">{product.origin}</p>
        <p className="text-3xl font-bold text-gradient mb-4">
          ${product.price}
        </p>
        <p className="text-gray-400 mb-6">{product.description}</p>
        <div className="mb-6 h-64 text-brand-red">
          <ChiliChart stats={product.stats} />
        </div>
        <Link
          href={`/products/${product.id}`}
          className="btn-primary w-full text-center block"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

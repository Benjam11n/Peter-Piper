import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Aji Charapita",
    origin: "Peruvian Amazon",
    price: 129.99,
    description: 'Known as "Mother of all Chilis"',
  },
  {
    id: 2,
    name: "Black Cobra",
    origin: "Northern Thailand",
    price: 89.99,
    description: "Rare and exceptionally spicy",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Product Image
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {product.origin}
              </p>
              <p className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">
                ${product.price}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {product.description}
              </p>
              <Link
                href={`/products/${product.id}`}
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

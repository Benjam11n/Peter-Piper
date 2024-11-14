import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover the World&apos;s Finest Chilies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Curated rare and exotic chilies for the distinguished palate
            </p>
            <Link
              href="/products"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Explore Collection
            </Link>
          </div>
          <div className="relative scale-up">
            <div className="aspect-square rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

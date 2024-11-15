import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-brand-black dark:bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-fire blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-fire blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>
      <div className="container mx-auto px-4 py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Ignite</span> Your
              <br />
              Culinary Journey
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Experience the world's most exclusive chilies,
              <br />
              crafted for the distinguished palate
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="btn-primary">
                Explore Collection
              </Link>
              <Link
                href="/about"
                className="py-3 px-8 rounded-full border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="relative scale-up">
            <div className="aspect-square rounded-full bg-gradient-fire p-1 animate-float shadow-glow-lg">
              <div className="w-full h-full rounded-full bg-brand-black flex items-center justify-center overflow-hidden">
                <span className="text-white/50">Product Image</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-red/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

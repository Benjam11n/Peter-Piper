import { Award, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-red-50 to-orange-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated to bringing the world&apos;s finest and rarest chilies
              to distinguished palates everywhere
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Global Sourcing</h3>
              <p className="text-gray-600">
                We travel the world to find the most unique and flavorful
                chilies
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-600">
                Every chili is carefully selected and tested for exceptional
                quality
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Passion for Flavor</h3>
              <p className="text-gray-600">
                We&apos;re dedicated to sharing the complex world of chili
                flavors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Founder", "Head of Sourcing", "Master Taster"].map(
              (role, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-100 to-orange-100 mx-auto mb-6">
                    <span className="flex items-center justify-center h-full text-gray-500">
                      Team Photo
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{role}</h3>
                  <p className="text-gray-600">
                    Passionate about bringing the finest chilies to your table
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

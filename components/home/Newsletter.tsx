export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Join the Chili Enthusiasts Club
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get exclusive access to new arrivals, tasting notes, and special
            offers
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white text-gray-900"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

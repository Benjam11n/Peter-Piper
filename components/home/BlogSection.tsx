import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Mastering Chili Fermentation",
    excerpt: "Discover the ancient art of fermentation...",
    category: "Education",
  },
  {
    id: 2,
    title: "Rare Chili Varieties",
    excerpt: "Exploring unique flavors...",
    category: "Products",
  },
  {
    id: 3,
    title: "Cooking with Heat",
    excerpt: "Tips from master chefs...",
    category: "Recipes",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest from the Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="bg-white rounded-lg shadow-md overflow-hidden fade-in-up"
            >
              <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <span className="text-gray-500">Blog Image</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-red-600 font-semibold">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

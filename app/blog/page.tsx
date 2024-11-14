import BlogGrid from '../../components/blog/BlogGrid';
import FeaturedPost from '../../components/blog/FeaturedPost';
import CategoryTabs from '../../components/blog/CategoryTabs';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">The Spice Chronicle</h1>
          <p className="text-xl text-gray-600">
            Stories, recipes, and insights from the world of luxury chilies
          </p>
        </div>
        <FeaturedPost />
        <CategoryTabs />
        <BlogGrid />
      </div>
    </div>
  );
}

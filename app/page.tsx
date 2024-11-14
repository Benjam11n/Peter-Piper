import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import EducationSection from "../components/home/EducationSection";
import BlogSection from "../components/home/BlogSection";
import Newsletter from "../components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <EducationSection />
      <BlogSection />
      <Newsletter />
    </>
  );
}

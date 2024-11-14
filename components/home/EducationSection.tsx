import { Flame, Sprout, Book } from 'lucide-react';

const features = [
  {
    title: 'Heat Index Guide',
    description: 'Understanding Scoville ratings',
    icon: Flame,
  },
  {
    title: 'Cultivation Stories',
    description: 'From seed to harvest',
    icon: Sprout,
  },
  {
    title: 'Recipe Library',
    description: 'Culinary inspirations',
    icon: Book,
  },
];

export default function EducationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{ animationDelay: `${index * 0.2}s` }}
              className="text-center fade-in-up"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-red-100">
                <feature.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

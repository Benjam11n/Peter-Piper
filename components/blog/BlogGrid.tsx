'use client';

import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'Understanding Scoville Heat Units',
    excerpt: 'A deep dive into the science of measuring chili heat...',
    category: 'Education',
    readTime: '5 min read',
    date: 'Nov 15, 2023',
  },
  {
    id: 2,
    title: 'Rare Chilies of the Amazon',
    excerpt: 'Exploring the hidden gems of South American peppers...',
    category: 'Cultivation',
    readTime: '8 min read',
    date: 'Nov 12, 2023',
  },
  // Add more posts as needed
];

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="group">
          <Link href={`/blog/${post.id}`}>
            <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden">
              {/* Placeholder Image Section */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 group-hover:scale-105 transition-transform duration-300">
                {/* Replace this with a dynamic image if needed */}
                <span className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Blog Image
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

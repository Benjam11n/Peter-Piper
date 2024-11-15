"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
  {
    id: 3,
    name: "Ghost Pepper",
    origin: "Northeast India",
    price: 99.99,
    description: "Intensely hot with fruity notes",
  },
  {
    id: 4,
    name: "Carolina Reaper",
    origin: "South Carolina, USA",
    price: 149.99,
    description: "World's hottest chili pepper",
  },
  {
    id: 5,
    name: "Scotch Bonnet",
    origin: "Caribbean",
    price: 79.99,
    description: "Sweet and spicy Caribbean favorite",
  },
];

export default function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };
  const smoothProgress = useSpring(scrollXProgress, springConfig);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isHovered = false;

    const startScrolling = () => {
      if (!isHovered) {
        controls.start({
          x: scrollRef.current
            ? -scrollRef.current.offsetWidth + containerRef.current!.offsetWidth
            : 0,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        });
      }
    };

    const handleMouseEnter = () => {
      isHovered = true;
      controls.stop();
    };

    const handleMouseLeave = () => {
      isHovered = false;
      timeoutId = setTimeout(startScrolling, 1000);
    };

    if (containerRef.current && scrollRef.current) {
      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
      startScrolling();
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        containerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
      clearTimeout(timeoutId);
    };
  }, [controls]);

  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Collection</span>
        </h2>

        <div
          ref={containerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <motion.div
            ref={scrollRef}
            animate={controls}
            className="flex gap-8 px-4"
            style={{
              width: "fit-content",
              minWidth: "100%",
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 w-[300px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="glass-effect rounded-xl p-6 card-hover">
                  <div className="aspect-square rounded-lg bg-gradient-fire p-1 mb-4">
                    <div className="w-full h-full rounded-lg bg-brand-black flex items-center justify-center">
                      <span className="text-white/50">Product Image</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-400 mb-2">{product.origin}</p>
                  <p className="text-2xl font-bold text-gradient mb-3">
                    ${product.price}
                  </p>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="btn-primary w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

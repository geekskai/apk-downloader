"use client";

import Link from "next/link";
import {
  Gamepad2,
  MessagesSquare,
  Music,
  Film,
  GraduationCap,
  ShoppingCart,
  Camera,
  Heart,
  Plane,
  Stethoscope,
  Briefcase
} from "lucide-react";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: "games",
    name: "Games",
    icon: <Gamepad2 className="h-5 w-5" />,
    count: "12,591 apps",
    color: "bg-red-100 text-red-600 border-red-200"
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: <MessagesSquare className="h-5 w-5" />,
    count: "2,780 apps",
    color: "bg-blue-100 text-blue-600 border-blue-200"
  },
  {
    id: "music-audio",
    name: "Music & Audio",
    icon: <Music className="h-5 w-5" />,
    count: "1,509 apps",
    color: "bg-purple-100 text-purple-600 border-purple-200"
  },
  {
    id: "video-entertainment",
    name: "Video & Entertainment",
    icon: <Film className="h-5 w-5" />,
    count: "5,102 apps",
    color: "bg-pink-100 text-pink-600 border-pink-200"
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="m16 15-3-3 3-3" /></svg>,
    count: "2,980 apps",
    color: "bg-green-100 text-green-600 border-green-200"
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: <ShoppingCart className="h-5 w-5" />,
    count: "1,950 apps",
    color: "bg-yellow-100 text-yellow-600 border-yellow-200"
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="h-5 w-5" />,
    count: "2,140 apps",
    color: "bg-teal-100 text-teal-600 border-teal-200"
  },
  {
    id: "business",
    name: "Business",
    icon: <Briefcase className="h-5 w-5" />,
    count: "1,360 apps",
    color: "bg-slate-100 text-slate-600 border-slate-200"
  },
  {
    id: "photography",
    name: "Photography",
    icon: <Camera className="h-5 w-5" />,
    count: "980 apps",
    color: "bg-cyan-100 text-cyan-600 border-cyan-200"
  },
  {
    id: "health-fitness",
    name: "Health & Fitness",
    icon: <Stethoscope className="h-5 w-5" />,
    count: "1,230 apps",
    color: "bg-emerald-100 text-emerald-600 border-emerald-200"
  },
  {
    id: "travel-local",
    name: "Travel & Local",
    icon: <Plane className="h-5 w-5" />,
    count: "870 apps",
    color: "bg-indigo-100 text-indigo-600 border-indigo-200"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    icon: <Heart className="h-5 w-5" />,
    count: "1,590 apps",
    color: "bg-rose-100 text-rose-600 border-rose-200"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Link
            href="/categories"
            className="text-sm text-violet-600 hover:underline flex items-center gap-1"
          >
            View All Categories
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${category.color} mb-2`}>
                {category.icon}
              </div>
              <h3 className="font-medium text-sm">{category.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

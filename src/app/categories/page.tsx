import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
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
  Briefcase,
  FileText,
  Tv,
  CreditCard,
  BarChart,
  Coffee,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Featured categories data
const featuredCategories = [
  {
    id: "games",
    name: "Games",
    icon: <Gamepad2 className="h-8 w-8" />,
    count: "12,591 apps",
    color: "bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800/30",
    description: "Mobile games for entertainment and fun",
    image: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/category-games.jpg"
  },
  {
    id: "social-media",
    name: "Social Media",
    icon: <MessagesSquare className="h-8 w-8" />,
    count: "2,780 apps",
    color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/30",
    description: "Connect with friends and share updates",
    image: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/category-social.jpg"
  },
  {
    id: "music-audio",
    name: "Music & Audio",
    icon: <Music className="h-8 w-8" />,
    count: "1,509 apps",
    color: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/30",
    description: "Stream music and listen to podcasts",
    image: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/category-music.jpg"
  },
  {
    id: "video-entertainment",
    name: "Video & Entertainment",
    icon: <Film className="h-8 w-8" />,
    count: "5,102 apps",
    color: "bg-pink-100 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/30",
    description: "Stream videos and watch content online",
    image: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/category-video.jpg"
  }
];

// Categories data
const categories = [
  {
    id: "productivity",
    name: "Productivity",
    icon: <FileText className="h-6 w-6" />,
    count: "2,980 apps",
    color: "bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800/30",
    description: "Get organized and boost your efficiency"
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: <ShoppingCart className="h-6 w-6" />,
    count: "1,950 apps",
    color: "bg-yellow-100 dark:bg-yellow-950/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800/30",
    description: "Online shopping and retail apps"
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="h-6 w-6" />,
    count: "2,140 apps",
    color: "bg-teal-100 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800/30",
    description: "Learning tools and educational resources"
  },
  {
    id: "business",
    name: "Business",
    icon: <Briefcase className="h-6 w-6" />,
    count: "1,360 apps",
    color: "bg-slate-100 dark:bg-slate-950/30 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800/30",
    description: "Business tools and professional apps"
  },
  {
    id: "photography",
    name: "Photography",
    icon: <Camera className="h-6 w-6" />,
    count: "980 apps",
    color: "bg-cyan-100 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/30",
    description: "Photo editing and camera tools"
  },
  {
    id: "health-fitness",
    name: "Health & Fitness",
    icon: <Stethoscope className="h-6 w-6" />,
    count: "1,230 apps",
    color: "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/30",
    description: "Fitness trackers and health management"
  },
  {
    id: "travel-local",
    name: "Travel & Local",
    icon: <Plane className="h-6 w-6" />,
    count: "870 apps",
    color: "bg-indigo-100 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/30",
    description: "Travel guides and location services"
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    icon: <Heart className="h-6 w-6" />,
    count: "1,590 apps",
    color: "bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800/30",
    description: "Dating, fashion, and lifestyle apps"
  },
  {
    id: "news-magazines",
    name: "News & Magazines",
    icon: <Tv className="h-6 w-6" />,
    count: "760 apps",
    color: "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800/30",
    description: "News publications and media"
  },
  {
    id: "finance",
    name: "Finance",
    icon: <CreditCard className="h-6 w-6" />,
    count: "890 apps",
    color: "bg-lime-100 dark:bg-lime-950/30 text-lime-600 dark:text-lime-400 border-lime-200 dark:border-lime-800/30",
    description: "Banking, investing, and financial tools"
  },
  {
    id: "tools",
    name: "Tools",
    icon: <BarChart className="h-6 w-6" />,
    count: "3,450 apps",
    color: "bg-gray-100 dark:bg-gray-950/30 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800/30",
    description: "Utility apps and system tools"
  },
  {
    id: "food-drink",
    name: "Food & Drink",
    icon: <Coffee className="h-6 w-6" />,
    count: "950 apps",
    color: "bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/30",
    description: "Food delivery and recipe apps"
  }
];

const popularCategories = ["games", "social-media", "productivity", "video-entertainment", "tools", "education"];

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main className="pb-16">
        <div className="bg-gradient-to-b from-violet-50 to-white dark:from-violet-950/20 dark:to-background pt-10 pb-20">
          <div className="container">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">App Categories</h1>
              <p className="text-muted-foreground">
                Browse Android apps by category to find exactly what you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
                  <div className="relative h-48 w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${category.color}`}>
                        {category.icon}
                      </div>
                      <h2 className="text-xl font-bold text-white">{category.name}</h2>
                    </div>
                    <p className="text-sm text-white/80">{category.description}</p>
                    <p className="mt-2 text-xs text-white/70 font-medium">{category.count}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              Popular Categories
            </h2>
            <Badge variant="outline" className="px-3 py-1">
              Most downloaded
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {categories
              .filter(category => popularCategories.includes(category.id))
              .map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="group flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800/30 transition-all"
                >
                  <div className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-xl ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{category.count}</p>
                  </div>
                </Link>
              ))}
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              All Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories
              .filter(category => !popularCategories.includes(category.id))
              .map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="group flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800/30 transition-all"
                >
                  <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{category.count}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

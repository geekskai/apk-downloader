import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

// Mock app data by category
const categoryData = {
  "games": {
    id: "games",
    name: "Games",
    description: "Discover the best Android games for entertainment and fun",
    color: "bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400",
    apps: [
      {
        id: 6,
        name: "Candy Crush Saga",
        developer: "King",
        category: "Games",
        size: "74.9 MB",
        downloads: "1B+",
        rating: 4.5,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_candycrush.png",
      },
      {
        id: 13,
        name: "PUBG Mobile",
        developer: "Tencent Games",
        category: "Games",
        size: "645.3 MB",
        downloads: "1B+",
        rating: 4.2,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_pubg.png",
      },
      {
        id: 14,
        name: "Subway Surfers",
        developer: "SYBO Games",
        category: "Games",
        size: "96.5 MB",
        downloads: "1B+",
        rating: 4.4,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_subway.png",
      },
      {
        id: 15,
        name: "Minecraft",
        developer: "Mojang",
        category: "Games",
        size: "155.8 MB",
        downloads: "100M+",
        rating: 4.5,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_minecraft.png",
      },
      {
        id: 16,
        name: "Roblox",
        developer: "Roblox Corporation",
        category: "Games",
        size: "94.2 MB",
        downloads: "500M+",
        rating: 4.3,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_roblox.png",
      },
      {
        id: 50,
        name: "Clash of Clans",
        developer: "Supercell",
        category: "Games",
        size: "142.2 MB",
        downloads: "500M+",
        rating: 4.6,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_coc.png",
      },
      {
        id: 51,
        name: "Genshin Impact",
        developer: "miHoYo",
        category: "Games",
        size: "345.8 MB",
        downloads: "100M+",
        rating: 4.2,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_genshin.png",
      },
      {
        id: 52,
        name: "Among Us",
        developer: "InnerSloth LLC",
        category: "Games",
        size: "157.3 MB",
        downloads: "500M+",
        rating: 4.2,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_amongus.png",
      }
    ]
  },
  "social-media": {
    id: "social-media",
    name: "Social Media",
    description: "Connect with friends and share updates on popular social networks",
    color: "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400",
    apps: [
      {
        id: 1,
        name: "Instagram",
        developer: "Meta",
        category: "Social",
        size: "32.5 MB",
        downloads: "1B+",
        rating: 4.5,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
      },
      {
        id: 5,
        name: "TikTok",
        developer: "ByteDance",
        category: "Social",
        size: "41.3 MB",
        downloads: "2B+",
        rating: 4.5,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_tiktok.png",
      },
      {
        id: 9,
        name: "Facebook",
        developer: "Meta",
        category: "Social",
        size: "55.3 MB",
        downloads: "5B+",
        rating: 4.1,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_facebook.png",
      },
      {
        id: 12,
        name: "Snapchat",
        developer: "Snap Inc.",
        category: "Social",
        size: "67.8 MB",
        downloads: "1B+",
        rating: 4.1,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_snapchat.png",
      },
      {
        id: 17,
        name: "Twitter",
        developer: "X Corp.",
        category: "Social",
        size: "29.4 MB",
        downloads: "1B+",
        rating: 4.0,
        icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_twitter.png",
      }
    ]
  }
};

// Default category if the requested one doesn't exist
const defaultCategory = {
  id: "default",
  name: "Category",
  description: "Browse apps in this category",
  color: "bg-slate-100 dark:bg-slate-950/50 text-slate-600 dark:text-slate-400",
  apps: []
};

// Helper function to render star rating
const renderStarRating = (rating: number) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
};

// Define page props type
type CategoryPageProps = {
  params: { id: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;
  const category = categoryData[id as keyof typeof categoryData] || defaultCategory;

  return (
    <>
      <Header />
      <main>
        {/* Category Header */}
        <div className={`${category.color} py-12`}>
          <div className="container">
            <div className="mb-4">
              <Link
                href="/categories"
                className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
              >
                <ChevronLeft className="h-4 w-4" />
                All Categories
              </Link>
            </div>
            <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
            <p className="text-lg opacity-80">
              {category.description}
            </p>
          </div>
        </div>

        <div className="container py-8">
          {/* Category Apps */}
          {category.apps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.apps.map((app) => (
                <div
                  key={app.id}
                  className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all"
                >
                  <div className="shrink-0">
                    <div className="h-16 w-16 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                      <Image
                        src={app.icon}
                        alt={`${app.name} icon`}
                        width={64}
                        height={64}
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <Link href={`/app/${app.id}`} className="hover:text-violet-600 transition-colors">
                          <h3 className="font-semibold text-base">{app.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">{app.developer}</p>

                        <div className="flex items-center gap-3 mt-1">
                          {renderStarRating(app.rating)}
                          <span className="text-xs text-muted-foreground">{app.downloads} downloads</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="text-xs text-muted-foreground">
                          {app.size}
                        </div>
                        <Button
                          size="sm"
                          variant="default"
                          className="bg-violet-600 hover:bg-violet-700 rounded-full whitespace-nowrap"
                        >
                          Download APK
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="text-slate-400 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium">No apps found</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                We couldn't find any apps in this category yet. Check back later as our collection is constantly updated.
              </p>
              <div className="mt-6">
                <Link href="/categories">
                  <Button variant="outline">
                    Back to Categories
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

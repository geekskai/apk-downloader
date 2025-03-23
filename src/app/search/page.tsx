import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock search results data
const searchResults = [
  {
    id: 1,
    name: "Instagram",
    developer: "Meta",
    category: "Social",
    size: "32.4 MB",
    downloads: "1B+ downloads",
    rating: 4.5,
    description: "Connect with friends, share photos and videos, and discover content from creators worldwide.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
  },
  {
    id: 2,
    name: "Spotify",
    developer: "Spotify AB",
    category: "Music & Audio",
    size: "30.2 MB",
    downloads: "1B+ downloads",
    rating: 4.2,
    description: "Listen to music and podcasts from millions of creators around the world.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_spotify.png",
  },
  {
    id: 3,
    name: "YouTube",
    developer: "Google LLC",
    category: "Video & Entertainment",
    size: "38.7 MB",
    downloads: "10B+ downloads",
    rating: 4.4,
    description: "Explore and share videos from creators across the globe.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_youtube.png",
  },
  {
    id: 4,
    name: "WhatsApp",
    developer: "Meta",
    category: "Communication",
    size: "22.1 MB",
    downloads: "5B+ downloads",
    rating: 4.3,
    description: "Fast, simple, and secure messaging with friends and family around the world.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_whatsapp.png",
  },
  {
    id: 5,
    name: "TikTok",
    developer: "ByteDance",
    category: "Social",
    size: "41.3 MB",
    downloads: "2B+ downloads",
    rating: 4.5,
    description: "Watch and create short videos with special effects, trending sounds, and more.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_tiktok.png",
  },
  {
    id: 6,
    name: "Candy Crush Saga",
    developer: "King",
    category: "Games",
    size: "74.9 MB",
    downloads: "1B+ downloads",
    rating: 4.5,
    description: "Explore a delicious puzzle through hundreds of challenging levels.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_candycrush.png",
  },
  {
    id: 7,
    name: "Instagram Lite",
    developer: "Meta",
    category: "Social",
    size: "2.1 MB",
    downloads: "500M+ downloads",
    rating: 4.3,
    description: "A lightweight version of Instagram that uses less data.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
  },
  {
    id: 8,
    name: "Spotify Lite",
    developer: "Spotify AB",
    category: "Music & Audio",
    size: "10.5 MB",
    downloads: "100M+ downloads",
    rating: 4.0,
    description: "A smaller, lighter version of Spotify that works on all phones.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_spotify.png",
  }
];

// Helper function to render star rating
const renderStarRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`star-${i}`} className="w-4 h-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          <path fill="white" d="M12 17.27L12 5 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-star-${i}`} className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
};

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const searchQuery = searchParams.q || '';

  // Filter apps based on search query
  // In a real app, this would be a backend API call
  const filteredApps = searchQuery
    ? searchResults.filter(app =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchResults;

  return (
    <>
      <Header />
      <main className="py-6">
        <div className="container">
          {/* Search Form */}
          <div className="mb-8 max-w-2xl mx-auto">
            <form className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type="search"
                  name="q"
                  defaultValue={searchQuery}
                  placeholder="Search for apps, games, or packages..."
                  className="pl-4 pr-10 py-6 rounded-full border-slate-200 shadow-sm"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <SearchIcon className="h-4 w-4" />
                </div>
              </div>
              <Button type="submit" className="bg-violet-600 hover:bg-violet-700 rounded-full px-6">
                Search
              </Button>
            </form>
          </div>

          {/* Search Results */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : "All Apps"
              }
            </h1>
            <p className="text-muted-foreground">
              {filteredApps.length} {filteredApps.length === 1 ? 'app' : 'apps'} found
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all"
              >
                <div className="shrink-0">
                  <div className="h-16 w-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
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
                  <div className="flex justify-between items-start">
                    <div>
                      <Link href={`/app/${app.id}`} className="hover:text-violet-600 transition-colors">
                        <h3 className="font-semibold text-base truncate">{app.name}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{app.developer}</p>

                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs font-normal">
                          {app.category}
                        </Badge>
                        {renderStarRating(app.rating)}
                      </div>

                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">{app.size} • {app.downloads}</div>
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-violet-600 hover:bg-violet-700 rounded-full"
                    >
                      Download APK
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredApps.length === 0 && (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
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
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">No results found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                We couldn't find any apps matching your search. Try using different keywords.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

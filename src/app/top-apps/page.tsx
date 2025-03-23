import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock top apps data
const topApps = {
  all: [
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
      id: 3,
      name: "YouTube",
      developer: "Google LLC",
      category: "Video & Entertainment",
      size: "36.7 MB",
      downloads: "10B+",
      rating: 4.4,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_youtube.png",
    },
    {
      id: 4,
      name: "WhatsApp",
      developer: "Meta",
      category: "Communication",
      size: "22.1 MB",
      downloads: "5B+",
      rating: 4.3,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_whatsapp.png",
    },
    {
      id: 2,
      name: "Spotify",
      developer: "Spotify AB",
      category: "Music & Audio",
      size: "30.2 MB",
      downloads: "1B+",
      rating: 4.2,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_spotify.png",
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
      id: 10,
      name: "Netflix",
      developer: "Netflix, Inc.",
      category: "Entertainment",
      size: "40.2 MB",
      downloads: "1B+",
      rating: 4.4,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_netflix.png",
    },
    {
      id: 11,
      name: "Google Maps",
      developer: "Google LLC",
      category: "Travel & Local",
      size: "38.6 MB",
      downloads: "5B+",
      rating: 4.3,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_gmaps.png",
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
    }
  ],
  games: [
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
    }
  ],
  social: [
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
  ],
  entertainment: [
    {
      id: 3,
      name: "YouTube",
      developer: "Google LLC",
      category: "Video & Entertainment",
      size: "36.7 MB",
      downloads: "10B+",
      rating: 4.4,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_youtube.png",
    },
    {
      id: 10,
      name: "Netflix",
      developer: "Netflix, Inc.",
      category: "Entertainment",
      size: "40.2 MB",
      downloads: "1B+",
      rating: 4.4,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_netflix.png",
    },
    {
      id: 18,
      name: "Disney+",
      developer: "Disney",
      category: "Entertainment",
      size: "36.5 MB",
      downloads: "500M+",
      rating: 4.3,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_disney.png",
    },
    {
      id: 19,
      name: "Amazon Prime Video",
      developer: "Amazon Mobile LLC",
      category: "Entertainment",
      size: "48.9 MB",
      downloads: "500M+",
      rating: 4.2,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_prime.png",
    },
    {
      id: 20,
      name: "Twitch",
      developer: "Twitch Interactive, Inc.",
      category: "Entertainment",
      size: "53.7 MB",
      downloads: "100M+",
      rating: 4.2,
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_twitch.png",
    }
  ]
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

export default function TopAppsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Top Apps</h1>
            <p className="text-muted-foreground">
              Discover the most popular and trending apps used by millions
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Apps</TabsTrigger>
              <TabsTrigger value="games">Games</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Top Apps Overall</h2>
                <p className="text-sm text-muted-foreground">The most downloaded apps across all categories</p>
              </div>
              <TopAppsList apps={topApps.all} />
            </TabsContent>

            <TabsContent value="games">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Top Games</h2>
                <p className="text-sm text-muted-foreground">The most popular games for your entertainment</p>
              </div>
              <TopAppsList apps={topApps.games} />
            </TabsContent>

            <TabsContent value="social">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Top Social Apps</h2>
                <p className="text-sm text-muted-foreground">Stay connected with the most popular social networks</p>
              </div>
              <TopAppsList apps={topApps.social} />
            </TabsContent>

            <TabsContent value="entertainment">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Top Entertainment Apps</h2>
                <p className="text-sm text-muted-foreground">Stream videos, watch movies, and enjoy media content</p>
              </div>
              <TopAppsList apps={topApps.entertainment} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Helper component for ranking list
function TopAppsList({ apps }: { apps: typeof topApps.all }) {
  return (
    <div className="space-y-4">
      {apps.map((app, index) => (
        <div
          key={app.id}
          className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all"
        >
          <div className="text-2xl font-bold text-slate-300 dark:text-slate-700 w-8 text-center">
            {index + 1}
          </div>

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
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <Link href={`/app/${app.id}`} className="hover:text-violet-600 transition-colors">
                  <h3 className="font-semibold text-base">{app.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground">{app.developer}</p>
                <div className="flex items-center gap-3 mt-1">
                  <Badge variant="outline" className="text-xs font-normal">
                    {app.category}
                  </Badge>
                  {renderStarRating(app.rating)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-xs text-muted-foreground">
                  <div>{app.size}</div>
                  <div>{app.downloads} downloads</div>
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
  );
}

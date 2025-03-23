import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

// Mock new releases data with release dates
const newReleases = {
  today: [
    {
      id: 30,
      name: "WhatsApp Beta",
      developer: "Meta",
      category: "Communication",
      size: "24.3 MB",
      version: "2.23.15.12",
      releaseDate: "June 15, 2023",
      description: "Latest beta version with new features and bug fixes.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_whatsapp.png",
    },
    {
      id: 31,
      name: "Call of Duty Mobile",
      developer: "Activision",
      category: "Games",
      size: "1.8 GB",
      version: "1.0.32",
      releaseDate: "June 15, 2023",
      description: "New season update with additional maps and weapons.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_codm.png",
    },
    {
      id: 32,
      name: "Instagram",
      developer: "Meta",
      category: "Social",
      size: "32.7 MB",
      version: "293.0.0.0",
      releaseDate: "June 15, 2023",
      description: "Bug fixes and performance improvements.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
    }
  ],
  thisWeek: [
    {
      id: 1,
      name: "Instagram",
      developer: "Meta",
      category: "Social",
      size: "32.5 MB",
      version: "292.0.0.15",
      releaseDate: "June 12, 2023",
      description: "New features for creating and sharing reels.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
    },
    {
      id: 35,
      name: "Telegram",
      developer: "Telegram FZ LLC",
      category: "Communication",
      size: "38.2 MB",
      version: "9.6.7",
      releaseDate: "June 11, 2023",
      description: "New animated emoji and improved voice chat.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_telegram.png",
    },
    {
      id: 36,
      name: "YouTube",
      developer: "Google LLC",
      category: "Video & Entertainment",
      size: "36.9 MB",
      version: "18.25.35",
      releaseDate: "June 10, 2023",
      description: "Improved player controls and background playback.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_youtube.png",
    },
    {
      id: 37,
      name: "Facebook",
      developer: "Meta",
      category: "Social",
      size: "56.1 MB",
      version: "423.0.0.21",
      releaseDate: "June 10, 2023",
      description: "New interface for Marketplace and improved News Feed algorithm.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_facebook.png",
    }
  ],
  thisMonth: [
    {
      id: 40,
      name: "Spotify",
      developer: "Spotify AB",
      category: "Music & Audio",
      size: "30.4 MB",
      version: "8.8.26.780",
      releaseDate: "June 5, 2023",
      description: "New UI for podcast discovery and improved audio quality settings.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_spotify.png",
    },
    {
      id: 41,
      name: "Netflix",
      developer: "Netflix, Inc.",
      category: "Entertainment",
      size: "40.5 MB",
      version: "8.79.0",
      releaseDate: "June 3, 2023",
      description: "Improved download quality options and new content recommendation algorithm.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_netflix.png",
    },
    {
      id: 42,
      name: "TikTok",
      developer: "ByteDance",
      category: "Social",
      size: "41.8 MB",
      version: "29.8.4",
      releaseDate: "May 29, 2023",
      description: "New video effects and improved discovery features.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_tiktok.png",
    },
    {
      id: 43,
      name: "Google Maps",
      developer: "Google LLC",
      category: "Travel & Local",
      size: "38.8 MB",
      version: "11.85.0801",
      releaseDate: "May 25, 2023",
      description: "Improved cycling routes and public transit information.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_gmaps.png",
    },
    {
      id: 44,
      name: "Snapchat",
      developer: "Snap Inc.",
      category: "Social",
      size: "68.2 MB",
      version: "12.53.0.38",
      releaseDate: "May 20, 2023",
      description: "New AR lenses and improved story sharing features.",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_snapchat.png",
    }
  ]
};

// Helper function to render version badge
function VersionBadge({ version }: { version: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 text-xs font-semibold text-violet-700 dark:text-violet-400">
      v{version}
    </span>
  );
}

export default function NewReleasesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">New Releases</h1>
            <p className="text-muted-foreground">
              Stay up-to-date with the latest app releases and updates
            </p>
          </div>

          <Tabs defaultValue="today" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="this-week">This Week</TabsTrigger>
              <TabsTrigger value="this-month">This Month</TabsTrigger>
            </TabsList>

            <TabsContent value="today">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-violet-500" />
                  <h2 className="text-xl font-semibold">Released Today</h2>
                </div>
                <p className="text-sm text-muted-foreground">The latest app updates released in the last 24 hours</p>
              </div>
              <NewReleasesGrid apps={newReleases.today} />
            </TabsContent>

            <TabsContent value="this-week">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-violet-500" />
                  <h2 className="text-xl font-semibold">Released This Week</h2>
                </div>
                <p className="text-sm text-muted-foreground">Recent updates from the past 7 days</p>
              </div>
              <NewReleasesGrid apps={newReleases.thisWeek} />
            </TabsContent>

            <TabsContent value="this-month">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-violet-500" />
                  <h2 className="text-xl font-semibold">Released This Month</h2>
                </div>
                <p className="text-sm text-muted-foreground">All notable releases from the last 30 days</p>
              </div>
              <NewReleasesGrid apps={newReleases.thisMonth} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Helper component for new releases grid display
function NewReleasesGrid({ apps }: { apps: typeof newReleases.today }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apps.map((app) => (
        <Card
          key={app.id}
          className="overflow-hidden border-slate-200 dark:border-slate-800 hover:shadow-md transition-all"
        >
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-start gap-3">
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

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link href={`/app/${app.id}`} className="hover:text-violet-600 transition-colors">
                        <h3 className="font-semibold text-base">{app.name}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">{app.developer}</p>

                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs font-normal">
                          {app.category}
                        </Badge>
                        <VersionBadge version={app.version} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground line-clamp-2">{app.description}</p>
                  </div>

                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{app.releaseDate}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{app.size}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 border-t border-slate-200 dark:border-slate-800">
              <Button
                size="sm"
                className="w-full bg-violet-600 hover:bg-violet-700 rounded-full"
              >
                Download APK
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

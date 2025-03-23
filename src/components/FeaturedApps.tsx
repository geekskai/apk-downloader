"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ImageOff } from "lucide-react";
import { useState } from "react";

const appData = [
  {
    id: 1,
    name: "Instagram",
    developer: "Meta",
    category: "Social",
    size: "32.4 MB",
    downloads: "1B+ downloads",
    description: "Connect with friends, share photos and videos, and discover content from creators worldwide.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
    // Fallback static screenshot URLs in case the dynamic ones don't load
    screenshot: "/instagram-screenshot.png",
  },
  {
    id: 2,
    name: "Spotify",
    developer: "Spotify AB",
    category: "Music & Audio",
    size: "30.2 MB",
    downloads: "1B+ downloads",
    description: "Listen to music and podcasts from millions of creators around the world.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_spotify.png",
    screenshot: "/spotify-screenshot.png",
  },
  {
    id: 3,
    name: "YouTube",
    developer: "Google LLC",
    category: "Video & Entertainment",
    size: "38.7 MB",
    downloads: "10B+ downloads",
    description: "Explore and share videos from creators across the globe.",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_youtube.png",
    screenshot: "/youtube-screenshot.png",
  }
];

// Placeholder for apps with no screenshots or if image fails to load
const PlaceholderImage = ({ appName }) => (
  <div className="flex flex-col items-center justify-center h-48 bg-slate-100 rounded-lg">
    <ImageOff className="h-10 w-10 text-slate-300 mb-2" />
    <p className="text-sm text-slate-400">{appName} preview</p>
  </div>
);

export function FeaturedApps() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Apps</h2>
          <Link
            href="/top-apps"
            className="text-sm text-violet-600 hover:underline flex items-center gap-1"
          >
            View all
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {appData.map((app) => (
            <Card key={app.id} className="overflow-hidden border-slate-200 hover:shadow-md transition-shadow duration-300">
              <Link
                href={`/apps/${app.id}`}
                className="block"
              >
                <div className="h-48 relative bg-slate-50">
                  {app.screenshot && !imageErrors[app.id] ? (
                    <Image
                      src={app.screenshot}
                      alt={`${app.name} screenshot`}
                      fill
                      className="object-cover"
                      onError={() => handleImageError(app.id)}
                      priority
                      crossOrigin="anonymous"
                    />
                  ) : (
                    <PlaceholderImage appName={app.name} />
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-12 w-12 rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center">
                        {!imageErrors[app.id] ? (
                          <Image
                            src={app.icon}
                            alt={`${app.name} icon`}
                            width={48}
                            height={48}
                            className="object-contain"
                            onError={() => handleImageError(app.id)}
                            crossOrigin="anonymous"
                          />
                        ) : (
                          <div className="h-12 w-12 bg-violet-100 flex items-center justify-center rounded-lg">
                            <span className="text-violet-600 font-bold text-lg">{app.name.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-base truncate">{app.name}</h3>
                      <p className="text-xs text-muted-foreground">{app.developer}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs font-normal py-0 h-5">
                          {app.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{app.downloads}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {app.size}
                    </span>
                    <Button
                      size="sm"
                      className="bg-violet-600 hover:bg-violet-700 rounded-full text-xs px-4 h-8"
                    >
                      Download APK
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

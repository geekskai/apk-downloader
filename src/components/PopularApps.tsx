"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const popularApps = [
  {
    id: 1,
    name: "Instagram",
    developer: "Meta",
    category: "Social",
    size: "32.5 MB",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
    description: "Connect with friends, share photos and videos, and discover content from creators around the world."
  },
  {
    id: 2,
    name: "Spotify",
    developer: "Spotify AB",
    category: "Music & Audio",
    size: "30.2 MB",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_spotify.png",
    description: "Listen to music and podcasts from millions of creators around the world."
  },
  {
    id: 3,
    name: "YouTube",
    developer: "Google LLC",
    category: "Video & Entertainment",
    size: "36.7 MB",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_youtube.png",
    description: "Explore and share videos from creators across the globe."
  },
  {
    id: 4,
    name: "WhatsApp",
    developer: "Meta",
    category: "Communication",
    size: "22.1 MB",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_whatsapp.png",
    description: "Fast, simple, and secure messaging with friends and family around the world."
  },
  {
    id: 5,
    name: "TikTok",
    developer: "ByteDance",
    category: "Social",
    size: "41.3 MB",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_tiktok.png",
    description: "Watch and create short videos with special effects, trending sounds, and more."
  },
  {
    id: 6,
    name: "Candy Crush Saga",
    developer: "King",
    category: "Games",
    size: "74.9 MB",
    icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_candycrush.png",
    description: "Explore a delicious puzzle through hundreds of challenging levels."
  }
];

export function PopularApps() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Popular Apps</h2>
          <Link
            href="/top-apps"
            className="text-sm text-violet-600 hover:underline flex items-center gap-1"
          >
            View all
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {popularApps.map((app) => (
            <div
              key={app.id}
              className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-all"
            >
              <div className="shrink-0">
                <div className="h-12 w-12 rounded-lg overflow-hidden bg-white flex items-center justify-center border border-slate-200">
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

              <div className="flex-1 min-w-0 flex justify-between items-center">
                <div>
                  <Link href={`/apps/${app.id}`} className="hover:text-violet-600 transition-colors">
                    <h3 className="font-medium text-base truncate">{app.name}</h3>
                  </Link>
                  <p className="text-xs text-muted-foreground">{app.developer}</p>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1 w-[220px]">
                    {app.description}
                  </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}

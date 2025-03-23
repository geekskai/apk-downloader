"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Star, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AppHeaderProps {
  app: {
    id: number;
    name: string;
    developer: string;
    category: string;
    size: string;
    version: string;
    downloads: string;
    rating: number;
    icon: string;
    updated: string;
  };
}

export function AppHeader({ app }: AppHeaderProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    if (downloading || downloadComplete) return;

    setDownloading(true);

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadComplete(true);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 h-4 w-4" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative h-4 w-4">
          <Star className="absolute text-yellow-400 h-4 w-4" />
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="fill-yellow-400 text-yellow-400 h-4 w-4" />
          </div>
        </div>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="text-yellow-400 h-4 w-4" />
      );
    }

    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="ml-1 text-muted-foreground text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="flex gap-6">
        <div className="shrink-0">
          <div className="h-24 w-24 md:h-32 md:w-32 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={128}
              height={128}
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{app.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-muted-foreground">{app.developer}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <Badge variant="outline" className="text-xs font-medium">
                  {app.category}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-3">
                {renderStars(app.rating)}

                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Download className="h-4 w-4" />
                  <span>{app.downloads} downloads</span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Shield className="h-4 w-4" />
                  <span>Verified</span>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Updated {app.updated}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-sm text-right text-muted-foreground mb-1">
                <div>Version {app.version}</div>
                <div>{app.size}</div>
              </div>

              {!downloading && !downloadComplete && (
                <Button
                  onClick={handleDownload}
                  className="bg-violet-600 hover:bg-violet-700 rounded-full md:w-auto w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download APK
                </Button>
              )}

              {downloading && !downloadComplete && (
                <div className="flex items-center gap-3">
                  <div className="w-full max-w-[200px] h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-600 transition-all duration-200"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {Math.round(downloadProgress)}%
                  </span>
                </div>
              )}

              {downloadComplete && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  <span>Download Complete</span>
                </div>
              )}

              {!downloadComplete && (
                <Button variant="outline" className="rounded-full">
                  Report App
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

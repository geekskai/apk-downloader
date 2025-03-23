"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Check, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DownloadAnimationProps {
  appName: string;
  appSize: string;
  appIcon: string;
  onComplete?: () => void;
}

export function DownloadAnimation({
  appName,
  appSize,
  appIcon,
  onComplete,
}: DownloadAnimationProps) {
  const [stage, setStage] = useState<"idle" | "downloading" | "completed">("idle");
  const [progress, setProgress] = useState(0);

  const startDownload = () => {
    if (stage !== "idle") return;

    setStage("downloading");

    // Simulate download progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setStage("completed");
          onComplete?.();
        }, 500);
      }
      setProgress(Math.min(currentProgress, 100));
    }, 200);
  };

  return (
    <div className="inline-block">
      <button
        onClick={startDownload}
        disabled={stage !== "idle"}
        className={cn(
          "relative flex items-center gap-2 text-sm font-medium transition-all duration-300 focus:outline-none",
          stage === "idle"
            ? "bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full"
            : "bg-transparent",
          stage === "completed" && "text-green-500"
        )}
      >
        {stage === "idle" && (
          <>
            <Download className="h-4 w-4" />
            <span>Download APK</span>
          </>
        )}

        {stage === "downloading" && (
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={appIcon}
                  alt={`${appName} icon`}
                  width={40}
                  height={40}
                  className="object-cover rounded-full ring-2 ring-violet-400"
                />
              </div>
              <svg className="w-10 h-10 -rotate-90 transition-transform">
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  strokeWidth="2"
                  fill="transparent"
                  stroke="currentColor"
                  className="text-slate-200/50 dark:text-slate-700/50"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  strokeWidth="2"
                  fill="transparent"
                  stroke="currentColor"
                  strokeDasharray={113}
                  strokeDashoffset={113 - (113 * progress) / 100}
                  className="text-violet-500 transition-all duration-200"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{appName}</span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
                <Badge variant="outline" className="text-[10px] py-0 h-4 font-normal">
                  {appSize}
                </Badge>
              </div>
            </div>
          </div>
        )}

        {stage === "completed" && (
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={appIcon}
                  alt={`${appName} icon`}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/20">
                <Check className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">{appName}</span>
              <span className="text-xs text-green-500">Download complete</span>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

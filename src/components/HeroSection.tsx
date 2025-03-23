"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-violet-50 to-violet-100/50">
      {/* App icons decorative elements */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 shadow-lg absolute -top-10 right-16" />
        <div className="w-20 h-20 bg-blue-400 rounded-2xl -rotate-6 shadow-lg absolute top-20 right-20" />
        <div className="w-12 h-12 bg-green-400 rounded-2xl rotate-45 shadow-lg absolute top-10 right-0" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Download Your Favorite
            <span className="block text-violet-600">
              Android Apps
            </span>
          </h1>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Get the latest APK files directly to your device. Fast, secure, and always up-to-date.
          </p>

          <div className="pt-8 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="flex w-full max-w-xl items-center space-x-2 mx-auto">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search for apps, games, or packages..."
                  className="pl-4 pr-10 py-6 rounded-full shadow-sm focus-visible:ring-violet-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Search className="h-4 w-4" />
                </div>
              </div>
              <Button type="submit" className="bg-violet-600 hover:bg-violet-700 rounded-full py-6 px-8">
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

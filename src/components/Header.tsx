"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="border-b sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-violet-600">
              <Download className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg">APK <span className="text-violet-600">Downloader</span></span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Categories
            </Link>
            <Link href="/top-apps" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Top Apps
            </Link>
            <Link href="/new-releases" className="text-sm font-medium hover:text-violet-600 transition-colors">
              New Releases
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="relative hidden md:block w-64">
            <Input
              type="search"
              placeholder="Search for apps..."
              className="pl-3 pr-10 rounded-full border-slate-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              size="sm"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 h-6 w-6 p-0"
            >
              <span className="sr-only">Search</span>
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}

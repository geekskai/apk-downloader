import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, Star, MessageSquare, Calendar, Info, Award, Shield, Check } from "lucide-react";
import DownloadButton from "./DownloadButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock app data - in a real app this would come from an API
const appData = {
  id: 1,
  name: "Instagram",
  developer: "Meta",
  category: "Social",
  size: "32.4 MB",
  version: "v291.0.0.32",
  downloads: "1B+",
  rating: 4.5,
  description: "Connect with friends, share photos and videos, and discover content from creators worldwide. Instagram allows you to create and share your photos, stories, and videos with the friends and followers you care about. Follow your friends and family to see what they're up to, and discover accounts from all over the world that are sharing things you love.",
  features: [
    "Share and edit photos and videos",
    "Add filters and effects to your content",
    "Connect with friends and family",
    "Discover new content through the Explore tab",
    "Share Stories that disappear after 24 hours",
    "Direct message with friends",
    "Watch Reels - short-form videos",
  ],
  screenshots: [
    "https://same-assets.com/62f3486c6a8b8b84c1d68d38/instagram_screenshot_1.jpg",
    "https://same-assets.com/62f3486c6a8b8b84c1d68d38/instagram_screenshot_2.jpg",
    "https://same-assets.com/62f3486c6a8b8b84c1d68d38/instagram_screenshot_3.jpg",
  ],
  icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_instagram.png",
  requirements: "Android 6.0 and up",
  updated: "May 15, 2023",
  reviews: [
    {
      id: 1,
      username: "SocialMediaFan",
      avatar: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/avatar1.jpg",
      rating: 5,
      date: "March 12, 2023",
      comment: "Love the new features in this update! The interface is much more intuitive now."
    },
    {
      id: 2,
      username: "PhotoEnthusiast",
      avatar: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/avatar2.jpg",
      rating: 4,
      date: "February 28, 2023",
      comment: "Great app for sharing photos, but I wish they would bring back chronological feed by default."
    },
    {
      id: 3,
      username: "ContentCreator",
      avatar: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/avatar3.jpg",
      rating: 5,
      date: "January 15, 2023",
      comment: "The new creator tools are amazing! Makes it so much easier to plan and schedule content."
    }
  ],
  releaseLogs: [
    {
      version: "v291.0.0.32",
      date: "May 15, 2023",
      changes: [
        "Fixed bugs and improved app stability",
        "Updated UI for better user experience",
        "Added new filter options for Stories"
      ]
    },
    {
      version: "v290.0.0.28",
      date: "April 28, 2023",
      changes: [
        "New messaging features",
        "Performance improvements",
        "Fixed crash on certain devices"
      ]
    }
  ],
  similarApps: [
    {
      id: 5,
      name: "TikTok",
      developer: "ByteDance",
      size: "41.3 MB",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_tiktok.png",
    },
    {
      id: 2,
      name: "Spotify",
      developer: "Spotify AB",
      size: "30.2 MB",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_spotify.png",
    },
    {
      id: 3,
      name: "YouTube",
      developer: "Google LLC",
      size: "36.7 MB",
      icon: "https://same-assets.com/62f3486c6a8b8b84c1d68d38/android_icon_youtube.png",
    },
  ]
};

// Render star rating
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

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

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={`empty-star-${i}`} className="text-yellow-400 h-4 w-4" />
    );
  }

  return stars;
};

type AppDetailsProps = {
  params: { id: string }
}

export default function AppDetails({ params }: AppDetailsProps) {
  // For now we're just using mock data, but in a real app we'd fetch based on the ID
  const appId = params.id;

  return (
    <>
      <Header />

      <main className="pb-16 pt-6">
        <div className="container">
          <div className="mb-6">
            <Link
              href="/"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - App info */}
            <div className="lg:col-span-2 space-y-8">
              {/* App header */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="h-20 w-20 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <Image
                      src={appData.icon}
                      alt={`${appData.name} icon`}
                      width={80}
                      height={80}
                      className="object-cover"
                      unoptimized
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl font-bold">{appData.name}</h1>
                  <p className="text-muted-foreground">{appData.developer}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                      {appData.category}
                    </Badge>
                    <div className="text-xs text-muted-foreground">{appData.downloads} downloads</div>
                    <div className="flex items-center gap-1">
                      {renderStars(appData.rating)}
                      <span className="text-xs text-muted-foreground ml-1">{appData.rating}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <DownloadButton appSize={appData.size} />
                  </div>
                </div>
              </div>

              {/* Tabs for different sections */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="similar">Similar Apps</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8 pt-6">
                  {/* Screenshots */}
                  <div>
                    <h2 className="text-lg font-medium mb-4">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {appData.screenshots.length > 0 ? (
                        appData.screenshots.map((screenshot, index) => (
                          <div key={index} className="rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <Image
                              src={screenshot}
                              alt={`${appData.name} screenshot ${index + 1}`}
                              width={320}
                              height={640}
                              className="w-full h-auto object-cover"
                              unoptimized
                              crossOrigin="anonymous"
                            />
                          </div>
                        ))
                      ) : (
                        <div className="col-span-3 text-center py-10 text-muted-foreground">
                          No screenshots available
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h2 className="text-lg font-medium mb-3">Description</h2>
                    <p className="text-muted-foreground">{appData.description}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h2 className="text-lg font-medium mb-3">Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {appData.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-violet-600" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6 pt-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">User Reviews</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{appData.rating}</span>
                      <div className="flex">{renderStars(appData.rating)}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {appData.reviews.map(review => (
                      <div key={review.id} className="border border-slate-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full overflow-hidden">
                            <Image
                              src={review.avatar}
                              alt={review.username}
                              width={40}
                              height={40}
                              className="object-cover"
                              unoptimized
                              crossOrigin="anonymous"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium">{review.username}</h3>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex my-1">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="updates" className="space-y-6 pt-6">
                  <h2 className="text-lg font-medium">Release History</h2>

                  <div className="space-y-6">
                    {appData.releaseLogs.map((release, index) => (
                      <div key={index} className="border-l-2 border-violet-200 pl-4 pb-6">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-violet-50">
                            {release.version}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{release.date}</span>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {release.changes.map((change, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="h-4 w-4 rounded-full bg-violet-100 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                              </div>
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="similar" className="space-y-6 pt-6">
                  <h2 className="text-lg font-medium">Similar Apps You Might Like</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {appData.similarApps.map(app => (
                      <Link
                        key={app.id}
                        href={`/apps/${app.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <div className="shrink-0">
                          <div className="h-12 w-12 rounded-lg overflow-hidden">
                            <Image
                              src={app.icon}
                              alt={`${app.name} icon`}
                              width={48}
                              height={48}
                              className="object-cover"
                              unoptimized
                              crossOrigin="anonymous"
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm truncate">{app.name}</h3>
                          <p className="text-xs text-muted-foreground truncate">{app.developer}</p>
                          <p className="text-xs text-muted-foreground mt-1">{app.size}</p>
                        </div>
                        <div className="bg-violet-100 h-8 w-8 rounded-full flex items-center justify-center">
                          <Download className="h-4 w-4 text-violet-600" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right column - App stats and info */}
            <div className="space-y-8">
              {/* App info cards */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h2 className="text-lg font-medium mb-4">App Info</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-violet-100 h-8 w-8 rounded-full flex items-center justify-center">
                      <Info className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Version</div>
                      <div className="font-medium">{appData.version}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-violet-100 h-8 w-8 rounded-full flex items-center justify-center">
                      <Download className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Size</div>
                      <div className="font-medium">{appData.size}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-violet-100 h-8 w-8 rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Updated</div>
                      <div className="font-medium">{appData.updated}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-violet-100 h-8 w-8 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Requires</div>
                      <div className="font-medium">{appData.requirements}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Developer info */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h2 className="text-lg font-medium mb-4">Developer</h2>
                <div className="flex items-center gap-3">
                  <div className="bg-violet-100 h-10 w-10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <div className="font-medium">{appData.developer}</div>
                    <div className="text-sm text-muted-foreground">Official Developer</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Developer
                  </Button>
                </div>
              </div>

              {/* Safety banner */}
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-green-800">Verified Safe</div>
                    <div className="text-sm text-green-700">This app has been scanned for malware and is safe to install.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

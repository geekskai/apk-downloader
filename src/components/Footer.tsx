"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-slate-200 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="text-violet-600">
                <Download className="h-5 w-5" />
              </div>
              <div className="flex items-center">
                <span className="font-bold text-lg">APK <span className="text-violet-600">Downloader</span></span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Download the latest APK files directly to your device. Fast, secure, and always up-to-date.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-sm">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Games</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Social Media</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Productivity</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Entertainment</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Education</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Top Apps</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">New Releases</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Featured</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Most Downloaded</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Updated Today</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-sm">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">DMCA</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>© 2023 APK Downloader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

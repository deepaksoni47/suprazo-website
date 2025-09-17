"use client";
import { useEffect } from "react";

export function AnalyticsProvider() {
  useEffect(() => {
    // Only load analytics if not blocked
    const loadAnalytics = async () => {
      try {
        // Check if analytics is available
        const analyticsModule = await import("@vercel/analytics/next");
        
        // Test if we can access the analytics endpoint
        const testUrl = "/_vercel/insights/script.js";
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        
        await fetch(testUrl, { 
          method: "HEAD", 
          signal: controller.signal 
        });
        
        clearTimeout(timeoutId);
        
        // If we get here, analytics is not blocked
        console.log("✅ Vercel Analytics loaded successfully");
        
      } catch (error) {
        // Analytics is blocked or failed to load
        console.warn("⚠️ Vercel Analytics blocked or unavailable:", error instanceof Error ? error.message : 'Unknown error');
      }
    };

    loadAnalytics();
  }, []);

  return null;
}
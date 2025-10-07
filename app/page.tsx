import { DashboardHeader } from "@/components/dashboard-header"
import { FeaturedBanner } from "@/components/featured-banner"
import { ContentGrid } from "@/components/content-grid"
import { DashboardFooter } from "@/components/dashboard-footer"

export default function Home() {
  return (
    <div className="min-h-screen dark">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <FeaturedBanner />
        <ContentGrid />
      </main>
      <DashboardFooter />
    </div>
  )
}

import { Button } from "@/components/ui/button"

const modules = [
  {
    title: "Automated Workflows",
    description: "Streamline your processes with intelligent automation",
    image: "/workflow-automation-dashboard.png",
    chapters: "8 modules",
    featured: true,
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance metrics as they happen",
    image: "/analytics-dashboard-charts-graphs.jpg",
    chapters: "6 modules",
    featured: false,
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly across your organization",
    image: "/team-collaboration-workspace.png",
    chapters: "7 modules",
    featured: false,
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade protection for your data",
    image: "/security-shield-lock-protection.jpg",
    chapters: "5 modules",
    featured: false,
  },
  {
    title: "API Integration",
    description: "Connect with your favorite tools and services",
    image: "/api-integration-code-developer.jpg",
    chapters: "9 modules",
    featured: false,
  },
  {
    title: "Custom Reporting",
    description: "Build reports tailored to your business needs",
    image: "/business-reports-data-visualization.jpg",
    chapters: "4 modules",
    featured: false,
  },
]

const categories = ["All Modules", "Automation", "Analytics", "Collaboration"]

export function ContentGrid() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-secondary hover:bg-muted transition-colors"
          >
            {category}
          </button>
        ))}
        <span className="ml-auto text-sm text-muted-foreground">{modules.length} modules</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={module.image || "/placeholder.svg"}
                alt={module.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between">
              <div className="flex gap-2">
                {module.featured && (
                  <Button size="sm" className="font-medium">
                    REQUEST ACCESS
                  </Button>
                )}
                <Button size="sm" variant={module.featured ? "outline" : "default"} className="font-medium">
                  EXPLORE MODULE
                </Button>
              </div>
              <span className="text-xs text-muted-foreground">{module.chapters}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

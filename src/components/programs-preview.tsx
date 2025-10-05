import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Private Pilot License (PPL)",
    description: "Start your aviation journey with comprehensive ground school and flight training.",
    duration: "6-8 months",
    students: "12 max per class",
    outcome: "Fly for personal recreation and build foundation for commercial training",
    features: ["40 hours flight time", "Ground school included", "Medical assistance", "Flexible scheduling"],
    price: "₱850,000",
    badge: "Most Popular",
  },
  {
    title: "Commercial Pilot License (CPL)",
    description: "Advanced training to become a professional pilot with commercial privileges.",
    duration: "12-18 months",
    students: "8 max per class",
    outcome: "Graduate ready for airline cadetship and commercial aviation careers",
    features: ["250 hours flight time", "Multi-engine rating", "Instrument rating", "Career placement"],
    price: "₱2,200,000",
    badge: "Career Track",
  },
  {
    title: "Airline Preparation Program",
    description: "Intensive program designed specifically for airline cadet selection.",
    duration: "18-24 months",
    students: "6 max per class",
    outcome: "Direct pathway to major airline cadet programs with guaranteed interviews",
    features: ["ATPL theory", "Jet orientation", "CRM training", "Airline partnerships"],
    price: "₱3,500,000",
    badge: "Premium",
  },
]

export function ProgramsPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">Choose Your Flight Path</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From private pilot to airline captain, we offer comprehensive training programs designed to launch your
            aviation career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow scroll-reveal">
              {program.badge && (
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">{program.badge}</Badge>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{program.students}</span>
                  </div>
                </div>

                {/* Outcome */}
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-1">Career Outcome:</div>
                      <div className="text-sm text-muted-foreground">{program.outcome}</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{program.price}</div>
                      <div className="text-xs text-muted-foreground">Financing available</div>
                    </div>
                    <Button className="btn-aviation-primary" asChild>
                      <Link href="/programs">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

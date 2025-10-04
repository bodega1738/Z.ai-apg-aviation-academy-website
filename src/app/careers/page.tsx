import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, Users, Award, TrendingUp, Building, Globe, Check } from "lucide-react"
import Link from "next/link"

const careerPaths = [
  {
    title: "Commercial Airlines",
    description: "Fly passengers on domestic and international routes",
    companies: ["Philippine Airlines", "Cebu Pacific", "AirAsia Philippines", "Emirates", "Singapore Airlines"],
    positions: ["First Officer", "Captain", "Training Captain", "Check Airman"],
    salary: "₱80,000 - ₱300,000/month",
    requirements: ["ATPL License", "1,500+ flight hours", "Type rating", "English proficiency"],
    icon: Plane,
  },
  {
    title: "Cargo & Freight",
    description: "Transport goods and cargo worldwide",
    companies: ["FedEx", "UPS", "DHL", "Cargo Pacific", "Atlas Air"],
    positions: ["Cargo Pilot", "Flight Engineer", "Captain", "Operations Manager"],
    salary: "₱90,000 - ₱350,000/month",
    requirements: ["CPL/ATPL License", "Multi-engine rating", "International experience", "Cargo endorsement"],
    icon: Building,
  },
  {
    title: "Corporate Aviation",
    description: "Fly private jets and corporate aircraft",
    companies: ["Private Companies", "Charter Services", "Executive Aviation", "Government Agencies"],
    positions: ["Corporate Pilot", "Chief Pilot", "Flight Department Manager"],
    salary: "₱70,000 - ₱250,000/month",
    requirements: ["CPL License", "Jet experience", "Customer service skills", "Flexibility"],
    icon: Users,
  },
  {
    title: "Flight Training",
    description: "Teach the next generation of pilots",
    companies: ["Flight Schools", "Airlines", "Military", "Universities"],
    positions: ["Flight Instructor", "Chief Instructor", "Training Manager", "Examiner"],
    salary: "₱50,000 - ₱150,000/month",
    requirements: ["CFI Rating", "Teaching experience", "Strong communication", "Patience"],
    icon: Award,
  },
]

const industryStats = [
  {
    icon: TrendingUp,
    value: "7%",
    label: "Annual Growth",
    description: "Aviation industry growth rate",
  },
  {
    icon: Globe,
    value: "15,000+",
    label: "New Pilots Needed",
    description: "In Asia-Pacific by 2030",
  },
  {
    icon: Plane,
    value: "₱150,000",
    label: "Average Salary",
    description: "For commercial pilots",
  },
  {
    icon: Users,
    value: "95%",
    label: "Job Placement",
    description: "APG graduate success rate",
  },
]

const alumniSuccess = [
  {
    name: "Captain Maria Santos",
    position: "Philippine Airlines Captain",
    year: "2019 Graduate",
    achievement: "Promoted to Captain in 4 years",
  },
  {
    name: "Captain Juan Dela Cruz",
    position: "Cebu Pacific Captain",
    year: "2018 Graduate",
    achievement: "Flying international routes",
  },
  {
    name: "Lt. Miguel Rodriguez",
    position: "Philippine Air Force",
    year: "2017 Graduate",
    achievement: "Military transport pilot",
  },
  {
    name: "Captain Robert Kim",
    position: "International Cargo",
    year: "2016 Graduate",
    achievement: "Flying B747 freighters",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              CAREER OPPORTUNITIES
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Launch Your Aviation Career
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The aviation industry offers diverse and rewarding career paths. From commercial airlines to corporate
              aviation, discover where your pilot training can take you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-aviation-primary" asChild>
                <Link href="/apply">Start Your Career Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/programs">View Training Programs</Link>
              </Button>
            </div>
          </div>

          {/* Industry Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Aviation Career Paths</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the diverse opportunities available to professional pilots in today's growing aviation industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <career.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">{career.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{career.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Salary */}
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <div className="text-lg font-bold text-foreground mb-1">Salary Range</div>
                    <div className="text-secondary font-semibold">{career.salary}</div>
                  </div>

                  {/* Companies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Top Employers</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, companyIndex) => (
                        <Badge key={companyIndex} variant="outline" className="text-xs">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Positions */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Career Positions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {career.positions.map((position, positionIndex) => (
                        <div key={positionIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{position}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Requirements</h4>
                    <div className="space-y-2">
                      {career.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Our Graduates Are Flying High
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See where APG International graduates are working today and the career milestones they've achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumniSuccess.map((alumni, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{alumni.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{alumni.position}</p>
                  <Badge variant="outline" className="text-xs mb-3">
                    {alumni.year}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{alumni.achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Career Support Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just train pilots – we help launch careers. Our comprehensive career services support you from
              graduation to your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Job Placement Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Resume and cover letter review
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Interview preparation and practice
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Direct connections with airline recruiters
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Job fair participation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Industry Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Direct airline cadet programs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Corporate aviation connections
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Government agency partnerships
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    International opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Alumni network access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Career advancement guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Continuing education opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    Lifetime career counseling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">Ready to Take Off?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                The aviation industry is growing rapidly, and qualified pilots are in high demand. Start your training
                today and join the thousands of pilots building successful careers in aviation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-aviation-primary" asChild>
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Speak with Career Counselor</Link>
                </Button>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                <p>95% job placement rate • Limited slots available • Apply today</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

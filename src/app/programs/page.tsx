import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Award, Plane, Check, Download, Calendar } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "ppl",
    title: "Private Pilot License (PPL)",
    subtitle: "Foundation of Aviation Excellence",
    duration: "6-8 months",
    flightHours: "40 hours minimum",
    groundHours: "120 hours",
    classSize: "12 students maximum",
    tuition: "₱850,000",
    outcome: "Graduate ready for personal flying and foundation for commercial training",
    description:
      "Begin your aviation journey with comprehensive training that covers all aspects of private flying. Our PPL program provides the solid foundation you need for all future aviation endeavors.",
    requirements: [
      "Minimum age: 17 years old",
      "High school diploma or equivalent",
      "Class 2 Medical Certificate",
      "English proficiency (ICAO Level 4)",
      "Clean criminal background check",
    ],
    curriculum: [
      "Principles of Flight & Aerodynamics",
      "Aircraft Systems & Performance",
      "Navigation & Radio Communications",
      "Meteorology & Weather Systems",
      "Aviation Regulations & Procedures",
      "Flight Planning & Weight Balance",
      "Emergency Procedures & Safety",
    ],
    outcomes: [
      "Private pilot privileges for personal flying",
      "Foundation for commercial pilot training",
      "Understanding of aviation fundamentals",
      "Confidence in single-engine aircraft operations",
    ],
    financing: "₱85,000/month for 10 months available",
  },
  {
    id: "cpl",
    title: "Commercial Pilot License (CPL)",
    subtitle: "Professional Aviation Career Track",
    duration: "12-18 months",
    flightHours: "250 hours minimum",
    groundHours: "200 hours",
    classSize: "8 students maximum",
    tuition: "₱2,200,000",
    outcome: "Graduate ready for airline cadetship and commercial aviation careers",
    description:
      "Advance to professional pilot status with comprehensive commercial training. This program prepares you for airline cadet programs and commercial aviation careers.",
    requirements: [
      "Valid Private Pilot License",
      "Minimum age: 18 years old",
      "Class 1 Medical Certificate",
      "200+ hours total flight time",
      "Instrument Rating (can be obtained during program)",
    ],
    curriculum: [
      "Advanced Flight Operations",
      "Multi-Engine Aircraft Systems",
      "Instrument Flight Rules (IFR)",
      "Commercial Flight Maneuvers",
      "Crew Resource Management (CRM)",
      "Aviation Law & Regulations",
      "Airline Transport Pilot Theory",
    ],
    outcomes: [
      "Commercial pilot privileges",
      "Multi-engine rating included",
      "Instrument rating certification",
      "Airline cadet program eligibility",
      "Career placement assistance",
    ],
    financing: "₱183,000/month for 12 months available",
  },
  {
    id: "airline",
    title: "Airline Preparation Program",
    subtitle: "Direct Pathway to Major Airlines",
    duration: "18-24 months",
    flightHours: "300+ hours",
    groundHours: "300 hours",
    classSize: "6 students maximum",
    tuition: "₱3,500,000",
    outcome: "Direct pathway to major airline cadet programs with guaranteed interviews",
    description:
      "Our premium program designed specifically for students targeting major airline careers. Includes direct partnerships with Philippine Airlines, Cebu Pacific, and international carriers.",
    requirements: [
      "Valid Commercial Pilot License",
      "Minimum age: 21 years old",
      "Class 1 Medical Certificate",
      "500+ hours total flight time",
      "Clean flight record",
      "University degree preferred",
    ],
    curriculum: [
      "Airline Transport Pilot License (ATPL) Theory",
      "Jet Aircraft Orientation",
      "Advanced Crew Resource Management",
      "Multi-Crew Cooperation (MCC)",
      "Type Rating Preparation",
      "Airline Interview Preparation",
      "Leadership & Communication Skills",
    ],
    outcomes: [
      "ATPL theory completion",
      "Jet aircraft experience",
      "Guaranteed airline interviews",
      "Direct cadet program placement",
      "Ongoing career mentorship",
    ],
    financing: "₱292,000/month for 12 months available",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-semibold mb-4">
              <Award className="w-4 h-4 mr-2" />
              CAAP CERTIFIED PROGRAMS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Professional Pilot Training Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose from three comprehensive training tracks designed to launch your aviation career. From private
              pilot to airline captain, we'll guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-aviation-primary" asChild>
                <Link href="/apply">Apply Now - Limited Slots</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#programs">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ppl" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="ppl">Private Pilot</TabsTrigger>
              <TabsTrigger value="cpl">Commercial Pilot</TabsTrigger>
              <TabsTrigger value="airline">Airline Preparation</TabsTrigger>
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id} className="space-y-8">
                {/* Program Overview */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 pb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-3xl font-bold text-foreground mb-2 font-serif">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-muted-foreground">{program.subtitle}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary mb-1">{program.tuition}</div>
                        <div className="text-sm text-muted-foreground">{program.financing}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Program Stats */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Program Details</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium text-foreground">Duration</div>
                              <div className="text-sm text-muted-foreground">{program.duration}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Plane className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium text-foreground">Flight Hours</div>
                              <div className="text-sm text-muted-foreground">{program.flightHours}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium text-foreground">Class Size</div>
                              <div className="text-sm text-muted-foreground">{program.classSize}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description & Outcome */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-4">Program Overview</h3>
                          <p className="text-muted-foreground mb-4">{program.description}</p>
                          <div className="p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
                            <div className="flex items-start gap-2">
                              <Award className="w-5 h-5 text-secondary mt-0.5" />
                              <div>
                                <div className="font-semibold text-foreground mb-1">Career Outcome:</div>
                                <div className="text-muted-foreground">{program.outcome}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Information */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Requirements */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Entry Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {program.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Curriculum */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Curriculum Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {program.curriculum.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Outcomes */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">What You'll Achieve</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA Section */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
                      Ready to Start Your Aviation Career?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Limited slots available for the next intake. Apply now to secure your spot in this comprehensive
                      training program.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="btn-aviation-primary" asChild>
                        <Link href="/apply">Apply for This Program</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Campus Visit
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

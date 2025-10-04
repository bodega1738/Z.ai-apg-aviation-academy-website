import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Download, Calendar, Phone, Mail, FileText, CreditCard, Users, Clock } from "lucide-react"
import Link from "next/link"

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete online application form with required documents",
    timeline: "1-2 days",
    requirements: [
      "Completed application form",
      "High school diploma/transcript",
      "Valid government ID",
      "2x2 ID photos (4 pieces)",
      "Birth certificate",
    ],
  },
  {
    step: 2,
    title: "Document Review",
    description: "Our admissions team reviews your application and documents",
    timeline: "3-5 days",
    requirements: [
      "Academic record verification",
      "Background check processing",
      "Medical certificate validation",
      "English proficiency assessment",
    ],
  },
  {
    step: 3,
    title: "Entrance Examination",
    description: "Take our comprehensive aviation aptitude test",
    timeline: "1 day",
    requirements: [
      "Mathematics and physics test",
      "English comprehension exam",
      "Spatial reasoning assessment",
      "Aviation knowledge quiz",
    ],
  },
  {
    step: 4,
    title: "Medical Examination",
    description: "Complete required aviation medical examination",
    timeline: "1-2 days",
    requirements: [
      "Class 1 or Class 2 medical certificate",
      "Vision and hearing tests",
      "Cardiovascular examination",
      "Psychological assessment",
    ],
  },
  {
    step: 5,
    title: "Interview & Enrollment",
    description: "Final interview and program enrollment",
    timeline: "1 day",
    requirements: [
      "Personal interview with instructors",
      "Program selection and planning",
      "Financial arrangement discussion",
      "Class schedule confirmation",
    ],
  },
]

const financingOptions = [
  {
    title: "Full Payment Discount",
    description: "Pay the full tuition upfront and receive a 5% discount",
    benefits: ["5% tuition discount", "Priority class scheduling", "Free additional ground school materials"],
    icon: CreditCard,
  },
  {
    title: "Installment Plans",
    description: "Flexible monthly payment options to fit your budget",
    benefits: ["0% interest for 6 months", "Extended 12-month plans available", "No hidden fees or charges"],
    icon: Calendar,
  },
  {
    title: "Scholarship Programs",
    description: "Merit-based scholarships for qualified students",
    benefits: ["Up to 30% tuition reduction", "Academic excellence awards", "Need-based assistance available"],
    icon: Users,
  },
]

const parentChecklist = [
  "Research aviation career prospects and salary expectations",
  "Understand the total investment including living expenses",
  "Review our safety record and training standards",
  "Visit our campus and meet with instructors",
  "Speak with current students and recent graduates",
  "Explore financing options and scholarship opportunities",
  "Confirm medical requirements and associated costs",
  "Plan for additional expenses (books, equipment, etc.)",
]

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold mb-4">
              <Check className="w-4 h-4 mr-2" />
              ADMISSIONS OPEN - LIMITED SLOTS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Start Your Aviation Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join the next generation of professional pilots. Our streamlined admissions process makes it easy to begin
              your aviation career with the Philippines' premier flight training academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-aviation-primary" asChild>
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#process">Learn About Process</Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm font-semibold text-foreground">Acceptance Rate</div>
              <div className="text-xs text-muted-foreground">For qualified applicants</div>
            </div>
            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">2-3</div>
              <div className="text-sm font-semibold text-foreground">Weeks Process</div>
              <div className="text-xs text-muted-foreground">From application to enrollment</div>
            </div>
            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">₱0</div>
              <div className="text-sm font-semibold text-foreground">Application Fee</div>
              <div className="text-xs text-muted-foreground">No cost to apply</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Simple 5-Step Admissions Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've streamlined our admissions process to make it as straightforward as possible while maintaining our
              high standards.
            </p>
          </div>

          <div className="space-y-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Step Number */}
                    <div className="lg:w-32 bg-gradient-to-br from-primary to-accent p-8 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white">{step.step}</div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-medium text-foreground">{step.timeline}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-aviation-primary" asChild>
              <Link href="/apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Flexible Financing Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe financial constraints shouldn't prevent you from pursuing your aviation dreams. Choose from our
              flexible payment options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{option.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Need Financial Assistance?</h3>
                <p className="text-muted-foreground mb-6">
                  Our financial aid counselors are here to help you find the best payment option for your situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#brochure">
                      <Download className="w-4 h-4 mr-2" />
                      Download Financial Guide
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parent Checklist */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                Parent & Sponsor Checklist
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We understand that choosing an aviation academy is a significant decision for families. Here's a
                comprehensive checklist to help you make an informed choice.
              </p>

              <div className="space-y-4">
                {parentChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-primary" />
                    Download Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="#brochure">
                      <FileText className="w-4 h-4 mr-2" />
                      Complete Program Brochure
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="#financial-guide">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Financial Planning Guide
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <Link href="#career-guide">
                      <Users className="w-4 h-4 mr-2" />
                      Aviation Career Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Speak with Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Admissions Hotline</div>
                      <div className="text-sm text-muted-foreground">+63 2 8123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email Support</div>
                      <div className="text-sm text-muted-foreground">admissions@apgaviation.ph</div>
                    </div>
                  </div>
                  <Button className="w-full btn-aviation-secondary" asChild>
                    <Link href="/contact">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Campus Visit
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

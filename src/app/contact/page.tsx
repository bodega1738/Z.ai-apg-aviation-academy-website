"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, Users, Plane } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    program: "",
    message: "",
    preferredContact: "",
    visitDate: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              GET IN TOUCH
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">
              Let's Start Your Aviation Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our programs, admissions, or want to schedule a campus tour? Our team is here to help
              you take the first step toward your pilot career.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Campus Address</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Aviation Drive
                        <br />
                        Pasay City, Metro Manila
                        <br />
                        Philippines 1300
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone Numbers</h3>
                      <p className="text-muted-foreground text-sm">
                        Main: +63 2 8123 4567
                        <br />
                        Admissions: +63 2 8123 4568
                        <br />
                        Mobile: +63 917 123 4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Addresses</h3>
                      <p className="text-muted-foreground text-sm">
                        General: info@apgaviation.ph
                        <br />
                        Admissions: admissions@apgaviation.ph
                        <br />
                        Support: support@apgaviation.ph
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start btn-aviation-primary" asChild>
                    <a href="/apply">
                      <Plane className="w-4 h-4 mr-2" />
                      Apply Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="tel:+6328123456">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Admissions
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                    <a href="#tour">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Tour
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground font-serif">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours during business days.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+63 9XX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admissions">Admissions Information</SelectItem>
                            <SelectItem value="programs">Program Details</SelectItem>
                            <SelectItem value="tour">Campus Tour</SelectItem>
                            <SelectItem value="financing">Financing Options</SelectItem>
                            <SelectItem value="career">Career Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="program">Interested Program</Label>
                        <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ppl">Private Pilot License (PPL)</SelectItem>
                            <SelectItem value="cpl">Commercial Pilot License (CPL)</SelectItem>
                            <SelectItem value="airline">Airline Preparation Program</SelectItem>
                            <SelectItem value="undecided">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select
                          value={formData.preferredContact}
                          onValueChange={(value) => handleInputChange("preferredContact", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="How should we contact you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="sms">SMS/Text</SelectItem>
                            <SelectItem value="any">Any method</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your aviation goals, questions, or how we can help you..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-aviation-primary">
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours during business days. For urgent inquiries, please call our
                      admissions hotline.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Tour Section */}
      <section id="tour" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Schedule a Campus Tour</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our facilities firsthand. See our modern aircraft, meet our instructors, and get a feel for
              campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Group Tours</CardTitle>
                <CardDescription>Perfect for families and friends</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Join other prospective students and families for a comprehensive campus tour.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>• Every Saturday at 10:00 AM</p>
                  <p>• Duration: 2 hours</p>
                  <p>• Includes aircraft viewing</p>
                  <p>• Meet current students</p>
                </div>
                <Button className="w-full btn-aviation-secondary">Book Group Tour</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Private Tours</CardTitle>
                <CardDescription>One-on-one personalized experience</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Get personalized attention with a private tour tailored to your interests.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>• Flexible scheduling</p>
                  <p>• Duration: 1.5 hours</p>
                  <p>• Meet with instructors</p>
                  <p>• Detailed Q&A session</p>
                </div>
                <Button className="w-full btn-aviation-primary">Schedule Private Tour</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Discovery Flights</CardTitle>
                <CardDescription>Experience flying firsthand</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Take the controls and experience what it's like to fly with an instructor.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>• 30-minute flight experience</p>
                  <p>• Certified instructor included</p>
                  <p>• Counts toward training hours</p>
                  <p>• Certificate of completion</p>
                </div>
                <Button className="w-full btn-aviation-primary">Book Discovery Flight</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Metro Manila with easy access to major airports and transportation.
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    123 Aviation Drive, Pasay City, Metro Manila, Philippines 1300
                  </p>
                  <Button className="mt-4 bg-transparent" variant="outline">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

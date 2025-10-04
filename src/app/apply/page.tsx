"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ApplicationTracker } from "@/components/application-tracker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, FileText, Check, Phone } from "lucide-react"

export default function ApplyPage() {
  const [currentTab, setCurrentTab] = useState("application")
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    civilStatus: "",

    // Contact Information
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Educational Background
    highSchoolName: "",
    highSchoolYear: "",
    collegeName: "",
    collegeYear: "",
    collegeDegree: "",

    // Program Selection
    program: "",
    startDate: "",

    // Additional Information
    previousFlightExperience: "",
    medicalConditions: "",
    motivation: "",

    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    marketingAccepted: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setCurrentTab("tracker")
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold mb-4">
            <Check className="w-4 h-4 mr-2" />
            APPLICATION PORTAL
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">Apply to APG International</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start your aviation career journey today. Complete your application and track your progress through our
            streamlined admissions process.
          </p>
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="application">Submit Application</TabsTrigger>
            <TabsTrigger value="tracker">Track Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="application" className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    Please provide your basic personal information as it appears on your government-issued ID.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="middleName">Middle Name</Label>
                      <Input
                        id="middleName"
                        value={formData.middleName}
                        onChange={(e) => handleInputChange("middleName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Input
                        id="nationality"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange("nationality", e.target.value)}
                        placeholder="e.g., Filipino"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    We'll use this information to communicate with you throughout the application process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+63 9XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="House/Unit Number, Street, Barangay"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province">Province *</Label>
                      <Input
                        id="province"
                        value={formData.province}
                        onChange={(e) => handleInputChange("province", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Program Selection
                  </CardTitle>
                  <CardDescription>Choose your desired training program and preferred start date.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="program">Training Program *</Label>
                      <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ppl">Private Pilot License (PPL) - ₱850,000</SelectItem>
                          <SelectItem value="cpl">Commercial Pilot License (CPL) - ₱2,200,000</SelectItem>
                          <SelectItem value="airline">Airline Preparation Program - ₱3,500,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Preferred Start Date *</Label>
                      <Select
                        value={formData.startDate}
                        onValueChange={(value) => handleInputChange("startDate", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select start date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="march-2025">March 2025 Intake</SelectItem>
                          <SelectItem value="june-2025">June 2025 Intake</SelectItem>
                          <SelectItem value="september-2025">September 2025 Intake</SelectItem>
                          <SelectItem value="december-2025">December 2025 Intake</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                  <CardDescription>
                    Help us understand your background and motivation for pursuing aviation training.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to become a pilot? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      placeholder="Tell us about your passion for aviation and career goals..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousFlightExperience">Previous Flight Experience (if any)</Label>
                    <Textarea
                      id="previousFlightExperience"
                      value={formData.previousFlightExperience}
                      onChange={(e) => handleInputChange("previousFlightExperience", e.target.value)}
                      placeholder="Describe any previous flight training, licenses, or aviation experience..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardHeader>
                  <CardTitle>Terms and Agreements</CardTitle>
                  <CardDescription>
                    Please review and accept the following terms to complete your application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <a href="/terms" className="text-primary hover:underline">
                        Terms and Conditions
                      </a>{" "}
                      and understand the program requirements, tuition fees, and refund policies. *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onCheckedChange={(checked) => handleInputChange("privacyAccepted", checked as boolean)}
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm leading-relaxed">
                      I consent to the collection and processing of my personal data as outlined in the{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      . *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.marketingAccepted}
                      onCheckedChange={(checked) => handleInputChange("marketingAccepted", checked as boolean)}
                    />
                    <Label htmlFor="marketing" className="text-sm leading-relaxed">
                      I would like to receive updates about programs, events, and aviation industry news via email and
                      SMS.
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="btn-aviation-primary px-12 py-4 text-lg"
                  disabled={!formData.termsAccepted || !formData.privacyAccepted}
                >
                  Submit Application
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Your application will be reviewed within 3-5 business days. You'll receive an email confirmation
                  shortly.
                </p>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="tracker" className="space-y-8">
            <ApplicationTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

"use client"
import { useState } from "react"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import LoginForm from "./LoginForm"

export default function LoginCard() {
 
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your phone number to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          {/* <Input
            id="phone"
            pattern="&quot;[+]?[0-9]{1,3}?[-s]?[(]?[0-9]{1,3}[)]?[-s]?[0-9]{1,4}[-s]?[0-9]{1,4}[-s]?[0-9]{1,9}&quot;"
            placeholder="+1 (555) 555-5555"
            required
            type="tel"
          /> */}
          <LoginForm />
        </div>
      </CardContent>
    </Card>
  )
}





import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import LoginForm from "./LoginForm"

export default function LoginCard() {
 

  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your phone number to continue</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <LoginForm />
        </div>
      </CardContent>
    </Card>
  )
}



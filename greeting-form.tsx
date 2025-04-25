"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { generateGreeting } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

export function GreetingForm() {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    const response = await generateGreeting(formData)
    setResult(response)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Greeting Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Your Name
            </label>
            <Input id="name" name="name" placeholder="Enter your name" required className="w-full" />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
      {result && (
        <CardFooter>
          <Alert variant={result.success ? "default" : "destructive"} className="w-full">
            <AlertDescription>{result.message}</AlertDescription>
          </Alert>
        </CardFooter>
      )}
    </Card>
  )
}

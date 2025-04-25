import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExplanationSection() {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground mb-2">
                Server Actions are a Next.js feature that allows you to define server-side functions that can be called
                directly from client components.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                In this application, we use a server action called{" "}
                <code className="bg-muted px-1 py-0.5 rounded">generateGreeting</code> that:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Receives form data from the client</li>
                <li>Extracts the name from the form data</li>
                <li>Validates the input</li>
                <li>Returns a response object with a greeting message</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Server Actions are defined with the <code className="bg-muted px-1 py-0.5 rounded">'use server'</code>{" "}
                directive at the top of the file or function.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground mb-2">This application uses several Shadcn UI components:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  <strong>Card</strong>: Used as containers for the form and explanation sections
                </li>
                <li>
                  <strong>Input</strong>: Provides a styled input field for the name
                </li>
                <li>
                  <strong>Button</strong>: Used for the submit button with loading state
                </li>
                <li>
                  <strong>Alert</strong>: Displays the greeting message or error
                </li>
                <li>
                  <strong>Accordion</strong>: Creates collapsible sections for the explanation
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Shadcn UI is a collection of reusable components built on top of Tailwind CSS, providing a consistent
                design system.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground mb-2">
                This application leverages several key Next.js 15.1 features:
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  <strong>Server Actions</strong>: Processes form submissions on the server
                </li>
                <li>
                  <strong>App Router</strong>: Uses the modern file-based routing system
                </li>
                <li>
                  <strong>React Server Components</strong>: The page component is a server component by default
                </li>
                <li>
                  <strong>Client Components</strong>: The form component is marked with 'use client' to enable
                  interactivity
                </li>
                <li>
                  <strong>useFormStatus</strong>: React hook to track form submission state
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Next.js 15.1 includes enhanced security for Server Actions with secure action IDs and dead code
                elimination, improving both security and performance.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

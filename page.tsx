import { GreetingForm } from "@/components/greeting-form"
import { ExplanationSection } from "@/components/explanation-section"

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Next.js Server Actions Demo</h1>

      <GreetingForm />

      <ExplanationSection />
    </main>
  )
}

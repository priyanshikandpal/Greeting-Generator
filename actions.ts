"use server"

export async function generateGreeting(formData: FormData) {
  // Simulate a small delay to demonstrate server processing
  await new Promise((resolve) => setTimeout(resolve, 500))

  const name = formData.get("name") as string

  if (!name || name.trim() === "") {
    return {
      success: false,
      message: "Please enter your name",
    }
  }

  return {
    success: true,
    message: `Hello ${name}!`,
  }
}

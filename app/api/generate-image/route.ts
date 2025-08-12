import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch("https://api.zahong.ai/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY || "sk-crhoF278yfSYqQPh0998A5EaA2944a0fAfAb5d9968B6B448"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    const responseText = await response.text()
    console.log("Image API Response Status:", response.status)
    console.log("Image API Response Text:", responseText)

    if (!response.ok) {
      console.error(`Image API request failed: ${response.status} - ${responseText}`)
      return NextResponse.json(
        {
          error: `API request failed: ${response.status}`,
          details: responseText,
        },
        { status: response.status },
      )
    }

    try {
      const data = JSON.parse(responseText)
      return NextResponse.json(data)
    } catch (parseError) {
      console.error("Failed to parse image response as JSON:", parseError)
      return NextResponse.json(
        {
          error: "Invalid response format from API",
          response: responseText,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Image generation API proxy error:", error)
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 })
  }
}

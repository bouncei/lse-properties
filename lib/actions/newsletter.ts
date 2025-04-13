"use server";

import { client } from "@/sanity/lib/client";

// Create a new client with write token
const writeClient = client.config({
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
  useCdn: false, // We need this for mutations
});

export async function subscribeToNewsletter(email: string) {
  try {
    // Check if email already exists
    const existingSubscriber = await client.fetch(
      `*[_type == "newsletter" && email == $email][0]`,
      { email }
    );

    if (existingSubscriber) {
      return {
        success: false,
        message: "This email is already subscribed to our newsletter.",
      };
    }

    // Create new subscriber
    await writeClient.create({
      _type: "newsletter",
      email,
      subscribedAt: new Date().toISOString(),
      status: "active",
    });

    return {
      success: true,
      message: "Successfully subscribed to newsletter!",
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Failed to subscribe. Please try again later.",
    };
  }
}

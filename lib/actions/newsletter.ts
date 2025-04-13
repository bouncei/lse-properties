"use server";

import { client, writeClient } from "@/sanity/lib/client";

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

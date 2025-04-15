import { NextResponse } from "next/server";
import { createFeedback } from "@/lib/actions/general.action";

export async function POST(request: Request) {
  try {
    const { interviewId, userId, transcript, feedbackId } = await request.json();

    const result = await createFeedback({
      interviewId,
      userId,
      transcript,
      feedbackId,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating feedback:", error);
    
    return NextResponse.json(
      { success: false, error: "Failed to create feedback" },
      { status: 500 }
    );
  }
} 
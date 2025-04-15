import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import {
  getCurrentUser, 
} from "@/lib/actions/auth.action";
import{getInterviewByUserId,
  getLatestInterviews,} from "@/lib/actions/general.action"
const page = async () => {
  const user = await getCurrentUser();
  const [userInterviews,latestInterviews] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId: user?.id!}),
  ])

  const hasPastInterviews = userInterviews ?.length! > 0;
  const hasUpcomingInterviews =latestInterviews ?.length!>0;
  return (
    <>
      {/* Hero Section */}
      <section className="card-cta flex items-center justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-2xl font-semibold">
            Get Ready for Your Next Interview with AI-Powered Practice &
            Feedback
          </h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start An Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="hidden sm:block"
        />
      </section>

      {/* Your Interviews Section */}
      <section className="flex flex-col gap-6 mt-10">
        <h2 className="text-xl font-semibold">Your Interviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You haven't taken any interviews yet</p>
          )}
        </div>
      </section>

      {/* Take an Interview Section */}
      <section className="flex flex-col gap-6 mt-10">
        <h2 className="text-xl font-semibold">Take an Interview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are no new interviews available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;

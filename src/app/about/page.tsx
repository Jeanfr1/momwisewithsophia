import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-pink-500">
        About MomWise with Sophia
      </h1>
      <p className="mb-2 text-lg">
        Sophia&apos;s story and mission will be shared here.
      </p>
      <p className="text-gray-600">
        The inspiration behind MomWise and our commitment to empowering mothers.
      </p>
    </main>
  );
}

export const metadata = {
  title: "About | MomWise with Sophia",
  description:
    "Learn about Sophia, her story, and the mission behind MomWise with Sophia. Empowering modern mothers with wisdom and love.",
  openGraph: {
    title: "About | MomWise with Sophia",
    description:
      "Learn about Sophia, her story, and the mission behind MomWise with Sophia. Empowering modern mothers with wisdom and love.",
    url: "/about",
    siteName: "MomWise with Sophia",
    type: "website",
  },
};

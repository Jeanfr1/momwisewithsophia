import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-pink-500">Contact</h1>
      <p className="mb-2 text-lg">
        Contact form for inquiries will be available here.
      </p>
      <p className="text-gray-600">Links to social media profiles.</p>
    </main>
  );
}

export const metadata = {
  title: "Contact | MomWise with Sophia",
  description:
    "Contact MomWise with Sophia for inquiries, collaborations, or support. Connect with us on social media.",
  openGraph: {
    title: "Contact | MomWise with Sophia",
    description:
      "Contact MomWise with Sophia for inquiries, collaborations, or support. Connect with us on social media.",
    url: "/contact",
    siteName: "MomWise with Sophia",
    type: "website",
  },
};

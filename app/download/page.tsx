"use client";

import { useState } from "react";

export default function DownloadPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyjFjUmpxdqlcneowQym1VBer9L_nLw6cXY6uZL_9n4sPT6g_3q-a7gSPxNErdtmuC0/exec",
        {
          method: "POST",
          body: form,
        }
      );

      console.log("Status:", response.status);

      const text = await response.text();
      console.log("Response:", text);

      if (!response.ok) {
        throw new Error(text);
      }

      setSubmitted(true);

      window.location.href = "/pdfs/captains-project-guide.pdf";
    } catch (err) {
      console.error(err);
      alert("Request failed.");
    }

    setLoading(false);
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-5xl font-black text-slate-900">
        Download the ACL Injury Prevention Guide
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
       Get instant access to the complete evidence-based ACL Injury Prevention Guide. Enter your name and email below to download the guide. If you'd like, you can also opt in to receive occasional female sports medicine resources and injury prevention updates.
      </p>

      <div className="mt-12 rounded-3xl border bg-white p-10 shadow">
        <form onSubmit={handleSubmit} className="space-y-6">

  <div>
    <label className="mb-2 block font-semibold">
      First Name
    </label>

    <input
      name="name"
      required
      placeholder="Jane"
      className="w-full rounded-xl border p-3"
    />
  </div>

  <div>
    <label className="mb-2 block font-semibold">
      Email Address
    </label>

    <input
      type="email"
      name="email"
      required
      placeholder="jane@email.com"
      className="w-full rounded-xl border p-3"
    />
  </div>

  <div className="flex items-start gap-3">
    <input
      id="subscribe"
      type="checkbox"
      name="subscribe"
      className="mt-1 h-4 w-4"
    />

    <label
      htmlFor="subscribe"
      className="text-sm leading-6 text-slate-600"
    >
      I'd like to receive occasional emails about ACL injury prevention,
      female sports medicine research, new resources, and future workshops.
    </label>
  </div>

  <button
    disabled={loading}
    className="rounded-xl bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700 disabled:opacity-60"
  >
    {loading ? "Preparing Download..." : "Download Guide"}
  </button>

</form>
        {submitted && (
          <p className="mt-6 text-green-600">
            Thank you! Your download is starting...
          </p>
        )}
      </div>
    </section>
  );
}
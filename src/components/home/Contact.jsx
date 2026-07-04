import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import { SiPinterest } from "react-icons/si";
import SectionMarker from "../common/SectionMarker.jsx";

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="px-6 py-0 md:px-10 md:py-20" aria-labelledby="contact-heading">
      <SectionMarker number="04" />
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">Let&apos;s Talk</p>
        <h2 id="contact-heading" className="mb-1 font-heading text-3xl font-semibold text-white md:text-4xl">
          Have an Idea?
        </h2>
        <h2 className="mb-10 font-heading text-3xl font-semibold text-accent md:text-4xl">
          Let&apos;s Build it Together.
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.60fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="mb-5 font-heading text-xl font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-iconBox">
                  <FiMail className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="text-xs uppercase text-muted">Email</p>
                  <p className="text-sm text-white">rskhalith78@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-iconBox">
                  <FiMapPin className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="text-xs uppercase text-muted">Location</p>
                  <p className="text-sm text-white">Tirunelveli, TN, India.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-iconBox">
                  <FiMessageCircle className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="text-xs uppercase text-muted">WhatsApp</p>
                  <p className="text-sm text-white">+91 88384 04738</p>
                </div>
              </div>
            </div>

            <p className="mb-3 mt-6 text-xs text-muted">Connect on social platforms</p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="rounded text-secondary transition hover:text-accent focus-ring">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded text-secondary transition hover:text-accent focus-ring">
                <FiInstagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Pinterest" className="rounded text-secondary transition hover:text-accent focus-ring">
                <SiPinterest className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="mb-5 font-heading text-xl font-semibold text-white">Send a message</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-xs text-secondary">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-border bg-cardAlt px-4 py-2.5 text-sm text-white placeholder:text-muted focus-ring"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-xs text-secondary">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-cardAlt px-4 py-2.5 text-sm text-white placeholder:text-muted focus-ring"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1 block text-xs text-secondary">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full rounded-lg border border-border bg-cardAlt px-4 py-2.5 text-sm text-white placeholder:text-muted focus-ring"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-xs text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-xs text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea."
                  className="w-full resize-none rounded-lg border border-border bg-cardAlt px-4 py-2.5 text-sm text-white placeholder:text-muted focus-ring"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-medium text-white transition hover:bg-accent2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                {status === "idle" && <FiArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
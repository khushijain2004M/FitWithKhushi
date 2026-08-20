import { CheckCircle2, Mail, Send } from "lucide-react";
import { useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button, Card, PageHeading, StatusPill } from "../components/ui/Primitives";
import { socials } from "../utils/socials";

const externalProps = { target: "_blank", rel: "noreferrer" };

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email.includes("@") || !form.message) return;
    setSent(true);
  };

  return <>
    <PageHeading eyebrow="Contact Sudesh" title="Let’s build better fitness tools." copy="Choose any channel below for collaborations, questions or feedback." />
    <div className="contact-layout">
      <Card glow="purple" className="contact-form-card">
        <h3>Send a message</h3>
        <p>For the quickest reply, use one of the direct contact links beside this form.</p>
        {sent && <StatusPill tone="success"><CheckCircle2 size={14} />Message ready — contact Sudesh directly using a link on this page.</StatusPill>}
        <form className="contact-form" onSubmit={submit}>
          <label>Name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required placeholder="Your name" /></label>
          <label>Email<input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required type="email" placeholder="you@example.com" /></label>
          <label>Message<textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required placeholder="How can we help?" rows="5" /></label>
          <Button type="submit"><Send size={16} />Prepare message</Button>
        </form>
      </Card>
      <aside className="contact-aside">
        <Card glow="cyan" className="contact-details-card">
          <span className="eyebrow">Direct contact</span>
          <h3>Find Sudesh online</h3>
          <div className="contact-detail"><Mail /><div><strong>Email</strong><a href={`mailto:${socials.email}`}>{socials.email}</a></div></div>
          <div className="contact-detail"><FaLinkedin /><div><strong>LinkedIn</strong><a href={socials.linkedin} {...externalProps}>linkedin.com/in/sudeshmehar3</a></div></div>
          <div className="contact-detail"><FaGithub /><div><strong>GitHub</strong><a href={socials.github} {...externalProps}>github.com/sudesh4545</a></div></div>
          <div className="contact-detail"><FaDiscord /><div><strong>Discord</strong><a href={socials.discord} {...externalProps}>discord.gg/Q7r9xvje9Q</a></div></div>
        </Card>
      </aside>
    </div>
  </>;
}

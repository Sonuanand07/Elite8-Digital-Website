import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Contact Page: Poetic Layout & Ambient Form */}
      <section id="contact" className="w-full py-24 md:py-36 lg:py-48 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-8">
              <FadeIn>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary dark:text-secondary font-serif">
                  Let's Build Something Beautiful Together.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Your vision, our craft. Reach out, and let's begin the next chapter of digital innovation.
                </p>
              </FadeIn>
              <div className="space-y-6 pt-8">
                <FadeIn delay={0.3}>
                  <div className="flex items-center gap-4 text-xl text-muted-foreground">
                    <Mail className="h-7 w-7 text-primary" />
                    <span>contact@elite8digital.in</span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="flex items-center gap-4 text-xl text-muted-foreground">
                    <Phone className="h-7 w-7 text-primary" />
                    <span>+91 98765 43210</span> {/* Placeholder number */}
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="flex items-center gap-4 text-xl text-muted-foreground">
                    <MapPin className="h-7 w-7 text-primary" />
                    <span>Remote (India)</span>
                  </div>
                </FadeIn>
              </div>
              <div className="flex gap-8 pt-10">
                {/* Social links as soft pulses - requires JS for actual pulse animation */}
                <FadeIn delay={0.6}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300 animate-pulse-custom"
                    prefetch={false}
                  >
                    <Linkedin className="h-8 w-8" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </FadeIn>
                <FadeIn delay={0.7}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300 animate-pulse-custom"
                    prefetch={false}
                  >
                    <Twitter className="h-8 w-8" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </FadeIn>
                <FadeIn delay={0.8}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300 animate-pulse-custom"
                    prefetch={false}
                  >
                    <Github className="h-8 w-8" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </FadeIn>
              </div>
            </div>
            <FadeIn delay={0.3}>
              <Card className="w-full max-w-xl mx-auto p-8 shadow-2xl rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-6 text-center">
                  <CardTitle className="text-4xl font-bold text-gray-900 dark:text-gray-50 font-serif">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Share your thoughts, ideas, or project details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-base text-gray-700 dark:text-gray-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your Full Name"
                        required
                        className="h-12 text-base rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-base text-gray-700 dark:text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@example.com"
                        required
                        className="h-12 text-base rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject" className="text-base text-gray-700 dark:text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Regarding a new project..."
                        className="h-12 text-base rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-base text-gray-700 dark:text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your vision..."
                        className="min-h-[180px] text-base rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:border-primary focus:ring-primary"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-14 text-xl font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}

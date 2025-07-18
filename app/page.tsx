import { ArrowRight } from "lucide-react"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground font-sans antialiased">
      <main className="flex-1">
        {/* Landing Page: Cinematic & Immersive */}
        <section
          id="home"
          className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-start to-gradient-end"
        >
          {/* Background Video with Overlay */}
          <video autoPlay loop muted playsInline className="absolute inset-0 z-0 w-full h-full object-cover">
            <source src="https://coverr.co/videos/people-walking-under-bridge--BjzBvdCHe3" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-40 dark:bg-gray-950 dark:opacity-60 z-0"></div>
          {/* Overlay */}
          <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl space-y-6">
            <FadeIn>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none text-white animate-fade-in-up font-serif">
                Designing Stories, Not Just Screens.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                We don't just build interfaces; we sculpt digital experiences that resonate on a profound level,
                crafting futuristic and emotionally captivating designs.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex justify-center gap-4 pt-8 animate-fade-in-up delay-400">
                <Link
                  href="/portfolio"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-10 text-lg font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explore Work <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Brief About Section on Landing Page */}
        <section className="w-full py-24 md:py-36 lg:py-48 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary dark:text-secondary mb-8 font-serif">
                Who We Are
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                At Elite8 Digital, we believe that exceptional design is not just about aesthetics, but about solving
                real-world problems and enriching lives. We sculpt digital experiences that resonate on a profound
                level.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-primary text-primary px-8 text-base font-semibold shadow-sm transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More About Us
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Centered GIF Section */}
        <section className="w-full py-24 md:py-36 lg:py-48 bg-transparent flex items-center justify-center">
          <div className="container px-4 md:px-6 flex justify-center">
            <FadeIn>
              <img
                src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
                alt="Animated Design Preview"
                className="rounded-2xl shadow-2xl w-full max-w-3xl h-auto"
              />
            </FadeIn>
          </div>
        </section>

        {/* Brief Portfolio Section on Landing Page */}
        <section className="w-full py-24 md:py-36 lg:py-48 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary dark:text-primary mb-8 font-serif">
                Our Featured Narratives
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                Explore a curated selection of our design journeys, where each case study is a story waiting to unfold.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Brief Contact Section on Landing Page */}
        <section className="w-full py-24 md:py-36 lg:py-48 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary dark:text-secondary mb-8 font-serif">
                Ready to Create?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                Your vision, our craft. Reach out, and let's begin the next chapter of digital innovation.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-accent text-accent px-8 text-base font-semibold shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get in Touch
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  )
}

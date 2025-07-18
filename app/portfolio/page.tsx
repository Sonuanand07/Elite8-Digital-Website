import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import FadeIn from "@/components/FadeIn"

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      {/* Portfolio Section: Mosaic Layout with Interactive Hovers */}
      <section id="portfolio" className="w-full py-24 md:py-36 lg:py-48 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary dark:text-primary font-serif">
                Our Visual Narratives
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                A mosaic of our design journeys, where each case study is a story waiting to unfold. Hover to reveal the
                essence, click to dive deeper.
              </p>
            </FadeIn>
          </div>
          <div className="mx-auto grid max-w-7xl items-start gap-8 py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:minmax(200px,_auto)]">
            {/* Project Card 1: Dashboard/project mockup */}
            <FadeIn delay={0.1}>
              <Card className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    width={600}
                    height={400}
                    alt="Analytics Dashboard Project"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-overlay-start to-portfolio-overlay-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white space-y-2">
                      <h3 className="text-2xl font-bold font-serif">Analytics Dashboard</h3>
                      <p className="text-base opacity-90">
                        Transforming complex data into actionable insights with clarity and elegance.
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </FadeIn>
            {/* Project Card 2: Mobile app showcase */}
            <FadeIn delay={0.2}>
              <Card className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    width={600}
                    height={400}
                    alt="Fitness Mobile App Showcase"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-overlay-start to-portfolio-overlay-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white space-y-2">
                      <h3 className="text-2xl font-bold font-serif">Fitness Mobile App</h3>
                      <p className="text-base opacity-90">
                        Empowering wellness through an engaging and personalized fitness companion.
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </FadeIn>
            {/* Project Card 3: Brand Identity Design */}
            <FadeIn delay={0.3}>
              <Card className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="https://images.unsplash.com/photo-1618232994022-b6e4be4f52f2"
                    width={600}
                    height={400}
                    alt="Brand Identity Design Project"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-overlay-start to-portfolio-overlay-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white space-y-2">
                      <h3 className="text-2xl font-bold font-serif">Brand Identity Design</h3>
                      <p className="text-base opacity-90">
                        Crafting elegant and impactful designs with a focus on simplicity.
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </FadeIn>
            {/* Project Card 4: E-commerce Platform */}
            <FadeIn delay={0.4}>
              <Card className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="https://unsplash.com/photos/woman-in-red-coat-standing-on-street-f0lq3lSkQz0"
                    width={600}
                    height={400}
                    alt="E-commerce Platform Project"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-overlay-start to-portfolio-overlay-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white space-y-2">
                      <h3 className="text-2xl font-bold font-serif">E-commerce Platform</h3>
                      <p className="text-base opacity-90">
                        Optimizing user flows and visual hierarchy for a seamless web experience.
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </FadeIn>
            {/* Project Card 5: Healthcare App UX */}
            <FadeIn delay={0.5}>
              <Card className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="https://unsplash.com/photos/fashion-editorial-look-3nkRiPLHVl4"
                    width={600}
                    height={400}
                    alt="Healthcare App UX Project"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-overlay-start to-portfolio-overlay-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white space-y-2">
                      <h3 className="text-2xl font-bold font-serif">Healthcare App UX</h3>
                      <p className="text-base opacity-90">
                        Designing engaging and user-friendly interfaces for mobile applications.
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </FadeIn>
            {/* Project Card 6: Fintech Web Portal */}
            <FadeIn delay={0.6}>
              <Card className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                <Link href="#" className="block" prefetch={false}>
                  <Image
                    src="https://unsplash.com/photos/grayscale-photo-of-person-wearing-black-coat-qwtCeJ5cLYs"
                    width={600}
                    height={400}
                    alt="Fintech Web Portal Project"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-overlay-start to-portfolio-overlay-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="text-white space-y-2">
                      <h3 className="text-2xl font-bold font-serif">Fintech Web Portal</h3>
                      <p className="text-base opacity-90">
                        Focusing on compelling typography and artistic layouts for content-rich sites.
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            </FadeIn>
          </div>
          <div className="flex justify-center mt-16">
            {/* You can add a "Load More" button here if you have more projects */}
          </div>
        </div>
      </section>
    </main>
  )
}

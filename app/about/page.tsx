"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import FadeIn from "@/components/FadeIn"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* About Section: Storytelling & Expressive */}
      <section id="about" className="w-full py-24 md:py-36 lg:py-48 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Main big portrait image */}
              <a
                href="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
                  alt="Team Collaboration"
                  width={500}
                  height={700}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col justify-center space-y-8">
                <FadeIn>
                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary dark:text-secondary font-serif">
                      The Journey of Creation
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Every pixel, every interaction, is a chapter in a larger narrative. We delve deep into human
                      emotions and behaviors to sculpt digital experiences that resonate on a profound level. We believe
                      good design feels invisible — but unforgettable.
                    </p>
                  </div>
                </FadeIn>
                {/* Placeholder for vertical timeline and expressive doodles/Lottie animations */}
                <div className="space-y-6 pt-8">
                  <FadeIn delay={0.2}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 font-serif">
                          Empathize & Discover
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          Unearthing core needs and desires through deep user research.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 font-serif">
                          Ideate & Prototype
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          Translating insights into innovative concepts and interactive flows.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.6}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 font-serif">
                          Refine & Deliver
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          Polishing every detail for a seamless and delightful user experience.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 md:py-36 lg:py-48 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary dark:text-primary mb-12 font-serif">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Check className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 font-serif">Empathy</h3>
                <p className="text-muted-foreground text-lg">
                  We put users at the heart of everything, understanding their needs and pain points deeply.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Check className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 font-serif">Innovation</h3>
                <p className="text-muted-foreground text-lg">
                  Pushing boundaries to create fresh, forward-thinking solutions that stand out.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Check className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 font-serif">Craftsmanship</h3>
                <p className="text-muted-foreground text-lg">
                  Meticulous attention to detail, ensuring every pixel and interaction is perfected.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}

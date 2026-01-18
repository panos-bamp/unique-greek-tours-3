"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, ChefHat, Utensils, Waves, BookOpen, ArrowRight } from "lucide-react";

const gallery = [
  "/images/cooking-class-hero-1.jpg",
  "/images/cooking-class-hero-2.jpg",
  "/images/cooking-class-hero-3.jpg",
];

const highlights = [
  "Hands-on cooking class with expert guidance",
  "Learn authentic traditional Greek recipes",
  "Use fresh ingredients from our garden",
  "Relax by the pool while food cooks",
  "Enjoy a delicious homemade lunch",
  "Take home a recipe booklet",
];

const included = [
  "Hands-on cooking class with expert guidance",
  "Use of fresh, homegrown ingredients",
  "Access to swimming pool and garden amenities",
  "A delicious lunch featuring traditional Greek dishes",
  "Recipe booklet to take home",
  "All equipment and materials",
];

const perfectFor = [
  "Families seeking a hands-on, educational activity",
  "Couples looking for a romantic Greek experience",
  "University and student groups for cultural immersion",
  "Corporate teams looking to bond over shared activity",
  "Foodies eager to learn traditional Greek recipes",
];

export default function NafplioCookingClass() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Farmhouse Cooking Class</span>
          </div>
        </div>
      </div>

      {/* Image Gallery Carousel */}
      <section className="relative">
        <div className="relative h-[70vh]">
          <Image
            src={gallery[currentImage]}
            alt="Cooking class gallery"
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "w-8 bg-white" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">
                Farmhouse Cooking Class
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Duration:</span> 4 hours
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Group Size:</span> Max 10 people
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Season:</span> Year-round
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="font-semibold">Location:</span> Country farmhouse
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">The Experience</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Join us for a delightful Farmhouse Culinary Experience at our charming country house, 
                  nestled amidst fruit trees and a lush vegetable garden. This immersive cooking class 
                  offers a unique opportunity to learn the secrets of traditional Greek cuisine.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our guests have raved about the cooking during our sea kayak tours, and now you can 
                  dive deeper into these beloved recipes. Engage in hands-on cooking, relax by the pool, 
                  and savor a delicious meal in a picturesque garden setting.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Led by an expert local cook, you'll learn to prepare authentic Greek dishes using 
                  fresh, locally-sourced ingredients straight from our garden. This is more than a 
                  cooking class—it's a complete Greek culinary experience.
                </p>
              </div>

              {/* What You Can Expect */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <ChefHat className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Hands-On Cooking Class
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Participate in a hands-on cooking session where you'll learn to prepare authentic 
                        Greek dishes using fresh, locally-sourced ingredients from our garden. Our expert 
                        will guide you through each step, sharing family recipes and culinary tips.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Utensils className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Traditional Recipes
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Discover the art of traditional Greek cooking, from savory pies and hearty stews 
                        to delectable desserts. Engage in the preparation and cooking process, and uncover 
                        the secrets behind each flavorful dish.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Waves className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Relaxation Time
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        While the food is cooking, enjoy an hour of leisure in our beautiful surroundings. 
                        Take a refreshing swim in our pool, play in the garden, or simply unwind on our 
                        sun-beds or hammock, soaking in the tranquil atmosphere.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Star className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Delicious Lunch
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Once the cooking is complete, sit down to a sumptuous meal in our scenic garden. 
                        Savor the dishes you've helped prepare, complemented by fresh produce from our 
                        farm, and enjoy the company of fellow food enthusiasts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <BookOpen className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                        Recipe Booklet
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Take home a beautifully crafted recipe booklet containing all the recipes you 
                        learned during the class, so you can recreate these authentic Greek dishes 
                        in your own kitchen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Experience Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Perfect For</h2>
                <div className="bg-accent/5 rounded-2xl p-8">
                  <div className="space-y-3">
                    {perfectFor.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What's Included</h2>
                <div className="bg-sand-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {included.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">
                      €110
                    </div>
                    <div className="text-sm text-gray-600">per person</div>
                    <div className="text-sm text-accent mt-2">€80 for children (5-12 years)</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">4 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-semibold text-gray-900">Country farmhouse</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-sand-100">
                      <span className="text-gray-600">Period:</span>
                      <span className="font-semibold text-gray-900">All year</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Group Size:</span>
                      <span className="font-semibold text-gray-900">Max 10</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg"
                  >
                    Book This Experience
                  </Link>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Reserve now and pay later
                  </p>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">
                    Questions?
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Contact our team for personalized assistance
                  </p>
                  <a
                    href="tel:+302752024444"
                    className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Call (+30) 27520 24444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cooking-class-hero-1.jpg"
            alt="Greek cooking experience"
            fill
            className="object-cover brightness-50"
          />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">
            Ready to Cook Greek?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Book your Farmhouse Cooking Class today and discover the secrets of 
            authentic Greek cuisine in a beautiful countryside setting.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white"
          >
            Book Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

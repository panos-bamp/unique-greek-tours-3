"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Calendar, Check, ChevronLeft, ChevronRight, Clock, Coffee, Star, TreePine, Users, UtensilsCrossed } from "lucide-react";

const gallery = [
  "/images/cooking-class-hero-1.jpg",
  "/images/cooking-class-hero-2.jpg",
  "/images/cooking-class-hero-3.jpg",
];

const included = [
  "Hands-on cooking class with expert guidance",
  "Use of fresh, homegrown ingredients",
  "Access to the swimming pool and garden amenities",
  "A delicious lunch featuring traditional Greek dishes",
  "Recipe booklet to take home",
];



export default function NafplioCookingClass() {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="flex flex-col">
      <div className="bg-sand-50 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/tours" className="hover:text-primary">TOURS & EXCURSIONS</Link>
            <span>/</span>
            <Link href="/tours/nafplio" className="hover:text-primary">Nafplio Tours</Link>
            <span>/</span>
            <span className="text-primary">Cooking Class</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Cooking Class" fill className="object-cover" priority />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"><ChevronLeft className="h-6 w-6 text-primary" /></button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"><ChevronRight className="h-6 w-6 text-primary" /></button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (<button key={index} onClick={() => setCurrentImage(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? "w-8 bg-white" : "bg-white/60"}`} />))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">Cooking Class</h1>
              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700"><Clock className="h-5 w-5 text-accent" /><span className="font-semibold">Duration:</span> 4 hours</div>

                <div className="flex items-center gap-2 text-gray-700"><Users className="h-5 w-5 text-accent" /><span className="font-semibold">Trip Type:</span> For all</div>
                <div className="flex items-center gap-2 text-gray-700"><Calendar className="h-5 w-5 text-accent" /><span className="font-semibold">Season:</span> All year</div>
              </div>
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">Join us for a delightful Farmhouse Culinary Experience at our charming country house, nestled amidst fruit trees and a lush vegetable garden. This immersive cooking class, led by my talented mother, offers a unique opportunity to learn the secrets of traditional Greek cuisine.</p>
                <p className="text-lg text-gray-700 leading-relaxed">Our guests have raved about her cooking during our sea kayak tours, and now you can dive deeper into these beloved recipes. Engage in hands-on cooking, relax by the pool, and savor a delicious meal in a picturesque garden setting.</p>
              </div>
              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><UtensilsCrossed className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Hands-On Cooking</h3><p className="text-gray-600 leading-relaxed">Learn to prepare authentic Greek dishes using fresh, locally-sourced ingredients with family recipes and culinary tips.</p></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><TreePine className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Relaxation Time</h3><p className="text-gray-600 leading-relaxed">While the food is cooking, enjoy a refreshing swim in the pool, play in the garden, or unwind on sun-beds.</p></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Coffee className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Delicious Lunch</h3><p className="text-gray-600 leading-relaxed">Sit down to a sumptuous meal in the scenic garden — dishes you've helped prepare, complemented by fresh farm produce.</p></div></div>
                </div>
              </div>
              <div className=" gap-8 mb-12">
                <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                  <h3 className="font-display text-2xl text-primary mb-4 flex items-center gap-2"><Check className="h-6 w-6 text-green-600" /> What's Included</h3>
                  <ul className="space-y-3">{included.map((item, index) => (<li key={index} className="flex items-start gap-2 text-gray-700"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>{item}</span></li>))}</ul>
                  <div className="mt-6 pt-6 border-t border-green-200"><p className="text-sm text-gray-600 flex items-center gap-2"><Star className="h-5 w-5 text-accent" /><strong>Full refund or change of date in case of adverse weather conditions</strong></p></div>
                </div>

              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200"><div className="text-sm text-gray-600 mb-2">Price</div><div className="font-display text-4xl font-bold text-primary-dark">€110</div><div className="text-sm text-gray-600">per person (€80 for 5-12 y.o.)</div></div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100"><span className="text-gray-600">Duration:</span><span className="font-semibold text-gray-900">4 hours</span></div>

                    <div className="flex justify-between py-2 border-b border-sand-100"><span className="text-gray-600">Availability:</span><span className="font-semibold text-gray-900">All year</span></div>
                    <div className="flex justify-between py-2"><span className="text-gray-600">Tour Type:</span><span className="font-semibold text-gray-900">For all</span></div>
                  </div>
                  <Link href="/tour-request" className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg">Book This Tour</Link>
                  <p className="text-xs text-gray-500 text-center mt-4">Reserve now and pay later</p>
                </div>
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">Contact our team for personalized assistance</p>
                  <div className="space-y-2">
                    <a href="tel:+302751067616" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors">Call +30 27510 67616</a>
                    <a href="tel:+306945890920" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm">Vaggelis: +30 694 5890920</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0"><Image src="/images/cooking-class-hero-3.jpg" alt="Cooking Class" fill className="object-cover brightness-50" /></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Cook Like a Greek</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">Book your farmhouse cooking class experience.</p>
          <Link href="/tour-request" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">Book Now <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </div>
  );
}

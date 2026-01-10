"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Users, Calendar, MapPin, Check, Star, Church, Waves, Landmark, Mountain, Camera, ArrowRight } from "lucide-react";

const gallery = [
  "/images/nafplio-hiking-lousios-tour-hero-1.jpg",
  "/images/nafplio-hiking-lousios-tour-hero-2.jpg",
  "/images/nafplio-hiking-lousios-tour-hero-3.jpg",
];

const highlights = [
  "Picturesque Dimitsana village",
  "One of Greece's wildest gorges",
  "Byzantine Monastery of Philosophos (963 AD)",
  "Monastery of Prodromos (1167 AD)",
  "Ancient Asclepieion of Gortyna",
  "Swim in crystal-clear Lousios River",
];

const included = [
  "Professional mountain guide",
  "Pick up from hotel or meeting point",
  "Return private transportation from Nafplio",
  "Liability insurance",
  "All taxes",
];

export default function NafplioHikingLousiosTour() {
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
            <span className="text-primary">Hiking Lousios Gorge</span>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="relative h-[70vh]">
          <Image src={gallery[currentImage]} alt="Hiking Lousios Gorge" fill className="object-cover" priority />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10">
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10">
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {gallery.map((_, index) => (
              <button key={index} onClick={() => setCurrentImage(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? "w-8 bg-white" : "bg-white/60"}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6 font-bold">Hiking Lousios Gorge - Dimitsana - Ancient Gortyna</h1>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-700"><Clock className="h-5 w-5 text-accent" /><span className="font-semibold">Duration:</span> 5.5-6 hours</div>
                <div className="flex items-center gap-2 text-gray-700"><Users className="h-5 w-5 text-accent" /><span className="font-semibold">Group Size:</span> Small groups</div>
                <div className="flex items-center gap-2 text-gray-700"><Calendar className="h-5 w-5 text-accent" /><span className="font-semibold">Season:</span> Spring to Autumn</div>
                <div className="flex items-center gap-2 text-gray-700"><MapPin className="h-5 w-5 text-accent" /><span className="font-semibold">Pick-up:</span> 9:00 AM</div>
              </div>

              <div className="mb-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-orange-800 font-semibold"><Mountain className="inline h-5 w-5 mr-2" />Difficulty: Medium | Distance: 12 km | Good fitness required (not for children)</p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">A very interesting hike along one of the wildest gorges and rivers of our country, in an environment of wild and orgiastic nature. The Lousios Gorge offers some of the most dramatic scenery in the Peloponnese.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">The trail starts from the picturesque Dimitsana, famous for its exquisite stone houses and mansions, one of the villages that contributed to the revolution against the Ottomans. In Dimitsana is also located the unique water power museum, which we can visit.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">Hikers have the opportunity to visit two medieval Byzantine monasteries hanging on the vertical rocks, where inhabitants sought isolation and protection in adventurous times. The Monastery of Philosophos (founded in 963) and the Monastery of Prodromos (founded in 1167) are remarkable examples of Byzantine cliff architecture.</p>
                <p className="text-lg text-gray-700 leading-relaxed">You will also visit the Asclepieion (ancient healing center), dedicated to the god of medicine Asclepius, part of the ancient city of Gortyna at the end of the gorge. At this location you can enjoy a refreshing swim in the crystal clear waters of the Lousios River.</p>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What You Can Expect</h2>
                <div className="space-y-6">
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Mountain className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Historic Dimitsana Village</h3><p className="text-gray-600 leading-relaxed">Start in this picturesque village with beautiful stone mansions, known for its role in the Greek revolution and unique water power museum.</p></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Church className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Byzantine Cliff Monasteries</h3><p className="text-gray-600 leading-relaxed">Visit two remarkable monasteries built into vertical rock faces - Philosophos (963 AD) and Prodromos (1167 AD).</p></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Landmark className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Ancient Asclepieion of Gortyna</h3><p className="text-gray-600 leading-relaxed">Visit the ancient healing center dedicated to Asclepius, god of medicine, part of the ancient city of Gortyna.</p></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Waves className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Swim in Lousios River</h3><p className="text-gray-600 leading-relaxed">Enjoy a refreshing swim in the crystal-clear waters of the Lousios River - a perfect reward after your hike.</p></div></div>
                  <div className="flex gap-4"><div className="flex-shrink-0"><div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Camera className="h-6 w-6" /></div></div><div className="flex-1"><h3 className="font-display text-xl font-bold text-primary-dark mb-2">Wild Gorge Scenery</h3><p className="text-gray-600 leading-relaxed">Experience one of Greece's most dramatic natural landscapes - vertical cliffs, lush vegetation, and rushing water.</p></div></div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">Tour Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">{highlights.map((highlight, index) => (<div key={index} className="flex items-start gap-3"><Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" /><span className="text-gray-700">{highlight}</span></div>))}</div>
              </div>

              <div className="mb-12">
                <h2 className="font-display text-3xl text-primary mb-6">What is Included</h2>
                <div className="bg-sand-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-4">{included.map((item, index) => (<div key={index} className="flex items-start gap-3"><Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-gray-700">{item}</span></div>))}</div>
                  <div className="mt-6 pt-6 border-t border-sand-200"><p className="text-sm text-gray-600 flex items-center gap-2"><Star className="h-5 w-5 text-accent" /><strong>Full refund or change of date in case of adverse weather conditions</strong></p></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-sand-200 p-8">
                  <div className="text-center mb-6 pb-6 border-b border-sand-200">
                    <div className="text-sm text-gray-600 mb-2">From</div>
                    <div className="font-display text-4xl font-bold text-primary-dark">€85</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-sand-100"><span className="text-gray-600">Duration:</span><span className="font-semibold text-gray-900">5.5-6 hours</span></div>
                    <div className="flex justify-between py-2 border-b border-sand-100"><span className="text-gray-600">Pick-up Time:</span><span className="font-semibold text-gray-900">9:00 AM</span></div>
                    <div className="flex justify-between py-2 border-b border-sand-100"><span className="text-gray-600">Difficulty:</span><span className="font-semibold text-orange-600">Medium</span></div>
                    <div className="flex justify-between py-2"><span className="text-gray-600">Distance:</span><span className="font-semibold text-gray-900">12 km</span></div>
                  </div>
                  <Link href="/contact" className="block w-full py-4 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent-dark transition-all shadow-md hover:shadow-lg text-lg">Book This Tour</Link>
                  <p className="text-xs text-gray-500 text-center mt-4">Reserve now and pay later</p>
                </div>
                <div className="bg-primary text-white rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold mb-4">Questions?</h3>
                  <p className="text-blue-100 mb-4">Contact our team for personalized assistance</p>
                  <a href="tel:+302752024444" className="block w-full py-3 bg-white text-primary text-center font-semibold rounded-lg hover:bg-blue-50 transition-colors">Call (+30) 27520 24444</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0"><Image src="/images/nafplio-hiking-lousios-tour-hero-2.jpg" alt="Lousios Gorge" fill className="object-cover brightness-50" /></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl mb-6 font-bold">Explore Greeces Wild Side</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">Book your Lousios Gorge hiking tour and experience dramatic gorges, Byzantine monasteries, and crystal-clear waters.</p>
          <Link href="/contact" className="btn-primary text-lg bg-white text-primary hover:bg-accent hover:text-white">Book Now <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </div>
  );
}

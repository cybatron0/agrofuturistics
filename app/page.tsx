'use client';

import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    id: 'onions',
    nameCh: 'Anyezi',
    nameEn: 'Onions',
    variety: 'Red Creole',
    price: 25,
    status: 'Available',
    ready: false,
    image: '/images/onions.jpg',
    description: 'High quality Red Creole onion seedlings.',
  },
  {
    id: 'cabbage',
    nameCh: 'Kabichi',
    nameEn: 'Cabbage',
    variety: 'Copenhagen',
    price: 80,
    status: 'Ready to plant',
    ready: true,
    image: '/images/cabbage.jpg',
    description: 'Copenhagen cabbage seedlings ready for transplanting.',
  },
  {
    id: 'rape',
    nameCh: 'Rape',
    nameEn: 'Rape',
    variety: '',
    price: 45,
    status: 'Available',
    ready: false,
    image: '/images/leafy.jpg',
    description: 'Fresh rape seedlings.',
  },
  {
    id: 'mustard',
    nameCh: 'Mustard',
    nameEn: 'Mustard',
    variety: '',
    price: 45,
    status: 'Available',
    ready: false,
    image: '/images/leafy.jpg',
    description: 'Quality mustard seedlings.',
  },
  {
    id: 'chinese',
    nameCh: 'Chinese',
    nameEn: 'Chinese Cabbage',
    variety: '',
    price: 45,
    status: 'Available',
    ready: false,
    image: '/images/cabbage.jpg',
    description: 'Chinese cabbage seedlings.',
  },
  {
    id: 'chilli',
    nameCh: "Sabola wa Kapiripiri",
    nameEn: "Bird's Eye Chilli",
    variety: '',
    price: 70,
    status: 'Ready',
    ready: true,
    image: '/images/chilli-trays.jpg',
    description: "Bird's Eye Chilli seedlings ready for planting.",
  },
];

const PHONES = [
  { number: '0998935833', display: '0998 935 833', wa: '265998935833' },
  { number: '0991881746', display: '0991 881 746', wa: '265991881746' },
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === selected);

  const openWhatsApp = (phoneWa: string, productName?: string, quantity?: number) => {
    let message = 'Moni, ndikufuna mbande kuchokera ku AgroFuturistics.';
    if (productName && quantity) {
      message = `Moni, ndikufuna ${quantity} x ${productName} seedlings. Ndi kuchokera ku AgroFuturistics website.`;
    }
    const url = `https://wa.me/${phoneWa}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-50 to-white">
      <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-forest-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="AgroFuturistics" width={48} height={48} className="rounded-full object-cover" />
            <div>
              <h1 className="font-bold text-forest-700 text-lg leading-tight">AGROFUTURISTICS</h1>
              <p className="text-xs text-forest-500 hidden sm:block">Planting Today, Harvesting Tomorrow</p>
            </div>
          </div>
          <div className="flex gap-2">
            {PHONES.map((p) => (
              <a key={p.number} href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener noreferrer" className="bg-leaf-500 hover:bg-leaf-600 text-white text-sm font-medium px-3 py-1.5 rounded-full transition">WhatsApp</a>
            ))}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-forest-600 font-medium mb-2">🌱 MBANDE ZABWINO ZILIPO!</p>
            <h2 className="text-3xl md:text-5xl font-bold text-forest-800 leading-tight mb-4">Quality Seedlings.<br /><span className="text-leaf-500">Stronger Futures.</span></h2>
            <p className="text-gray-600 text-lg mb-6 max-w-lg">Mukufuna mbande zabwino komanso zathanzi? Tili nazo pa mitengo yabwino. Planting today, harvesting tomorrow.</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#catalogue" className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition">View Catalogue</a>
              <a href="#contact" className="border-2 border-forest-600 text-forest-700 hover:bg-forest-50 font-semibold px-6 py-3 rounded-xl transition">Contact Us</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/logo.jpg" alt="AgroFuturistics Logo" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="catalogue" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-2">Our Seedlings</h2>
            <p className="text-gray-600">Quality seedlings ready for your garden and farm</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-forest-50">
                <div className="relative h-48 bg-forest-50">
                  <Image src={p.image} alt={`${p.nameEn} seedlings`} fill className="object-cover" />
                  {p.ready && <span className="absolute top-3 right-3 bg-leaf-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">✅ Ready</span>}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-forest-800">{p.nameCh} <span className="text-gray-500 font-normal text-base">({p.nameEn})</span></h3>
                  {p.variety && <p className="text-sm text-gray-500 mt-0.5">Variety: {p.variety}</p>}
                  <p className="text-2xl font-bold text-forest-600 mt-3">K{p.price} <span className="text-sm font-normal text-gray-500">per seedling</span></p>
                  <button onClick={() => { setSelected(p.id); setQty(1); }} className="mt-4 w-full bg-forest-600 hover:bg-forest-700 text-white font-medium py-2.5 rounded-xl transition">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-forest-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-2">📍 Tikupezeka ku Bunda, Lilongwe</p>
          <p className="text-gray-600 mb-8">Call or WhatsApp us to place your order</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {PHONES.map((p) => (
              <div key={p.number} className="bg-white rounded-2xl shadow-md p-6 flex-1 max-w-xs mx-auto">
                <p className="text-2xl font-bold text-forest-700 mb-3">{p.display}</p>
                <div className="flex gap-2 justify-center">
                  <a href={`tel:+265${p.number.slice(1)}`} className="bg-forest-100 text-forest-700 hover:bg-forest-200 px-4 py-2 rounded-lg font-medium transition">Call</a>
                  <a href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener noreferrer" className="bg-leaf-500 hover:bg-leaf-600 text-white px-4 py-2 rounded-lg font-medium transition">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-forest-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Image src="/logo.jpg" alt="Logo" width={56} height={56} className="rounded-full" />
          </div>
          <p className="font-bold text-lg">AGROFUTURISTICS</p>
          <p className="text-forest-200 text-sm mt-1">Planting Today, Harvesting Tomorrow</p>
          <p className="text-forest-300 text-sm mt-4">Quality Seedlings. Stronger Futures.</p>
          <p className="text-forest-400 text-xs mt-6">© {new Date().getFullYear()} AgroFuturistics · Bunda, Lilongwe</p>
        </div>
      </footer>

      {selected && product && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-forest-800">{product.nameCh} ({product.nameEn})</h3>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden mb-4">
              <Image src={product.image} alt={product.nameEn} fill className="object-cover" />
            </div>
            {product.variety && <p className="text-sm text-gray-500 mb-1">Variety: {product.variety}</p>}
            <p className="text-2xl font-bold text-forest-600 mb-4">K{product.price} each</p>
            <div className="flex items-center gap-4 mb-6">
              <label className="font-medium">Quantity:</label>
              <div className="flex items-center gap-2">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-full bg-forest-100 text-forest-700 font-bold">−</button>
                <span className="w-10 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-8 h-8 rounded-full bg-forest-100 text-forest-700 font-bold">+</button>
              </div>
            </div>
            <p className="text-lg font-semibold mb-4">Total: K{(product.price * qty).toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-3">Choose WhatsApp number to order:</p>
            <div className="flex flex-col gap-2">
              {PHONES.map((p) => (
                <button key={p.number} onClick={() => openWhatsApp(p.wa, `${product.nameCh} (${product.nameEn})`, qty)} className="w-full bg-leaf-500 hover:bg-leaf-600 text-white font-medium py-3 rounded-xl transition">Order via {p.display}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        {PHONES.map((p) => (
          <a key={p.number} href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition" title={`WhatsApp ${p.display}`}>
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          </a>
        ))}
      </div>
    </div>
  );
}

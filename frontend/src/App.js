import "@/App.css";
import { Calendar, Heart, Camera, FileText, Apple, Star, ChevronRight, ChevronDown, CheckCircle, Clock, ArrowLeft, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { blogPosts } from "./data/blogPosts";
import { useEffect, useState } from "react";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Images - Blue theme
const APP_ICON = "/images/app-icon-new.webp";
const APP_MOCKUP = "/images/app-mockup-1.webp";
const APP_MOCKUP_2 = "/images/mockup-app.webp";
const APP_MOCKUP_DIYABETIK = "/images/mockup-diyabetik.webp";
const APP_MOCKUP_PROFILE = "/images/app-mockup-profile.webp";
const APP_USAGE_IMAGE = "/images/app-usage.webp";

// Links
const APP_STORE_LINK = "https://apps.apple.com/tr/app/ayaktakip/id6759668374?l=tr";
const GOOGLE_PLAY_LINK = "https://play.google.com/store/apps/details?id=com.pedizonee.ayaktakip2&hl=tr";
const PRIVACY_LINK = "https://pedizone.com/privacy/";

// Google Play Icon Component
const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
  </svg>
);

// Store Buttons Component
const StoreButtons = ({ className = "" }) => (
  <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
    <a 
      href={APP_STORE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="store-btn store-btn-dark"
      data-testid="app-store-btn"
    >
      <Apple size={20} />
      <div className="text-left">
        <div className="text-[10px] opacity-70">App Store'dan</div>
        <div className="text-sm font-semibold">İndirin</div>
      </div>
    </a>
    <a 
      href={GOOGLE_PLAY_LINK}
      className="store-btn store-btn-light"
      data-testid="google-play-btn"
    >
      <GooglePlayIcon />
      <div className="text-left">
        <div className="text-[10px] opacity-50">Google Play'den</div>
        <div className="text-sm font-semibold">İndirin</div>
      </div>
    </a>
  </div>
);

// Hero Section with SEO H1
const HeroSection = () => (
  <section className="hero-wave-bg min-h-screen flex items-center pt-12 pb-32" data-testid="hero-section">
    <div className="wave-decoration"></div>
    <div className="container-custom w-full relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* App Icon */}
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
            <img 
              src={APP_ICON} 
              alt="AyakTakip diyabetik ayak takibi uygulaması ikonu" 
              className="w-16 h-16 rounded-2xl shadow-lg"
            />
            <span className="text-xl font-bold text-[#1E40AF]">AyakTakip</span>
          </div>
          
          {/* SEO H1 */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D3A5F] leading-tight mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Diyabetik Ayak Takibi ve<br />
            <span className="title-gradient">Ayak Sağlığı İzleme Uygulaması</span>
          </h1>
          
          {/* SEO Description */}
          <p className="text-base sm:text-lg text-[#4A5568] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            AyakTakip, diyabetik ayak ve genel ayak sağlığını düzenli olarak izlemek için geliştirilmiş bir mobil uygulamadır. 
            Fotoğraf ile takip yapabilir, değişimleri kaydedebilir ve rapor oluşturabilirsiniz.
          </p>
          
          <StoreButtons className="justify-center lg:justify-start" />
        </div>
        
        {/* Phone Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl animate-float">
            <img 
              src={APP_MOCKUP}
              alt="Diyabetik ayak takibi mobil uygulama ekranı"
              className="w-full phone-shadow rounded-3xl"
              data-testid="hero-mockup"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Features Section
const features = [
  {
    icon: Calendar,
    title: "Günlük Kontrol",
    description: "Günlük belirtilerinizi not edin",
    colorClass: "calendar",
    iconColor: "#1976D2"
  },
  {
    icon: Heart,
    title: "Diyabetik Mod",
    description: "Size özel öneriler alın",
    colorClass: "diabetic",
    iconColor: "#2E7D32"
  },
  {
    icon: Camera,
    title: "Fotoğraf ile İzleme",
    description: "Ayaklarınızı fotoğraflayın",
    colorClass: "camera",
    iconColor: "#0097A7"
  },
  {
    icon: FileText,
    title: "PDF Raporları",
    description: "Detaylı raporlar oluşturun",
    colorClass: "pdf",
    iconColor: "#C62828"
  }
];

const FeaturesSection = () => (
  <section className="section-spacing bg-white" data-testid="features-section">
    <div className="container-custom">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2563EB] mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Öne Çıkan Özellikler
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="feature-card animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            data-testid={`feature-card-${index}`}
          >
            <div className={`feature-icon-box ${feature.colorClass}`}>
              <feature.icon size={28} color={feature.iconColor} />
            </div>
            <h3 className="text-base font-bold text-[#1D3A5F] mb-1">{feature.title}</h3>
            <p className="text-sm text-[#64748B]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// SEO Section - Diyabetik Ayak Takibi Neden Önemli?
const DiyabetikAyakSection = () => (
  <section className="section-spacing bg-[#EFF6FF]" data-testid="diyabetik-ayak-section">
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        {/* Blok 1: Diyabetik Ayak Takibi Neden Önemlidir? */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <img src={APP_ICON} alt="AyakTakip uygulaması ikonu" className="w-12 h-12 rounded-xl" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Diyabetik Ayak Takibi Neden Önemlidir?
            </h2>
          </div>
          <p className="text-[#4A5568] text-lg leading-relaxed">
            Diyabetik ayak takibi, ayak bölgesindeki değişimlerin düzenli gözlemlenmesine yardımcı olabilir. 
            Düzenli takip, fark edilen durumların daha erken değerlendirilmesini destekleyebilir. 
            Gerekli durumlarda sağlık uzmanına veya podolojik değerlendirmeye başvurulması önerilir.
          </p>
        </div>
        
        {/* Blok 2: Ayak Sağlığı Nasıl Takip Edilir? */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Ayak Sağlığı Nasıl Takip Edilir?
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span className="text-[#4A5568] text-lg">Günlük gözlem yapılması önerilir</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span className="text-[#4A5568] text-lg">Fotoğraf ile değişimlerin kaydedilmesi önerilir</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span className="text-[#4A5568] text-lg">Belirti ve notların düzenli tutulması önerilir</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span className="text-[#4A5568] text-lg">Düzenli raporlama ile süreç izlenebilir</span>
            </li>
          </ul>
        </div>

        {/* Blok 3: Kimler İçin Uygundur? */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Kimler İçin Uygundur?
          </h2>
          <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
            Uygulama, diyabetik ayak takibi yapmak isteyen kullanıcılar ve genel ayak sağlığını düzenli izlemek isteyen bireyler için geliştirilmiştir.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Reviews Data - SEO Safe, No Medical Claims
const reviews = [
  {
    name: "Ortomek",
    rating: 5,
    title: "Kesinlikle tavsiye ederim",
    text: "Diyabet hastasıyım ve ayağımdaki değişimleri düzenli olarak kayıt altına alabiliyorum. Takip sürecimi düzenli hale getirmeme yardımcı oldu, herkese tavsiye ederim.",
    date: "7 Mar 2026"
  },
  {
    name: "Belladona.",
    rating: 5,
    title: "Kullanışlı Uygulama",
    text: "Tam da aradığım özelliklerde bir uygulama. Reklam yok, hızlı ve kullanımı çok kolay.",
    date: "7 Mar 2026"
  },
  {
    name: "Kuntsaz",
    rating: 5,
    title: "Hızlı ve Pratik",
    text: "Hızlı kolay kullanım, arayüz çok anlaşılır. Bildirimler sayesinde günlük kontrollerimi aksatmıyorum.",
    date: "2 Nis 2026"
  },
  {
    name: "eNa—-",
    rating: 5,
    title: "Düzenli Takip",
    text: "Ayak sağlığını takip etmek için kullanışlı bir uygulama. Blog yazıları ve öneriler faydalı. Kullanıcı dostu bir arayüzü var.",
    date: "7 Mar 2026"
  },
  {
    name: "S11BK",
    rating: 5,
    title: "Faydalı Bilgiler",
    text: "Güzel bir uygulama, faydalı bilgiler ve öneriler içeriyor. Düzenli kayıt tutmayı kolaylaştırıyor.",
    date: "9 Mar 2026"
  },
  {
    name: "Kürşat3306",
    rating: 5,
    title: "Başarılı",
    text: "Uygulama kullanışlı ve pratik. Fotoğraf ile takip özelliği benim için çok faydalı oldu.",
    date: "7 Mar 2026"
  }
];

// Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        className={i < rating ? "fill-[#FF9500] text-[#FF9500]" : "text-gray-300"} 
      />
    ))}
  </div>
);

// Reviews Section
const ReviewsSection = () => (
  <section className="section-spacing bg-white" data-testid="reviews-section">
    <div className="container-custom">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Kullanıcı Yorumları
        </h2>
        <div className="flex items-center justify-center gap-2">
          <StarRating rating={5} />
          <span className="text-[#64748B] text-sm">App Store'da 5.0</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <div 
            key={index}
            className="review-card bg-[#F8FAFB] rounded-2xl p-5 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            data-testid={`review-card-${index}`}
          >
            <div className="flex items-center justify-between mb-3">
              <StarRating rating={review.rating} />
              <span className="text-xs text-[#94A3B8]">{review.date}</span>
            </div>
            <h4 className="font-bold text-[#1D3A5F] mb-2">{review.title}</h4>
            <p className="text-sm text-[#64748B] mb-3 leading-relaxed">{review.text}</p>
            <p className="text-xs text-[#94A3B8]">— {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// How It Works Section
const steps = [
  {
    number: 1,
    title: "Fotoğraf Çek",
    description: "Ayaklarınızı fotoğraflayın",
    image: APP_USAGE_IMAGE
  },
  {
    number: 2,
    title: "Takip Et",
    description: "Verilerinizi kaydedin",
    image: APP_MOCKUP_DIYABETIK
  },
  {
    number: 3,
    title: "Rapor Al",
    description: "Raporunuzu oluşturun",
    image: APP_MOCKUP_2
  }
];

const HowItWorksSection = () => (
  <section className="section-spacing bg-[#EFF6FF]" data-testid="how-it-works-section">
    <div className="container-custom">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2563EB] mb-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Nasıl Çalışır?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="step-card animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            data-testid={`step-${index}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="step-number">{step.number}</div>
              <h3 className="text-xl font-bold text-[#2563EB]">{step.title}</h3>
            </div>
            <div className="step-phone-mockup">
              <img 
                src={step.image}
                alt={`Diyabetik ayak takibi ${step.title.toLowerCase()} adımı`}
                className="w-full"
              />
            </div>
            <p className="text-[#64748B]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Blog List Page
const BlogPage = () => (
  <div className="min-h-screen bg-white">
    <div className="bg-[#EFF6FF] py-16">
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center gap-2 text-[#2563EB] mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfa
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D3A5F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Ayak Sağlığı Rehberi
        </h1>
        <p className="text-[#64748B] mt-2 max-w-2xl">
          Diyabetik ayak bakımı, yara takibi ve günlük ayak sağlığı hakkında uzman bilgiler
        </p>
      </div>
    </div>
    <div className="container-custom py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Link 
            key={index}
            to={`/blog/${post.slug}`}
            className="group block bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#2563EB]/30 transition-all duration-300"
          >
            {/* Blog Image */}
            <div className="aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
              <img 
                src={post.image} 
                alt={post.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Blog Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 text-sm text-[#94A3B8] mb-3">
                <span>{post.date}</span>
                {post.readTime && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </>
                )}
              </div>
              <h2 className="text-lg font-bold text-[#1D3A5F] mb-2 group-hover:text-[#2563EB] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#64748B] text-sm line-clamp-2 mb-3">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[#2563EB] font-medium group-hover:gap-3 transition-all">
                Devamını Oku
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

// Blog Post Page
const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  // Dynamic title, meta & FAQ schema - must be before any conditional return
  useEffect(() => {
    if (!post) return;
    
    document.title = `${post.title} | AyakTakip`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', post.excerpt);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', post.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', post.excerpt);
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', `https://ayaktakip.com${post.image}`);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', post.title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', post.excerpt);
    const twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage) twImage.setAttribute('content', `https://ayaktakip.com${post.image}`);

    // Article JSON-LD schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "image": `https://ayaktakip.com${post.image}`,
      "datePublished": post.date,
      "publisher": {
        "@type": "Organization",
        "name": "AyakTakip",
        "url": "https://ayaktakip.com"
      },
      "mainEntityOfPage": `https://ayaktakip.com/blog/${post.slug}`
    };
    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.id = 'article-schema';
    articleScript.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    // FAQ JSON-LD schema
    if (post.faq && post.faq.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      };
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = 'faq-schema';
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    return () => {
      const existingArticle = document.getElementById('article-schema');
      if (existingArticle) existingArticle.remove();
      const existingFaq = document.getElementById('faq-schema');
      if (existingFaq) existingFaq.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1D3A5F] mb-4">Sayfa Bulunamadı</h1>
          <Link to="/blog" className="text-[#2563EB] hover:underline">Blog'a dön</Link>
        </div>
      </div>
    );
  }

  // Parse markdown links in text to clickable <a> tags
  const parseLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      const [, linkText, url] = match;
      const isExternal = url.startsWith('http');
      parts.push(
        <a
          key={match.index}
          href={url}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-[#2563EB] underline underline-offset-2 hover:text-[#1D4ED8] transition-colors"
        >
          {linkText}
          {isExternal && <ExternalLink className="inline w-3 h-3 ml-1 -mt-0.5" />}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  // FAQ Accordion Component
  const FaqSection = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    
    return (
      <div className="my-10" data-testid="faq-section">
        <h2 className="text-xl font-bold text-[#1D3A5F] mb-6 pb-2 border-b border-[#E2E8F0]">
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="border border-[#E2E8F0] rounded-xl overflow-hidden" data-testid={`faq-item-${i}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="font-medium text-[#1D3A5F] pr-4">{item.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#94A3B8] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-4 pb-4 text-[#4A5568] leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Parse content with better formatting
  const renderContent = (content) => {
    const sections = content.split('\n\n');
    return sections.map((section, idx) => {
      // Headers
      if (section.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-xl font-bold text-[#1D3A5F] mt-10 mb-4 pb-2 border-b border-[#E2E8F0]">
            {section.replace('## ', '')}
          </h2>
        );
      }
      
      // Unordered lists
      if (section.startsWith('- ')) {
        const items = section.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={idx} className="space-y-2 my-4 ml-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4A5568]">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span>{parseLinks(item.replace('- ', ''))}</span>
              </li>
            ))}
          </ul>
        );
      }
      
      // Ordered lists
      if (section.match(/^\d\. /)) {
        const items = section.split('\n').filter(line => line.match(/^\d\. /));
        return (
          <ol key={idx} className="space-y-2 my-4 ml-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4A5568]">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2563EB] text-white text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{parseLinks(item.replace(/^\d\. /, ''))}</span>
              </li>
            ))}
          </ol>
        );
      }
      
      // Horizontal rule / disclaimer
      if (section.startsWith('---')) {
        return <hr key={idx} className="my-8 border-[#E2E8F0]" />;
      }
      
      // Italic disclaimer text
      if (section.startsWith('*') && section.endsWith('*')) {
        return (
          <p key={idx} className="text-sm text-[#94A3B8] italic my-4 p-4 bg-[#F8FAFC] rounded-lg border-l-4 border-[#2563EB]">
            {section.replace(/^\*|\*$/g, '')}
          </p>
        );
      }
      
      // Regular paragraphs with link support
      return (
        <p key={idx} className="text-[#4A5568] leading-relaxed my-4 text-lg">
          {parseLinks(section)}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D3A5F]/80 via-[#1D3A5F]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container-custom">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 mb-4 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Tüm Yazılar
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-3xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-4 text-white/80">
              <span>{post.date}</span>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime} okuma
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-custom py-12">
        <article className="max-w-3xl mx-auto">
          {renderContent(post.content)}
          {post.faq && post.faq.length > 0 && <FaqSection items={post.faq} />}
        </article>
        
        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-2xl p-8 text-center text-white">
          <img src={APP_ICON} alt="AyakTakip ikonu" className="w-16 h-16 rounded-xl mx-auto mb-4 shadow-lg" />
          <h3 className="text-xl font-bold mb-2">Ayak Sağlığınızı Takip Edin</h3>
          <p className="text-white/80 mb-6">AyakTakip uygulaması ile günlük takibinizi kolayca yapın.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href={APP_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1D3A5F] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <Apple size={20} />
              App Store
            </a>
            <a 
              href={GOOGLE_PLAY_LINK}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
            >
              <GooglePlayIcon />
              Google Play
            </a>
          </div>
        </div>
        
        {/* Related Posts */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-[#1D3A5F] mb-6">Diğer Yazılar</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((relatedPost, idx) => (
              <Link 
                key={idx}
                to={`/blog/${relatedPost.slug}`}
                className="group flex gap-4 bg-[#F8FAFC] rounded-xl p-4 hover:bg-[#EFF6FF] transition-colors"
              >
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-[#1D3A5F] mb-1 line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                    {relatedPost.title}
                  </h4>
                  <span className="text-sm text-[#94A3B8]">{relatedPost.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// CTA Section
const CTASection = () => (
  <section className="cta-section section-spacing pt-32" data-testid="cta-section">
    <div className="container-custom text-center relative z-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1D3A5F] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Sağlığınızı Takip Etmeye Bugün Başlayın!
      </h2>
      <StoreButtons className="justify-center mb-6" />
      <p className="disclaimer-text max-w-md mx-auto">
        Tıbbi teşhis amacı taşımaz; kişisel takip ve kayıt desteği sunar. Sağlık uzmanınıza danışmayı unutmayın.
      </p>
    </div>
  </section>
);

// Blog Section for Homepage
const BlogSection = () => (
  <section className="section-spacing bg-white" data-testid="blog-section">
    <div className="container-custom">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2563EB]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Ayak Sağlığı Rehberi
          </h2>
          <p className="text-[#64748B] mt-2">Uzman bilgiler ve pratik öneriler</p>
        </div>
        <Link 
          to="/blog" 
          className="hidden sm:flex items-center gap-2 text-[#2563EB] font-medium hover:gap-3 transition-all"
        >
          Tümünü Gör
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Link 
            key={index}
            to={`/blog/${post.slug}`}
            className="group block bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#2563EB]/30 transition-all duration-300"
            data-testid={`blog-card-${index}`}
          >
            {/* Blog Image */}
            <div className="aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
              <img 
                src={post.image} 
                alt={post.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            
            {/* Blog Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 text-sm text-[#94A3B8] mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1D3A5F] mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[#64748B] text-sm line-clamp-2 mb-3">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[#2563EB] text-sm font-medium group-hover:gap-2 transition-all">
                Devamını Oku
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Mobile "See All" button */}
      <div className="mt-8 text-center sm:hidden">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[#2563EB] font-medium"
        >
          Tüm Yazıları Gör
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-[#1D3A5F] py-12" data-testid="footer">
    <div className="container-custom">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={APP_ICON} alt="AyakTakip uygulaması" className="w-10 h-10 rounded-xl" />
            <span className="text-lg font-bold text-white">AyakTakip</span>
          </div>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            Diyabetik ayak ve genel ayak sağlığını düzenli izlemek için geliştirilmiş mobil uygulama. 
            Tıbbi teşhis amacı taşımaz.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-[#94A3B8] hover:text-white transition-colors text-sm">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/blog" className="text-[#94A3B8] hover:text-white transition-colors text-sm">Blog</Link>
            </li>
            <li>
              <Link to="/iletisim" className="text-[#94A3B8] hover:text-white transition-colors text-sm">İletişim</Link>
            </li>
            <li>
              <a 
                href={PRIVACY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors text-sm"
                data-testid="privacy-link"
              >
                Gizlilik Politikası
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">İletişim</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+905456569747" className="hover:text-white transition-colors">0545 656 97 47</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@pedizone.com" className="hover:text-white transition-colors">info@pedizone.com</a>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <a href="https://pedizone.com/support/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Destek Merkezi</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2563EB]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#94A3B8]">
          © 2025 AyakTakip. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4">
          <a 
            href={APP_STORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-white transition-colors"
          >
            <Apple className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Contact Page
const ContactPage = () => (
  <div className="min-h-screen bg-white">
    {/* Hero */}
    <div className="bg-[#EFF6FF] py-16">
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center gap-2 text-[#2563EB] mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfa
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D3A5F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          İletişim
        </h1>
        <p className="text-[#64748B] mt-2 max-w-2xl">
          AyakTakip uygulaması hakkında sorularınız için bize ulaşın
        </p>
      </div>
    </div>

    <div className="container-custom py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left - About App & SEO Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img src={APP_ICON} alt="AyakTakip" className="w-16 h-16 rounded-2xl shadow-lg" />
            <div>
              <h2 className="text-2xl font-bold text-[#1D3A5F]">AyakTakip</h2>
              <p className="text-[#64748B]">Diyabetik Ayak Takip Uygulaması</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-[#4A5568] leading-relaxed mb-6">
              AyakTakip, diyabet hastalarının ve ayak sağlığına önem veren herkesin günlük ayak kontrolünü 
              kolaylaştırmak için geliştirilmiş bir mobil uygulamadır. Türkiye'de 7 milyonun üzerinde diyabet 
              hastası bulunmakta ve bu hastaların önemli bir kısmı diyabetik ayak komplikasyonları riski taşımaktadır.
            </p>

            <h3 className="text-xl font-bold text-[#1D3A5F] mb-4">Uygulamamızın Özellikleri</h3>
            <ul className="space-y-3 text-[#4A5568] mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>Fotoğraflı Takip:</strong> Ayaklarınızın fotoğraflarını çekerek zaman içindeki değişimleri karşılaştırın</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>Günlük Kontrol:</strong> Semptomlarınızı ve gözlemlerinizi düzenli olarak kaydedin</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>Diyabetik Mod:</strong> Diyabet hastalarına özel takip özellikleri ve hatırlatmalar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span><strong>PDF Rapor:</strong> Doktorunuzla paylaşabileceğiniz detaylı takip raporları oluşturun</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#1D3A5F] mb-4">Neden AyakTakip?</h3>
            <p className="text-[#4A5568] leading-relaxed mb-6">
              Diyabetik ayak komplikasyonları, erken teşhis ve düzenli takip ile büyük ölçüde önlenebilir. 
              AyakTakip, kullanıcı dostu arayüzü ve pratik özellikleriyle ayak sağlığınızı takip etmenizi 
              kolaylaştırır. Uygulamamız tıbbi teşhis yerine geçmez ancak sağlık profesyonellerinizle 
              paylaşabileceğiniz değerli veriler sunar.
            </p>

            <div className="bg-[#FEF3C7] border-l-4 border-[#F59E0B] p-4 rounded-r-lg">
              <p className="text-[#92400E] text-sm">
                <strong>Önemli:</strong> AyakTakip uygulaması bilgilendirme amaçlıdır ve tıbbi teşhis veya tedavi yerine geçmez. 
                Ayak sağlığınızla ilgili endişeleriniz için mutlaka bir sağlık profesyoneline danışın.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div>
          <div className="bg-[#F8FAFC] rounded-2xl p-8 mb-6">
            <h3 className="text-xl font-bold text-[#1D3A5F] mb-6">Bize Ulaşın</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <a 
                href="tel:+905456569747" 
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                  <Phone className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#64748B]">Telefon</p>
                  <p className="text-lg font-semibold text-[#1D3A5F]">0545 656 97 47</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@pedizone.com" 
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                  <Mail className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-[#64748B]">E-posta</p>
                  <p className="text-lg font-semibold text-[#1D3A5F]">info@pedizone.com</p>
                </div>
              </a>

              {/* Support Page */}
              <a 
                href="https://pedizone.com/support/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-xl flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#64748B]">Destek Merkezi</p>
                  <p className="text-lg font-semibold text-[#1D3A5F]">pedizone.com/support</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[#94A3B8]" />
              </a>
            </div>
          </div>

          {/* App Download CTA */}
          <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Uygulamayı İndirin</h3>
            <p className="text-white/80 mb-6">Ayak sağlığınızı takip etmeye hemen başlayın</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={APP_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1D3A5F] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Apple size={20} />
                App Store
              </a>
              <a 
                href={GOOGLE_PLAY_LINK}
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
              >
                <GooglePlayIcon />
                Google Play
              </a>
            </div>
          </div>

          {/* Business Info */}
          <div className="mt-6 p-6 border border-[#E2E8F0] rounded-xl">
            <h4 className="font-semibold text-[#1D3A5F] mb-3">Geliştirici</h4>
            <p className="text-[#64748B] text-sm leading-relaxed">
              AyakTakip, PediZone tarafından geliştirilmektedir. Ayak sağlığı alanında dijital çözümler 
              sunmayı hedefleyen ekibimiz, kullanıcı geri bildirimlerini dikkate alarak uygulamayı 
              sürekli geliştirmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

// Home Page
const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <DiyabetikAyakSection />
    <BlogSection />
    <ReviewsSection />
    <HowItWorksSection />
    <CTASection />
    <Footer />
  </>
);

// Main App Component with Router
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App" data-testid="ayaktakip-landing" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

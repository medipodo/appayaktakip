# AyakTakip Favicon Düzeltme PRD

## Orijinal Problem
- **Repo**: github.com/medipodo/appayaktakip (Private — erişim yok)
- **Site**: ayaktakip.com
- **Sorun**: Google arama sonuçlarında favicon bozuk/yanlış görünüyor
- **Kullanıcı isteği**: Favicon setini üret, index.html/manifest.json güncellemelerini hazırla, Search Console talimatı ver

## Kök Neden Analizi
- Site `image/webp` formatında tek bir favicon kullanıyor (`/images/app-icon-new.webp`)
- Google, favicon için `favicon.ico` veya minimum 48x48 PNG gerektirir
- WebP favicon desteği tarayıcılarda tutarsız
- Apple-touch-icon ve PWA ikonları eksik veya webp formatında

## Teknik Stack
- CRA (Create React App) + CRACO
- React frontend
- PWA manifest

## Çözüm (Tamamlandı - Şubat 2026)

### Üretilen Dosyalar (1024x1024 kaynaktan DOWNSCALE)
| Dosya | Boyut | Kullanım |
|---|---|---|
| favicon.ico | 16+32+48 multi-size | Tarayıcı + Google |
| favicon-16x16.png | 16x16 | Tab ikonu |
| favicon-32x32.png | 32x32 | Standart tab |
| favicon-48x48.png | 48x48 | Google arama |
| apple-touch-icon.png | 180x180 | iOS ana ekran |
| icon-192x192.png | 192x192 | PWA Android |
| icon-512x512.png | 512x512 | PWA splash |

### Kullanıcı Tarafından Uygulanması Gerekenler
1. Dosyaları `frontend/public/` klasörüne kopyala
2. `index.html`'den webp favicon link'lerini kaldır, PNG/ICO link'lerini ekle
3. `manifest.json`'u güncelle (webp → PNG ikonları)
4. Deploy et
5. Google Search Console'dan URL denetimi ile yeniden indeksleme iste

## Durum
- [x] Canlı site analizi
- [x] Kök neden tespiti
- [x] 1024x1024 kaynak ile yeniden ikon üretimi (downscale only)
- [x] Multi-size ICO oluşturma (16+32+48)
- [x] manifest.json hazırlama
- [x] index.html değişiklik rehberi
- [x] ZIP paketleme
- [x] Rapor sunumu
- [ ] Kullanıcı tarafından deploy ve doğrulama (beklemede)

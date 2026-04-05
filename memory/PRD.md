# AyakTakip Favicon Düzeltme PRD

## Orijinal Problem
- **Repo**: github.com/medipodo/appayaktakip
- **Site**: ayaktakip.com
- **Sorun**: Google arama sonuçlarında favicon bozuk/yanlış görünüyor
- **Kullanıcı isteği**: Favicon setini üret, index.html/manifest.json güncelle, Search Console talimatı ver

## Kök Neden
- Site `image/webp` formatında tek bir favicon kullanıyordu (`/images/app-icon-new.webp`)
- Google, favicon için `favicon.ico` veya minimum 48x48 PNG gerektirir
- WebP favicon desteği tarayıcılarda ve arama motorlarında tutarsız

## Teknik Stack
- CRA (Create React App) + CRACO, React, PWA manifest

## Çözüm (Tamamlandı - Şubat 2026)

### Üretilen Dosyalar (1024x1024 kaynaktan LANCZOS DOWNSCALE)
| Dosya | Boyut | Kullanım |
|---|---|---|
| favicon.ico | 16+32+48 multi-size | Tarayıcı + Google |
| favicon-16x16.png | 16x16 | Tab ikonu |
| favicon-32x32.png | 32x32 | Standart tab |
| favicon-48x48.png | 48x48 | Google arama |
| apple-touch-icon.png | 180x180 | iOS ana ekran |
| icon-192x192.png | 192x192 | PWA Android |
| icon-512x512.png | 512x512 | PWA splash |

### Değiştirilen Dosyalar
- `frontend/public/index.html` — webp favicon → ICO/PNG, Schema.org logo güncellendi
- `frontend/public/manifest.json` — webp → PNG ikonları (5 entry: any + maskable)
- 7 yeni ikon dosyası `frontend/public/` altına eklendi

## Durum
- [x] Canlı site analizi ve kök neden tespiti
- [x] 1024x1024 kaynak ile ikon üretimi (downscale only, sharpen for ≤48px)
- [x] Repo klonlama ve dosyaları yerleştirme
- [x] index.html güncelleme (webp → PNG/ICO)
- [x] manifest.json güncelleme
- [x] Schema.org logo güncelleme
- [ ] GitHub'a push ("Save to GitHub" ile kullanıcı tarafından)
- [ ] Deploy sonrası Google Search Console'dan yeniden indeksleme

## Deploy Sonrası Kontrol URL'leri
```
https://ayaktakip.com/favicon.ico
https://ayaktakip.com/favicon-48x48.png
https://ayaktakip.com/apple-touch-icon.png
https://ayaktakip.com/icon-192x192.png
https://ayaktakip.com/icon-512x512.png
https://ayaktakip.com/manifest.json
```

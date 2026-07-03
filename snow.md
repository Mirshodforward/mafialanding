# PixelSnow — Background sozlamalari

Bu hujjat `AyTi Xizmati` loyihasida qanday qilib **PixelSnow** komponenti butun sayt orqa foniga qo‘yilganini tavsiflaydi.

---

## Qayerda ishlatiladi

`PixelSnow` komponenti `src/App.jsx` ichidagi `Home` komponentida chaqiriladi va barcha sahifa bo‘limlari (Main, Pricing, Process, FAQ, Contact) ustida global background sifatida turadi.

**Fayl:** `src/App.jsx`

```jsx
<PixelSnow
  style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
  flakeSize={0.005}
  pixelResolution={500}
  speed={2.7}
  depthFade={20}
  farPlane={5}
  brightness={0.7}
  density={0.4}
  variant="round"
  direction={185}
  color="#38BDF8"
/>
```

---

## Background joylashuvi (CSS / inline style)

| Xususiyat | Qiymat | Ma’nosi |
|-----------|--------|---------|
| `position` | `fixed` | Scroll qilganda ham fon o‘rnida qoladi |
| `top` / `left` | `0` | Ekranning yuqori chap burchagidan boshlanadi |
| `width` | `100vw` | Butun viewport kengligi |
| `height` | `100vh` | Butun viewport balandligi |
| `zIndex` | `-1` | Barcha kontent ostida, lekin `body` fonidan yuqorida |

### Qatlamlar tartibi (z-index)

1. **`body`** — qorong‘u grid pattern (`#0a0f1a`, `src/index.css`)
2. **`PixelSnow`** — `z-index: -1` (grid ustida, kontent ostida)
3. **Kontent** — navbar `z-index: 1000`, bo‘limlar `z-index: 100` va hokazo

`Main.css` dagi `.main-section` da alohida background olib tashlangan (`/* background removed to show global bg */`), shuning uchun PixelSnow ko‘rinadi.

---

## Loyihadagi PixelSnow parametrlari

| Prop | Loyihadagi qiymat | Default (komponent) | Ta’siri |
|------|-------------------|---------------------|---------|
| `color` | `#38BDF8` | `#ffffff` | Qor parchalarining rangi (Sky Blue — sayt accent rangi) |
| `flakeSize` | `0.005` | `0.01` | Asosiy parcha o‘lchami (kichikroq = nozikroq qor) |
| `minFlakeSize` | *(default)* `1.25` | `1.25` | Uzoqdagi parchalar uchun minimal o‘lcham |
| `pixelResolution` | `500` | `200` | Pixel effekt zichligi (yuqori = mayda pixel grid) |
| `speed` | `2.7` | `1.25` | Qor tushish tezligi |
| `depthFade` | `20` | `8` | Chuqurlik bo‘yicha yo‘qolish (kattaroq = uzoqroq ko‘rinadi) |
| `farPlane` | `5` | `20` | Render masofasi chegarasi (kichik = yaqinroq qatlamlar) |
| `brightness` | `0.7` | `1` | Parchalar yorqinligi (biroz xira) |
| `gamma` | *(default)* `0.4545` | `0.4545` | Rang gamma tuzatishi |
| `density` | `0.4` | `0.3` | Qor zichligi (0–1, ko‘proq parcha) |
| `variant` | `"round"` | `"square"` | Parcha shakli: `square`, `round`, `snowflake` |
| `direction` | `185` | `125` | Shamol yo‘nalishi (gradus, ~janubga) |

### Variant qiymatlari (shader ichida)

- `"square"` → `uVariant = 0.0` — kvadrat parchalar
- `"round"` → `uVariant = 1.0` — dumaloq parchalar *(loyihada tanlangan)*
- `"snowflake"` → `uVariant = 2.0` — qor parchasi shakli

---

## Komponent CSS (`src/components/PixelSnow.css`)

```css
.pixel-snow-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  contain: layout style paint;
}

.pixel-snow-container canvas {
  display: block;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}
```

Inline `style` prop `fixed` + `100vw/100vh` beradi; ichki container va canvas to‘liq maydonni egallaydi.

---

## Texnik implementatsiya

### Kutubxona

- **Three.js** — WebGL renderer, orthographic camera, custom shader material

### Renderer sozlamalari

```js
new WebGLRenderer({
  antialias: false,
  alpha: true,              // shaffof fon
  premultipliedAlpha: false,
  powerPreference: 'high-performance',
  stencil: false,
  depth: false
});
renderer.setClearColor(0x000000, 0);  // to‘liq shaffof clear
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

### Shader

- **Vertex shader** — oddiy fullscreen quad
- **Fragment shader** — 3D ray-marching orqali pixelated qor effekti
  - Hash-based random parcha joylashuvi
  - Shamol animatsiyasi (`uDirection`, `uSpeed`)
  - Chuqurlik fade (`uDepthFade`, `uFarPlane`)
  - Pixel resolution (`uPixelResolution`) — ekranni katta “pixel” bloklarga bo‘ladi

### Performance optimizatsiyalari

- **IntersectionObserver** — element ko‘rinmasa render qilinmaydi
- **Debounced resize** — oyna o‘lchami o‘zgarganda 100ms kechikish bilan yangilanadi
- **Pixel ratio cap** — maksimum `2` (retina ekranlarda ortiqcha yuk kamayadi)
- **CSS `contain`** — layout/paint izolyatsiyasi

---

## Body background (PixelSnow bilan birga)

`src/index.css`:

```css
body {
  background-color: #0a0f1a;
  --grid-color: rgba(56, 189, 248, 0.08);
  background-image: /* 60px grid pattern */;
  background-size: 60px 60px;
  background-attachment: fixed;
}
```

Natija: qorong‘u fon + yengil ko‘k grid + ustida `#38BDF8` rangli dumaloq pixel qor.

---

## Sozlash misollari

### Ko‘proq qor

```jsx
<PixelSnow
  density={0.6}
  brightness={0.9}
  // ... qolgan props
/>
```

### Qor parchasi shakli

```jsx
<PixelSnow variant="snowflake" flakeSize={0.008} />
```

### Sekinroq, yumshoq effekt

```jsx
<PixelSnow speed={1.2} depthFade={12} brightness={0.5} />
```

### Oq qor (default uslub)

```jsx
<PixelSnow color="#ffffff" variant="square" pixelResolution={200} />
```

---

## Bog‘liq fayllar

| Fayl | Vazifasi |
|------|----------|
| `src/components/PixelSnow.jsx` | Asosiy komponent va shader |
| `src/components/PixelSnow.css` | Container va canvas stillari |
| `src/App.jsx` | Background parametrlari va joylashuv |
| `src/index.css` | Body grid background |
| `src/components/Main.css` | Hero bo‘limida local background o‘chirilgan |

---

## Qisqa xulosa

Loyihada PixelSnow **butun sayt uchun fixed background** sifatida ishlatilgan: ko‘k (`#38BDF8`) dumaloq pixel qor, tez tushish (`speed: 2.7`), yuqori pixel resolution (`500`), o‘rtacha zichlik (`density: 0.4`) va janubga yo‘nalgan shamol (`direction: 185`). `z-index: -1` tufayli barcha UI elementlari ustida, `body` grid fonidan esa yuqorida turadi.

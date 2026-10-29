const photo = (id, width = 1400, height = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80&crop=faces,entropy`

export const occasions = [
  { id: "office", label: "Office" },
  { id: "date", label: "Date night" },
  { id: "party", label: "Party" },
  { id: "weekend", label: "Weekend" },
  { id: "wedding", label: "Wedding guest" },
  { id: "travel", label: "Travel" },
  { id: "festive", label: "Festive" },
]

export const styles = [
  { id: "minimal", label: "Minimal" },
  { id: "classic", label: "Classic" },
  { id: "bold", label: "Bold" },
  { id: "romantic", label: "Romantic" },
  { id: "edgy", label: "Edgy" },
  { id: "bohemian", label: "Bohemian" },
]

export const colors = [
  { id: "black", label: "Black", hex: "#1a1a1a" },
  { id: "ivory", label: "Ivory", hex: "#f3eee6" },
  { id: "navy", label: "Navy", hex: "#1e2a44" },
  { id: "burgundy", label: "Burgundy", hex: "#6d3038" },
  { id: "earth", label: "Earth", hex: "#a68456" },
  { id: "pastel", label: "Pastel", hex: "#e7cfc6" },
  { id: "monochrome", label: "Monochrome", hex: "#8a8178" },
  { id: "jewel", label: "Jewel", hex: "#1f6a5b" },
]

export const clothingPrefs = [
  { id: "dresses", label: "Dresses" },
  { id: "tailoring", label: "Tailoring" },
  { id: "street", label: "Street layers" },
  { id: "traditional", label: "Traditional" },
  { id: "knits", label: "Knits" },
  { id: "separates", label: "Separates" },
]

export const categories = [
  {
    id: "casual",
    name: "Casual",
    line: "Ease, cut with intention.",
    image: photo("photo-1524504388940-b1c1722653e1"),
  },
  {
    id: "formal",
    name: "Formal",
    line: "Tailoring for rooms that notice.",
    image: photo("photo-1507679799987-c73779587ccf"),
  },
  {
    id: "party",
    name: "Party",
    line: "After dark, with a pulse.",
    image: photo("photo-1566174053879-31528523f8ae"),
  },
  {
    id: "streetwear",
    name: "Streetwear",
    line: "The city, layered properly.",
    image: photo("photo-1529139574466-a303027c1d8b"),
  },
  {
    id: "traditional",
    name: "Traditional",
    line: "Heritage cloth, modern poise.",
    image: photo("photo-1610030469983-98e550d6193c"),
  },
  {
    id: "seasonal",
    name: "Seasonal",
    line: "Dress the weather, beautifully.",
    image: photo("photo-1496747611176-843222e1e57c"),
  },
]

export const seasons = [
  {
    id: "spring",
    name: "Spring",
    line: "Light layers and garden color.",
    image: photo("photo-1496747611176-843222e1e57c", 1600, 2000),
  },
  {
    id: "summer",
    name: "Summer",
    line: "Heat, linen, and clear color.",
    image: photo("photo-1515886657613-9f3515b0c78f", 1600, 2000),
  },
  {
    id: "autumn",
    name: "Autumn",
    line: "Camel, wine, and softer light.",
    image: photo("photo-1509631179647-0177331693ae", 1600, 2000),
  },
  {
    id: "winter",
    name: "Winter",
    line: "Coats, ink tailoring, evening satin.",
    image: photo("photo-1485968579580-b6d095142e6e", 1600, 2000),
  },
]

export const trends = [
  {
    id: "sculpted",
    kicker: "Trend 01",
    title: "Sculpted shoulders",
    note: "Structure is the ornament.",
    outfitId: "ink-suit",
    image: photo("photo-1507679799987-c73779587ccf", 1200, 1500),
  },
  {
    id: "liquid",
    kicker: "Trend 02",
    title: "Liquid evening",
    note: "Satin that reads as light.",
    outfitId: "midnight-satin",
    image: photo("photo-1595777457583-95e059d581b8", 1200, 1500),
  },
  {
    id: "silk",
    kicker: "Trend 03",
    title: "Heritage silk",
    note: "Ceremony, worn with ease.",
    outfitId: "silk-saree",
    image: photo("photo-1610030469983-98e550d6193c", 1200, 1500),
  },
  {
    id: "layers",
    kicker: "Trend 04",
    title: "City layers",
    note: "Outerwear does the talking.",
    outfitId: "city-layer",
    image: photo("photo-1529139574466-a303027c1d8b", 1200, 1500),
  },
]

export const heroImage = photo("photo-1539109136881-3be0616acf4b", 1800, 2200)
export const quoteImage = photo("photo-1490481651871-ab68de25d43d", 2000, 1300)
export const ctaImage = photo("photo-1469334031218-e382a71b716b", 2000, 1300)
export const atelierImage = photo("photo-1445205170230-053b83016050", 2000, 1200)

const look = (outfit) => outfit

export const outfits = [
  look({
    id: "linen-hour",
    title: "The Linen Hour",
    category: "casual",
    season: "summer",
    occasions: ["weekend", "travel"],
    styles: ["minimal", "bohemian"],
    colors: ["ivory", "earth", "pastel"],
    clothing: ["separates"],
    image: photo("photo-1524504388940-b1c1722653e1"),
    description:
      "Sun-washed separates with an easy drape — considered enough for lunch, soft enough for a late train.",
    tip: "Keep jewelry to a single chain so the linen can crease honestly.",
    items: [
      { name: "Ivory linen shirt", note: "Relaxed shoulder, covered placket" },
      { name: "Stone wide-leg trouser", note: "High rise, full length, soft crease" },
      { name: "Tan leather sandal", note: "Square toe, slim strap" },
    ],
    accessories: ["Fine gold chain", "Woven market tote", "Tortoiseshell sunglasses"],
    palette: [
      { name: "Ivory", hex: "#f4efe6" },
      { name: "Stone", hex: "#cbbba8" },
      { name: "Tan", hex: "#a68456" },
    ],
    suggestions: [
      "Roll the sleeve once so the cuff sits on the wrist bone.",
      "If the evening cools, knot a sand shirt over the shoulders.",
      "Choose matte leather. Skip shine.",
    ],
  }),
  look({
    id: "soft-architecture",
    title: "Soft Architecture",
    category: "casual",
    season: "autumn",
    occasions: ["weekend", "office"],
    styles: ["minimal", "classic"],
    colors: ["ivory", "monochrome"],
    clothing: ["knits"],
    image: photo("photo-1434389677669-e08b4cac3105"),
    description:
      "A cream knit with the discipline of tailoring. Quiet volume, clean lines, nothing extra.",
    tip: "Tuck only the front of the knit so the shape stays long and relaxed.",
    items: [
      { name: "Ivory merino polo knit", note: "Fine gauge, slight shoulder" },
      { name: "Ivory straight trouser", note: "Pressed, ankle length" },
      { name: "Cream leather loafer", note: "Low heel, almond toe" },
    ],
    accessories: ["Thin gold hoop", "Structured shoulder bag", "Cashmere scarf in oat"],
    palette: [
      { name: "Ivory", hex: "#f7f3ec" },
      { name: "Oat", hex: "#e4d8c8" },
      { name: "Ink", hex: "#1c1a17" },
    ],
    suggestions: [
      "One texture only: knit, trouser, and shoe in the same family.",
      "Add the scarf inside the neckline, not over the shoulder.",
      "For the office, swap the loafer for a pointed pump.",
    ],
  }),
  look({
    id: "indigo-day",
    title: "Indigo Day",
    category: "casual",
    season: "spring",
    occasions: ["weekend", "travel"],
    styles: ["classic", "edgy"],
    colors: ["navy", "monochrome"],
    clothing: ["separates"],
    image: photo("photo-1529626455594-4ff0802cfb7e"),
    description:
      "Deep denim, a sharp white layer, and just enough edge to feel like a city weekend.",
    tip: "Cuff the denim once so the hem breaks above the shoe.",
    items: [
      { name: "White cotton shirt", note: "Crisp, slightly oversized" },
      { name: "Indigo straight jean", note: "Dark wash, no whiskering" },
      { name: "Black leather sneaker", note: "Minimal, clean sole" },
    ],
    accessories: ["Silver ear cuff", "Compact crossbody", "Navy cap"],
    palette: [
      { name: "Indigo", hex: "#1d2b4f" },
      { name: "White", hex: "#f6f4f1" },
      { name: "Black", hex: "#141414" },
    ],
    suggestions: [
      "Leave the shirt untucked with the front buttons open over a fine tank.",
      "Keep the wash dark so it still reads dressed.",
      "One silver piece is enough metal.",
    ],
  }),
  look({
    id: "ink-suit",
    title: "The Ink Suit",
    category: "formal",
    season: "winter",
    occasions: ["office", "wedding"],
    styles: ["classic", "minimal"],
    colors: ["black", "navy", "monochrome"],
    clothing: ["tailoring"],
    image: photo("photo-1507679799987-c73779587ccf"),
    description:
      "A dark suit with a sharper shoulder and a quieter tie. Authority, without costume.",
    tip: "Show a centimeter of cuff. It is the whole trick.",
    items: [
      { name: "Ink wool suit", note: "Single breasted, soft shoulder" },
      { name: "Ivory poplin shirt", note: "Spread collar, no chest pocket" },
      { name: "Black calf oxford", note: "Polished, not patent" },
    ],
    accessories: ["Thin black belt", "Steel watch", "White pocket square"],
    palette: [
      { name: "Ink", hex: "#14161c" },
      { name: "Ivory", hex: "#f4f0e8" },
      { name: "Steel", hex: "#b7b1a8" },
    ],
    suggestions: [
      "Skip the pattern. Let the cloth be the statement.",
      "For a wedding, open the collar and pocket the tie.",
      "Keep the trouser hem kissing the shoe.",
    ],
  }),
  look({
    id: "champagne-meeting",
    title: "Champagne Meeting",
    category: "formal",
    season: "autumn",
    occasions: ["office", "date", "wedding"],
    styles: ["classic", "romantic"],
    colors: ["ivory", "earth"],
    clothing: ["tailoring"],
    image: photo("photo-1617137968427-85924c800a22"),
    description:
      "A pale suit the color of champagne. Warm, precise, and unexpectedly soft in a formal room.",
    tip: "Pair it with brown, never black. Black turns the suit cold.",
    items: [
      { name: "Champagne wool suit", note: "Unstructured, two-button" },
      { name: "Cream silk shirt", note: "Open collar" },
      { name: "Brown suede loafer", note: "Low vamp" },
    ],
    accessories: ["Cognac belt", "Gold signet ring", "Cream silk square"],
    palette: [
      { name: "Champagne", hex: "#e6d3b4" },
      { name: "Cream", hex: "#f7f1e6" },
      { name: "Cognac", hex: "#8a5a32" },
    ],
    suggestions: [
      "Leave the jacket open when you sit.",
      "A date-night edit: lose the belt and add a finer shoe.",
      "Keep the shirt tone a half-step lighter than the suit.",
    ],
  }),
  look({
    id: "the-column",
    title: "The Column",
    category: "formal",
    season: "winter",
    occasions: ["office", "date", "wedding"],
    styles: ["minimal", "classic"],
    colors: ["black", "monochrome"],
    clothing: ["dresses"],
    image: photo("photo-1475180098004-ca77a66827be"),
    description:
      "A long black column that behaves like tailoring. Severe in the best way, then softened at the ear.",
    tip: "A single sculptural earring replaces a necklace.",
    items: [
      { name: "Black column dress", note: "Matte crepe, ankle length" },
      { name: "Black pointed pump", note: "Mid heel" },
      { name: "Tailored coat", note: "Same black, worn open" },
    ],
    accessories: ["Sculptural silver earring", "Mini black bag", "Sheer black sock"],
    palette: [
      { name: "Black", hex: "#121212" },
      { name: "Graphite", hex: "#3a3836" },
      { name: "Silver", hex: "#d5d2cc" },
    ],
    suggestions: [
      "Let the hem graze the ankle bone.",
      "If the room is creative, add the coat over the shoulders only.",
      "Hair sleek. Makeup quiet except the mouth.",
    ],
  }),
  look({
    id: "midnight-satin",
    title: "Midnight Satin",
    category: "party",
    season: "winter",
    occasions: ["party", "date"],
    styles: ["romantic", "bold"],
    colors: ["black", "jewel"],
    clothing: ["dresses"],
    image: photo("photo-1595777457583-95e059d581b8"),
    description:
      "Black satin with a liquid hem. It catches the room without asking for sequins.",
    tip: "Contrast the shine with matte skin and a low, clean shoe.",
    items: [
      { name: "Black satin slip dress", note: "Bias cut, midi" },
      { name: "Black strappy sandal", note: "Thin heel" },
      { name: "Tailored evening jacket", note: "Optional, ink wool" },
    ],
    accessories: ["Crystal drop earring", "Black envelope clutch", "Deep berry lip"],
    palette: [
      { name: "Midnight", hex: "#0e0e10" },
      { name: "Berry", hex: "#6d3038" },
      { name: "Crystal", hex: "#efeae3" },
    ],
    suggestions: [
      "A jacket makes the same dress work from dinner to a louder room.",
      "Keep hair off the neck so the satin line stays visible.",
      "One jewel tone in the earring is the only color you need.",
    ],
  }),
  look({
    id: "ruby-column",
    title: "Ruby Column",
    category: "party",
    season: "autumn",
    occasions: ["party", "festive", "wedding"],
    styles: ["bold", "classic"],
    colors: ["burgundy", "jewel"],
    clothing: ["dresses"],
    image: photo("photo-1566174053879-31528523f8ae"),
    description:
      "A ruby dress with the posture of a column. Festive, graphic, impossible to misread.",
    tip: "Gold metal, not silver. The red asks for warmth.",
    items: [
      { name: "Ruby crepe gown", note: "Sleeveless, column silhouette" },
      { name: "Gold strappy heel", note: "Fine, barely there" },
      { name: "Soft black wrap", note: "For the door and the car" },
    ],
    accessories: ["Gold cuff", "Small gold box bag", "Warm bronze makeup"],
    palette: [
      { name: "Ruby", hex: "#8d2433" },
      { name: "Gold", hex: "#c6a15a" },
      { name: "Black", hex: "#161616" },
    ],
    suggestions: [
      "Skip prints nearby. Let the color be the print.",
      "A wedding guest edit: add the wrap and a lower heel.",
      "Part the hair simply. The dress is already the event.",
    ],
  }),
  look({
    id: "rose-slip",
    title: "The Rose Slip",
    category: "party",
    season: "spring",
    occasions: ["date", "party", "wedding"],
    styles: ["romantic", "minimal"],
    colors: ["pastel", "ivory"],
    clothing: ["dresses"],
    image: photo("photo-1572804013309-59a88b7e92f1"),
    description:
      "A rose-toned slip with almost nothing on it. Romantic, but cut clean so it never turns sweet.",
    tip: "Bare arms, one bracelet, and a shoe with a little shine.",
    items: [
      { name: "Rose satin slip", note: "Bias, tea length" },
      { name: "Champagne sandal", note: "Kitten or mid heel" },
      { name: "Ivory wrap", note: "Feather-light, for outdoors" },
    ],
    accessories: ["Pearl stud", "Slim gold bracelet", "Blush mini bag"],
    palette: [
      { name: "Rose", hex: "#e7b7b0" },
      { name: "Ivory", hex: "#f6f1ea" },
      { name: "Champagne", hex: "#e4d2b5" },
    ],
    suggestions: [
      "Keep makeup skin-first. A stained lip is enough.",
      "If the invitation is formal, add the pearl and lose the bracelet.",
      "Walk in it before the night. Bias cut needs a stride.",
    ],
  }),
  look({
    id: "city-layer",
    title: "Crosswalk Coat",
    category: "streetwear",
    season: "summer",
    occasions: ["weekend", "travel"],
    styles: ["edgy", "bold"],
    colors: ["black", "monochrome"],
    clothing: ["street"],
    image: photo("photo-1529139574466-a303027c1d8b"),
    description:
      "A long dark layer over a sharp base. Street proportion, atelier restraint.",
    tip: "The coat should be the longest line. Everything else stays narrow.",
    items: [
      { name: "Black oversized coat", note: "Light wool, strong shoulder" },
      { name: "Black fine tank", note: "Close to the body" },
      { name: "Straight black trouser", note: "Cropped above the shoe" },
    ],
    accessories: ["Rectangular sunglasses", "Chunky silver ear cuff", "Structured black tote"],
    palette: [
      { name: "Black", hex: "#111111" },
      { name: "Ash", hex: "#8e8983" },
      { name: "Silver", hex: "#d9d4cc" },
    ],
    suggestions: [
      "Button nothing. The open line is the style.",
      "A white sneaker wakes the black up for daytime.",
      "Travel edit: swap the tote for a soft duffel in the same black.",
    ],
  }),
  look({
    id: "raw-denim",
    title: "Raw Denim",
    category: "streetwear",
    season: "spring",
    occasions: ["weekend"],
    styles: ["edgy", "classic"],
    colors: ["navy", "earth"],
    clothing: ["street"],
    image: photo("photo-1552374196-1ab2a1c593e8"),
    description:
      "A denim jacket with the stiffness still in it, grounded by earth tones and a clean tee.",
    tip: "Leave the jacket a size easy. Stiff denim needs air.",
    items: [
      { name: "Raw indigo jacket", note: "Boxy, buttoned cuff" },
      { name: "Ecru heavy tee", note: "Slightly short" },
      { name: "Earth trouser", note: "Relaxed, tapered" },
    ],
    accessories: ["Leather belt", "Canvas sneaker", "Signet ring"],
    palette: [
      { name: "Indigo", hex: "#243454" },
      { name: "Ecru", hex: "#efe6d8" },
      { name: "Earth", hex: "#8d6a45" },
    ],
    suggestions: [
      "Sleeve rolled twice, no more.",
      "Match the belt to the shoe, not the jacket.",
      "Skip logos. The cloth is the graphic.",
    ],
  }),
  look({
    id: "night-runner",
    title: "Night Runner",
    category: "streetwear",
    season: "winter",
    occasions: ["party", "weekend"],
    styles: ["edgy", "bold"],
    colors: ["black", "monochrome"],
    clothing: ["street"],
    image: photo("photo-1503342217505-b0a15ec3261c"),
    description:
      "All black, technical and sharp, for a night that starts on the street and ends indoors.",
    tip: "Change only the shoe if you want the look to feel dressed.",
    items: [
      { name: "Black technical tee", note: "Matte, precise neckline" },
      { name: "Black tapered pant", note: "Hidden drawcord" },
      { name: "Black leather sneaker", note: "Or a sleek boot" },
    ],
    accessories: ["Silver chain", "Black cap", "Mini sling bag"],
    palette: [
      { name: "Black", hex: "#0f0f0f" },
      { name: "Charcoal", hex: "#2c2c2c" },
      { name: "Silver", hex: "#c8c8c8" },
    ],
    suggestions: [
      "Monochrome works when the fabrics differ: matte tee, slight sheen pant.",
      "Cap on for the street, off at the table.",
      "One chain. Not three.",
    ],
  }),
  look({
    id: "silk-saree",
    title: "Temple Silk",
    category: "traditional",
    season: "autumn",
    occasions: ["festive", "wedding", "party"],
    styles: ["romantic", "classic"],
    colors: ["burgundy", "jewel", "ivory"],
    clothing: ["traditional"],
    image: photo("photo-1610030469983-98e550d6193c"),
    description:
      "A silk saree in deep wine, draped clean and finished with gold that stays delicate.",
    tip: "Let the pallu fall in one line. Fussy pleats undo the modern feeling.",
    items: [
      { name: "Wine silk saree", note: "Fluid drape, fine zari border" },
      { name: "Ivory blouse", note: "Elbow sleeve, modest neck" },
      { name: "Gold heel", note: "Closed or barely open" },
    ],
    accessories: ["Small gold jhumka", "Slim gold bangle stack", "Potli in matching wine"],
    palette: [
      { name: "Wine", hex: "#6e2433" },
      { name: "Ivory", hex: "#f6f0e6" },
      { name: "Gold", hex: "#c6a15a" },
    ],
    suggestions: [
      "Center part, low bun, and a clean hairline.",
      "Choose either a necklace or earrings with presence, not both.",
      "A modern blouse in ivory keeps the saree from feeling costume.",
    ],
  }),
  look({
    id: "marigold-hour",
    title: "Marigold Hour",
    category: "traditional",
    season: "autumn",
    occasions: ["festive", "wedding"],
    styles: ["bold", "romantic"],
    colors: ["earth", "jewel", "burgundy"],
    clothing: ["traditional"],
    image: photo("photo-1705921266336-50fa88412176?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"),
    description:
      "Marigold and jewel tones for a celebration. Rich cloth, a steady silhouette, joy without noise.",
    tip: "Balance a bright drape with a deeper blouse so the color has a home.",
    items: [
      { name: "Marigold lehenga or saree", note: "Silk, clean flare" },
      { name: "Deep jewel blouse", note: "Structured, short sleeve" },
      { name: "Gold embroidered jutti or heel", note: "Low, walkable" },
    ],
    accessories: ["Polki studs", "Waist belt with a light hand", "Fresh flower in the hair, optional"],
    palette: [
      { name: "Marigold", hex: "#e39b2b" },
      { name: "Jewel", hex: "#1f6a5b" },
      { name: "Wine", hex: "#7a3040" },
    ],
    suggestions: [
      "If the embroidery is dense, keep the neck bare.",
      "A belt defines the waist. Do not add a heavy necklace too.",
      "Test the walk. Celebration clothes still have to cross a room.",
    ],
  }),
  look({
    id: "night-border",
    title: "Night Border",
    category: "traditional",
    season: "winter",
    occasions: ["festive", "date", "party"],
    styles: ["classic", "bold"],
    colors: ["black", "jewel"],
    clothing: ["traditional"],
    image: photo("photo-1617627143750-d86bc21e42bb"),
    description:
      "Black traditional cloth edged in metal. Evening, ceremonial, and sharply modern.",
    tip: "The border is the jewelry. Add very little else.",
    items: [
      { name: "Black saree with a gold border", note: "Crisp drape" },
      { name: "Black blouse", note: "Boat neck" },
      { name: "Black and gold heel", note: "Slim" },
    ],
    accessories: ["Single gold cuff", "Kohl and a brown-rose lip", "Compact black clutch"],
    palette: [
      { name: "Black", hex: "#12100e" },
      { name: "Gold", hex: "#c6a15a" },
      { name: "Jewel", hex: "#0f4f48" },
    ],
    suggestions: [
      "Drape it close to the body. Volume would soften the graphic line.",
      "A date-night version loses the cuff and keeps only studs.",
      "Fragrance, not extra sparkle.",
    ],
  }),
  look({
    id: "citrus-set",
    title: "Citrus Tailoring",
    category: "seasonal",
    season: "summer",
    occasions: ["weekend", "date", "travel"],
    styles: ["bold", "minimal"],
    colors: ["pastel", "ivory"],
    clothing: ["separates"],
    image: photo("photo-1515886657613-9f3515b0c78f"),
    description:
      "A clear citrus set against warm skin and white light. Summer, edited down to two pieces.",
    tip: "Do not add another color. White or tan is the only companion.",
    items: [
      { name: "Citrus cropped jacket or shirt", note: "Sharp, short" },
      { name: "Matching trouser", note: "High waist, fluid" },
      { name: "White sandal", note: "Clean strap" },
    ],
    accessories: ["White structured bag", "Gold hoop", "Barely-there anklet, optional"],
    palette: [
      { name: "Citrus", hex: "#e2c04a" },
      { name: "White", hex: "#f7f4ee" },
      { name: "Tan", hex: "#c4a27a" },
    ],
    suggestions: [
      "The set is the outfit. A printed scarf will argue with it.",
      "For travel, pack a white tee to split the two pieces apart.",
      "Slick hair back so the color frames the face.",
    ],
  }),
  look({
    id: "camel-weather",
    title: "Camel Weather",
    category: "seasonal",
    season: "winter",
    occasions: ["office", "weekend", "travel"],
    styles: ["classic", "minimal"],
    colors: ["earth", "ivory", "monochrome"],
    clothing: ["tailoring", "knits"],
    image: photo("photo-1485968579580-b6d095142e6e"),
    description:
      "A camel coat over ivory knit. The cold-weather uniform that always looks decided.",
    tip: "Belt the coat, or leave it open. Never half-button it.",
    items: [
      { name: "Camel wool coat", note: "Knee length, notch lapel" },
      { name: "Ivory turtleneck", note: "Fine, close at the neck" },
      { name: "Tailored trouser in stone", note: "Full length" },
    ],
    accessories: ["Leather gloves", "Structured tan bag", "Gold stud"],
    palette: [
      { name: "Camel", hex: "#c4a574" },
      { name: "Ivory", hex: "#f3eee6" },
      { name: "Stone", hex: "#a89888" },
    ],
    suggestions: [
      "The turtleneck should disappear under the coat collar.",
      "Brown boots lengthen the line in real winter.",
      "Office days: swap boots for a pointed pump.",
    ],
  }),
  look({
    id: "garden-guest",
    title: "Garden Guest",
    category: "seasonal",
    season: "spring",
    occasions: ["date", "wedding", "weekend"],
    styles: ["romantic", "bohemian"],
    colors: ["pastel", "ivory"],
    clothing: ["dresses"],
    image: photo("photo-1496747611176-843222e1e57c"),
    description:
      "A pale dress for open air. Soft, but with a defined waist so it still has a point of view.",
    tip: "A flat or a low heel. Gardens and columns do not mix.",
    items: [
      { name: "Ivory floral dress", note: "Soft shoulder, defined waist" },
      { name: "Nude or ivory sandal", note: "Low block or flat" },
      { name: "Light cropped cardigan", note: "For shade and evening" },
    ],
    accessories: ["Straw or woven bag", "Delicate pendant", "A ribbon in the hair, loosely"],
    palette: [
      { name: "Ivory", hex: "#f7f3ec" },
      { name: "Blush", hex: "#e7cfc6" },
      { name: "Leaf", hex: "#7e8f72" },
    ],
    suggestions: [
      "If the print is small, you can add the cardigan. If it is large, wear the dress alone.",
      "Wedding guest: add the pendant and a slightly dressier sandal.",
      "Let the hem move. Do not over-style the hair.",
    ],
  }),
]

export function labelOf(list, id) {
  return list.find((item) => item.id === id)?.label ?? ""
}

export function getOutfit(id) {
  return outfits.find((outfit) => outfit.id === id)
}

export function getCategory(id) {
  return categories.find((category) => category.id === id)
}

export function getSeason(id) {
  return seasons.find((season) => season.id === id)
}

export function outfitsByCategory(id) {
  return outfits.filter((outfit) => outfit.category === id)
}

export function outfitsBySeason(id) {
  return outfits.filter((outfit) => outfit.season === id)
}

export function relatedOutfits(outfit, count = 3) {
  const sameCategory = outfits.filter(
    (item) => item.id !== outfit.id && item.category === outfit.category,
  )
  const sameSeason = outfits.filter(
    (item) =>
      item.id !== outfit.id &&
      item.season === outfit.season &&
      !sameCategory.some((pick) => pick.id === item.id),
  )
  return [...sameCategory, ...sameSeason].slice(0, count)
}

function scoreOutfit(outfit, prefs) {
  let score = 0
  if (outfit.occasions.includes(prefs.occasion)) score += 4
  if (outfit.styles.includes(prefs.style)) score += 3
  if (outfit.colors.includes(prefs.color)) score += 3
  if (prefs.clothing.some((item) => outfit.clothing.includes(item))) score += 4
  return score
}

export function recommend(prefs, offset = 0) {
  const ranked = outfits
    .map((outfit) => ({ outfit, score: scoreOutfit(outfit, prefs) }))
    .sort((a, b) => b.score - a.score || a.outfit.title.localeCompare(b.outfit.title))

  const topScore = ranked[0]?.score ?? 0
  const close = ranked.filter((item) => item.score >= Math.max(3, topScore - 3))
  const source = close.length >= 3 ? close : ranked
  const start = source.length ? offset % source.length : 0
  const looks = []
  const seen = new Set()

  for (let index = 0; index < source.length && looks.length < 3; index += 1) {
    const item = source[(start + index) % source.length]
    if (seen.has(item.outfit.id)) continue
    seen.add(item.outfit.id)
    looks.push(item)
  }

  return {
    looks,
    tailored: topScore >= 8,
    topScore,
  }
}

export function matchLabel(score) {
  if (score >= 10) return "Tailored match"
  if (score >= 6) return "Close match"
  return "Inspired edit"
}

export function validateBrief(form) {
  const errors = {}
  if (!form.occasion) errors.occasion = "Choose the occasion you are dressing for."
  if (!form.style) errors.style = "Choose a style direction."
  if (!form.color) errors.color = "Choose a color story."
  if (!form.clothing?.length) errors.clothing = "Choose at least one clothing preference."
  return errors
}

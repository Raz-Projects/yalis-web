export type ProductCategory = "chairs" | "tables" | "side-tables" | "shelving" | "kitchen" | "lighting"
export type Collection = "5mm" | "3mm"

export type Product = {
  slug: string
  nameHe: string
  nameEn: string
  category: ProductCategory
  categoryHe: string
  collection: Collection
  taglineHe: string
  descriptionHe: string
  material: string
  dimensions: {
    width?: number
    depth?: number
    height?: number
    note?: string
  }
  images: string[]
  priceFrom: number
  customizable: boolean
}

export const products: Product[] = [

  // ══════════════════════════════════════
  // COLLECTION 5mm
  // ══════════════════════════════════════

  {
    slug: "chair-steel-black-wood",
    nameHe: "כיסא מנירוסטה משענת ומושב מעץ שחור",
    nameEn: "Steel Chair — Black Wood Seat & Back",
    category: "chairs",
    categoryHe: "כיסאות",
    collection: "5mm",
    taglineHe: "פלדה וחום — ניגוד מושלם",
    descriptionHe:
      "כיסא מנירוסטה 5 מ\"מ עם משענת ומושב עץ שחור. שילוב בין הנוקשות הקרה של הנירוסטה לחמימות העץ הכהה. עיצוב תעשייתי מינימליסט שמתאים לכל סביבה — בית, משרד, חנות.",
    material: "נירוסטה 5 מ\"מ + עץ שחור",
    dimensions: { width: 48, depth: 50, height: 85 },
    images: ["/products/p20.jpeg"],
    priceFrom: 6800,
    customizable: true,
  },

  {
    slug: "chair-wood-steel-seats",
    nameHe: "כיסא עץ עם מושבים מנירוסטה",
    nameEn: "Wood Chair — Steel Seat & Back",
    category: "chairs",
    categoryHe: "כיסאות",
    collection: "5mm",
    taglineHe: "עץ חי, פלדה מדויקת",
    descriptionHe:
      "כיסא בעל מסגרת עץ עם מושב ומשענת מנירוסטה 5 מ\"מ. הנירוסטה מחוברת לעץ בייחסי מתח ומדויקים. מוצר ייחודי שמדגיש את הניגוד בין חומרים.",
    material: "עץ מלא + נירוסטה 5 מ\"מ",
    dimensions: { width: 52, depth: 54, height: 88 },
    images: ["/products/p23.jpeg", "/products/p24.jpeg"],
    priceFrom: 7200,
    customizable: true,
  },

  {
    slug: "ottoman-steel",
    nameHe: "הדום נירוסטה",
    nameEn: "Steel Ottoman",
    category: "chairs",
    categoryHe: "כיסאות",
    collection: "5mm",
    taglineHe: "נוחות מקוצצת בפלדה",
    descriptionHe:
      "הדום מנירוסטה 5 מ\"מ עם כרית ריפוד. ניתן לשלב עם כיסאות הקולקציה או כפריט עצמאי. ריפוד לפי בחירה — עור, בד, או עור פרה.",
    material: "נירוסטה 5 מ\"מ + ריפוד לבחירה",
    dimensions: { width: 55, depth: 55, height: 38 },
    images: ["/products/p27.jpeg", "/products/p28.jpeg"],
    priceFrom: 3800,
    customizable: true,
  },

  {
    slug: "shelving-with-back",
    nameHe: "מדפים עם גב",
    nameEn: "Shelving Unit — with Back Panel",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "5mm",
    taglineHe: "אחסון ותצוגה בפלדה",
    descriptionHe:
      "יחידת מדפים מנירוסטה 5 מ\"מ עם גב משולב. מתאים לתצוגת אובייקטים, ספרים, כלים. ניתן להתאים מספר מדפים וגובה.",
    material: "נירוסטה 5 מ\"מ",
    dimensions: { width: 90, depth: 30, height: 180 },
    images: ["/products/p03.jpeg"],
    priceFrom: 5200,
    customizable: true,
  },

  {
    slug: "console-steel",
    nameHe: "קונסולה נירוסטה",
    nameEn: "Steel Console",
    category: "tables",
    categoryHe: "שולחנות",
    collection: "5mm",
    taglineHe: "קו אחד, נוכחות מוחלטת",
    descriptionHe:
      "קונסולה מנירוסטה 5 מ\"מ בעיצוב waterfall — גיליון נירוסטה בודד מקופל. ניתן לשימוש כספסל, קונסולת כניסה, או שולחן תצוגה.",
    material: "נירוסטה 5 מ\"מ",
    dimensions: { width: 120, depth: 35, height: 75 },
    images: ["/products/p07.jpeg", "/products/p08.jpeg"],
    priceFrom: 8500,
    customizable: true,
  },

  {
    slug: "desk-steel",
    nameHe: "שולחן כתיבה מנירוסטה",
    nameEn: "Steel Writing Desk",
    category: "tables",
    categoryHe: "שולחנות",
    collection: "5mm",
    taglineHe: "שולחן שעובד קשה כמוך",
    descriptionHe:
      "שולחן כתיבה מנירוסטה 5 מ\"מ — עיצוב waterfall אחיד ללא ריתוך גלוי. גלגלים שקטים מתחת. נראות מושלמת ממרחק, גמישות מלאה בשימוש.",
    material: "נירוסטה 5 מ\"מ + גלגלי נירוסטה",
    dimensions: { width: 160, depth: 75, height: 75 },
    images: ["/products/p10.jpeg", "/products/p11.jpeg"],
    priceFrom: 12000,
    customizable: true,
  },

  {
    slug: "table-steel-double-storage",
    nameHe: "שולחן נירוסטה עם אחסון כפול",
    nameEn: "Steel Table — Double Storage",
    category: "tables",
    categoryHe: "שולחנות",
    collection: "5mm",
    taglineHe: "פונקציונליות בגוף אחד",
    descriptionHe:
      "שולחן עבודה מנירוסטה 5 מ\"מ עם אחסון משני הצדדים. מתאים כשולחן כתיבה, דלפק, או שולחן עבודה מקצועי. גיליון נירוסטה רציף.",
    material: "נירוסטה 5 מ\"מ",
    dimensions: { width: 180, depth: 80, height: 75 },
    images: ["/products/p01.jpeg"],
    priceFrom: 16000,
    customizable: true,
  },

  {
    slug: "table-steel-wood-leg",
    nameHe: "שולחן נירוסטה עם רגל עץ",
    nameEn: "Steel Table — Wood Leg Base",
    category: "tables",
    categoryHe: "שולחנות",
    collection: "5mm",
    taglineHe: "קרירות ועין, חום ואדמה",
    descriptionHe:
      "שולחן קפה / סלון עם משטח נירוסטה 5 מ\"מ ורגליים מעץ מלא. הניגוד בין הפלדה לעץ יוצר אפקט ויזואלי חזק. מוצר של ממש — כבד, יציב, יוצא דופן.",
    material: "נירוסטה 5 מ\"מ + עץ מלא",
    dimensions: { width: 120, depth: 60, height: 38 },
    images: ["/products/p12.jpeg", "/products/p19.jpeg"],
    priceFrom: 9500,
    customizable: true,
  },

  {
    slug: "table-steel",
    nameHe: "שולחן נירוסטה",
    nameEn: "Steel Table",
    category: "tables",
    categoryHe: "שולחנות",
    collection: "5mm",
    taglineHe: "פשטות שאי אפשר להתעלם ממנה",
    descriptionHe:
      "שולחן מנירוסטה 5 מ\"מ — waterfall קלאסי. ללא ריתוך גלוי, ללא בולטים. גיליון נירוסטה אחד מקופל לצורה מינימליסטית מושלמת. כמה שאתה צריך, בדיוק כמה שאתה רוצה.",
    material: "נירוסטה 5 מ\"מ",
    dimensions: { width: 90, depth: 50, height: 42 },
    images: ["/products/p09.jpeg"],
    priceFrom: 7800,
    customizable: true,
  },

  {
    slug: "sideboard-c-shape",
    nameHe: "שידה בצורה C",
    nameEn: "C-Shape Side Table",
    category: "side-tables",
    categoryHe: "שולחנות צד",
    collection: "5mm",
    taglineHe: "מיד ליד הספה, תמיד שם",
    descriptionHe:
      "שולחן צד בצורת C מנירוסטה 5 מ\"מ — מחליק מתחת לספה או לכורסה בצורה חלקה. מינימליסטי לחלוטין. ניתן בגימור מט, ברוש או ראי.",
    material: "נירוסטה 5 מ\"מ",
    dimensions: { width: 45, depth: 35, height: 55, note: "חריצה לצד: 20 ס\"מ" },
    images: ["/products/p04.jpeg", "/products/p05.jpeg", "/products/p17.jpeg"],
    priceFrom: 2800,
    customizable: true,
  },

  {
    slug: "sideboard-storage",
    nameHe: "שידה עם אחסון",
    nameEn: "Side Table with Storage",
    category: "side-tables",
    categoryHe: "שולחנות צד",
    collection: "5mm",
    taglineHe: "כל מה שצריך, בהישג יד",
    descriptionHe:
      "שידת צד מנירוסטה 5 מ\"מ עם תא אחסון פנימי. ניתן לסידור ספרים, מגזינים, שלטים. שמיש וחזותי במידה שווה.",
    material: "נירוסטה 5 מ\"מ",
    dimensions: { width: 40, depth: 40, height: 55 },
    images: ["/products/p14.jpeg", "/products/p15.jpeg"],
    priceFrom: 3400,
    customizable: true,
  },

  // ══════════════════════════════════════
  // COLLECTION 3mm
  // ══════════════════════════════════════

  {
    slug: "cabinet-wood-steel-shelves",
    nameHe: "ארונית עץ עם מדפים נירוסטה",
    nameEn: "Wood Cabinet — Steel Shelves",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "טבע ופלדה בגובה עיניים",
    descriptionHe:
      "ספרייה / ארונית בנויה מעץ חי (live edge) כמסגרת, עם מדפי נירוסטה 3 מ\"מ. כל יחידה ייחודית — העץ מגיע עם סיבוביו וצורתו הטבעית.",
    material: "עץ חי + נירוסטה 3 מ\"מ",
    dimensions: { width: 80, depth: 28, height: 190 },
    images: ["/products/p31.jpeg"],
    priceFrom: 8900,
    customizable: true,
  },

  {
    slug: "shelf-with-back-1",
    nameHe: "מדף עם גב — סוג א׳",
    nameEn: "Shelf with Back Panel — Type A",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "פריים לרגעים שלך",
    descriptionHe:
      "מדף קיר מנירוסטה 3 מ\"מ עם גב שקוע — יוצר תיבת תצוגה מינימליסטית. מתאים לאובייקטים, ספרים, כלי מטבח. מבט אחד וכולם רואים.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 80, depth: 15, height: 20 },
    images: ["/products/p30.jpeg"],
    priceFrom: 1200,
    customizable: true,
  },

  {
    slug: "shelf-with-back-2",
    nameHe: "מדף עם גב — סוג ב׳",
    nameEn: "Shelf with Back Panel — Type B",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "רוחב מלא, נוכחות מלאה",
    descriptionHe:
      "מדף קיר מנירוסטה 3 מ\"מ רחב — גרסה מורחבת עם גב גבוה יותר. מתאים במיוחד למטבח, לאמבטיה, או לסלון.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 120, depth: 18, height: 25 },
    images: ["/products/p34.jpeg"],
    priceFrom: 1600,
    customizable: true,
  },

  {
    slug: "shelf-floating-1",
    nameHe: "מדף תלוי — סוג א׳",
    nameEn: "Floating Shelf — Type A",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "קל כנירוסטה, אמין כנירוסטה",
    descriptionHe:
      "מדף קיר צף מנירוסטה 3 מ\"מ — ללא גב. נראה כאילו מרחף על הקיר. קליל ויזואלית אבל חזק מאוד. מתאים לכל חדר.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 60, depth: 20, height: 3 },
    images: ["/products/p32.jpeg", "/products/p33.jpeg"],
    priceFrom: 780,
    customizable: true,
  },

  {
    slug: "shelf-floating-2",
    nameHe: "מדף תלוי — סוג ב׳",
    nameEn: "Floating Shelf — Type B",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "שורה של סדר",
    descriptionHe:
      "מדף קיר מנירוסטה 3 מ\"מ בגרסה ארוכה — לתצוגת ספרים, תמונות, אובייקטים בשורה. ניתן להרכיב מספר שורות.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 100, depth: 22, height: 3 },
    images: ["/products/p34.jpeg"],
    priceFrom: 1100,
    customizable: true,
  },

  {
    slug: "shelf-floating-3",
    nameHe: "מדף תלוי — סוג ג׳",
    nameEn: "Floating Shelf — Type C",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "שלישיית מדפים — שלמות על הקיר",
    descriptionHe:
      "סט 3 מדפים קיר מנירוסטה 3 מ\"מ. ניתן להרכיב בגבהים שונים בהתאם לצרכי האחסון. אסתטיקה מושלמת וגמישות מלאה.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 80, depth: 20, height: 3, note: "סט של 3" },
    images: ["/products/p35.jpeg"],
    priceFrom: 2400,
    customizable: true,
  },

  {
    slug: "shelving-u-shape",
    nameHe: "מדפים תלויים בצורה U",
    nameEn: "U-Shape Wall Shelving",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "תיבת תצוגה פתוחה",
    descriptionHe:
      "יחידת מדפים בצורת U תלויה על הקיר — מנירוסטה 3 מ\"מ. פותחת נפח תלת-ממדי על הקיר. מתאים לאחסון מטבח, תצוגת אובייקטים, ספרים.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 60, depth: 25, height: 40 },
    images: ["/products/p29.jpeg"],
    priceFrom: 1800,
    customizable: true,
  },

  {
    slug: "lamp-steel",
    nameHe: "מנורה",
    nameEn: "Steel Table Lamp",
    category: "lighting",
    categoryHe: "תאורה",
    collection: "3mm",
    taglineHe: "אור שיוצא מפנים",
    descriptionHe:
      "מנורת שולחן מנירוסטה 3 מ\"מ — גוף מקופל עם פתח לאור דרמטי. הצורה הגיאומטרית יוצרת משחק צל ואור. ניתן בגימור מט או ראי.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 20, depth: 20, height: 40 },
    images: ["/products/p02.jpeg"],
    priceFrom: 2200,
    customizable: true,
  },

  {
    slug: "lamp-strip-hanging",
    nameHe: "מנורת פס תלויה",
    nameEn: "Hanging Strip Lamp",
    category: "lighting",
    categoryHe: "תאורה",
    collection: "3mm",
    taglineHe: "קו של אור, מינימום ריהוט",
    descriptionHe:
      "מנורת פס תלויה מנירוסטה 3 מ\"מ — קו ישר ואחיד. אור פנימי ישיר או עקיף לפי הפניה. ניתן לאורכים שונים ולכמות מקורות אור שונה.",
    material: "נירוסטה 3 מ\"מ + LED",
    dimensions: { width: 100, depth: 8, height: 8, note: "אורך לפי הזמנה" },
    images: ["/products/p00.jpeg"],
    priceFrom: 3200,
    customizable: true,
  },

  {
    slug: "picture-frame-steel",
    nameHe: "מסגרת תמונה",
    nameEn: "Steel Picture Frame",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "תמונה בפלדה, לנצח",
    descriptionHe:
      "מסגרת תמונה מנירוסטה 3 מ\"מ — עיצוב minimal שמסגיר ומדגיש. ניתן לשילוב עם מדף תלוי. גדלים שונים לפי הזמנה.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 30, depth: 2, height: 40, note: "גדלים לפי הזמנה" },
    images: ["/products/p03.jpeg"],
    priceFrom: 680,
    customizable: true,
  },

  {
    slug: "hook-steel",
    nameHe: "נשכן נירוסטה",
    nameEn: "Steel Wall Hook",
    category: "shelving",
    categoryHe: "מדפים ואחסון",
    collection: "3mm",
    taglineHe: "פרט קטן, הבדל גדול",
    descriptionHe:
      "קולב / נשכן קיר מנירוסטה 3 מ\"מ — גיאומטרי, חד, מינימליסטי. מתאים לכניסה, לחדר שינה, למטבח. ניתן להזמין בגדלים ובכמויות שונות.",
    material: "נירוסטה 3 מ\"מ",
    dimensions: { width: 6, depth: 12, height: 6 },
    images: ["/products/p32.jpeg"],
    priceFrom: 280,
    customizable: true,
  },
]

export const categories = [
  { id: "chairs",      labelHe: "כיסאות",         count: products.filter(p => p.category === "chairs").length },
  { id: "tables",      labelHe: "שולחנות",         count: products.filter(p => p.category === "tables").length },
  { id: "side-tables", labelHe: "שולחנות צד",      count: products.filter(p => p.category === "side-tables").length },
  { id: "shelving",    labelHe: "מדפים ואחסון",    count: products.filter(p => p.category === "shelving").length },
  { id: "lighting",    labelHe: "תאורה",            count: products.filter(p => p.category === "lighting").length },
] as const

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category)
}

export function getProductsByCollection(collection: Collection): Product[] {
  return products.filter(p => p.collection === collection)
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  const product = getProductBySlug(slug)
  if (!product) return products.slice(0, count)
  return products
    .filter(p => p.slug !== slug && p.category === product.category)
    .slice(0, count)
}

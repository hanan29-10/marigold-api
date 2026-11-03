export type ProductCategory = 'Totes' | 'Shoulder Bags' | 'Clutches' | 'Travel' | 'Crossbody' | 'Accessories';
export type ProductBadge = 'Signature' | 'New season' | 'Limited' | 'Bestseller' | 'Gift edition';
export type CatalogSort = 'featured' | 'price-low' | 'price-high' | 'name';
export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  badge: ProductBadge;
  image: string;
  secondaryImage?: string;
  description: string;
}
export interface CatalogState {
  category: ProductCategory | 'All';
  term: string;
  sort: CatalogSort;
}
export const products: Product[] = [
  {id:'sienna-tote',name:'Sienna Leather Tote',category:'Totes',price:685,badge:'Signature',image:'/images/moron-sienna-tote.png',secondaryImage:'/images/moron-hero.png',description:'A sculptural everyday tote in softly grained Italian leather, finished by hand in our Florence atelier.'},
  {id:'mara-shoulder',name:'Mara Shoulder Bag',category:'Shoulder Bags',price:540,badge:'New season',image:'/images/moron-mara-shoulder.png',secondaryImage:'/images/moron-shoulder.png',description:'A compact shoulder bag with a graceful curved silhouette and discreet polished hardware.'},
  {id:'atelier-clutch',name:'Atelier Evening Clutch',category:'Clutches',price:480,badge:'Limited',image:'/images/moron-atelier-clutch.png',secondaryImage:'/images/moron-clutch.png',description:'A refined champagne-toned clutch for evenings that call for something quietly exceptional.'},
  {id:'weekend-carryall',name:'Weekend Carryall',category:'Travel',price:790,badge:'Signature',image:'/images/moron-weekend-carryall.png',secondaryImage:'/images/moron-palma-weekender.png',description:'A generous carryall designed for spontaneous departures and long-held rituals.'},
  {id:'cove-crossbody',name:'Cove Crossbody',category:'Crossbody',price:495,badge:'Bestseller',image:'/images/moron-cove-crossbody.png',secondaryImage:'/images/moron-noa-camera-bag.png',description:'Hands-free ease in a polished, adjustable crossbody shape.'},
  {id:'silk-scarf',name:'Garden Silk Scarf',category:'Accessories',price:165,badge:'New season',image:'/images/moron-silk-scarf.png',description:'A soft silk finishing note in the collection’s signature warm neutral palette.'},
  {id:'sol-keyring',name:'Sol Leather Keyring',category:'Accessories',price:125,badge:'Gift edition',image:'/images/moron-sol-keyring.png',description:'A useful luxury made in supple leather to travel everywhere with you.'},
  {id:'rowan-belt',name:'Rowan Sculpted Belt',category:'Accessories',price:225,badge:'Signature',image:'/images/moron-rowan-belt.png',description:'A sculptural belt anchored by a softly polished champagne-tone clasp.'},
  {id:'luna-mini-bag',name:'Luna Mini Bag',category:'Shoulder Bags',price:455,badge:'New season',image:'/images/moron-luna-mini-bag.png',secondaryImage:'/images/moron-mara-shoulder.png',description:'A compact, softly structured bag with a slim shoulder strap and luminous metal closure.'},
  {id:'portofino-top-handle',name:'Portofino Top Handle',category:'Totes',price:720,badge:'Signature',image:'/images/moron-portofino-top-handle.png',description:'A polished top-handle silhouette with a roomy interior for days that call for refinement.'},
  {id:'noa-camera-bag',name:'Noa Camera Bag',category:'Crossbody',price:510,badge:'Bestseller',image:'/images/moron-noa-camera-bag.png',description:'An easy, zip-top crossbody with an adjustable strap and carefully considered proportions.'},
  {id:'celeste-frame-clutch',name:'Celeste Frame Clutch',category:'Clutches',price:520,badge:'Limited',image:'/images/moron-celeste-frame-clutch.png',description:'A graceful framed clutch in soft leather, created for celebrations and late dinners.'},
  {id:'palma-weekender',name:'Palma Weekender',category:'Travel',price:845,badge:'New season',image:'/images/moron-palma-weekender.png',description:'A refined overnight companion with a wide opening, interior pockets, and a detachable strap.'},
  {id:'amara-card-holder',name:'Amara Card Holder',category:'Accessories',price:110,badge:'Gift edition',image:'/images/moron-amara-card-holder.png',description:'A slim card holder with precisely cut slots and a warm, softly polished finish.'},
  {id:'elara-bucket-bag',name:'Elara Bucket Bag',category:'Shoulder Bags',price:595,badge:'New season',image:'/images/moron-elara-bucket-bag.png',description:'A relaxed bucket shape that closes with a leather drawstring and carries from day into evening.'},
  {id:'verona-luggage-tag',name:'Verona Luggage Tag',category:'Accessories',price:85,badge:'Gift edition',image:'/images/moron-verona-luggage-tag.png',description:'A small, personal finishing touch in durable leather with a discreet window for details.'},
  {id:'serena-shopper',name:'Serena Shopper',category:'Totes',price:640,badge:'Signature',image:'/images/moron-hero.png',description:'A generous, lightweight shopper designed to keep its elegant shape through a full day.'},
];

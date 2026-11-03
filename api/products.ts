import type { IncomingMessage, ServerResponse } from 'node:http';
import { products, type CatalogSort } from './data.js';

export default function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.statusCode = 204; return res.end(); }
  if (req.method !== 'GET') { res.statusCode = 405; return res.end(JSON.stringify({ error: 'Method not allowed' })); }
  const url = new URL(req.url ?? '/', 'http://localhost');
  const category = url.searchParams.get('category') ?? 'All';
  const search = (url.searchParams.get('search') ?? '').trim().toLowerCase();
  const sort = (url.searchParams.get('sort') ?? 'featured') as CatalogSort;
  let items = products.filter(p => (category === 'All' || p.category === category) && (!search || `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(search)));
  if (sort === 'price-low') items = [...items].sort((a,b) => a.price-b.price);
  if (sort === 'price-high') items = [...items].sort((a,b) => b.price-a.price);
  if (sort === 'name') items = [...items].sort((a,b) => a.name.localeCompare(b.name));
  const origin = `https://${req.headers.host}`;
  const absolute = (p: typeof products[number]) => ({...p, image: new URL(p.image, origin).href, ...(p.secondaryImage ? {secondaryImage: new URL(p.secondaryImage, origin).href} : {})});
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({items: items.map(absolute), total: items.length, categories: ['All', ...new Set(products.map(p => p.category))]}));
}

import type { IncomingMessage, ServerResponse } from 'node:http';
import { products } from '../data.js';

export default function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method === 'OPTIONS') { res.statusCode = 204; return res.end(); }
  if (req.method !== 'GET') { res.statusCode = 405; return res.end(JSON.stringify({error: 'Method not allowed'})); }
  const id = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname.split('/').pop() ?? '');
  const product = products.find(p => p.id === id);
  if (!product) { res.statusCode = 404; return res.end(JSON.stringify({error: 'Product not found'})); }
  const origin = `https://${req.headers.host}`;
  res.end(JSON.stringify({...product, image: new URL(product.image, origin).href, ...(product.secondaryImage ? {secondaryImage: new URL(product.secondaryImage, origin).href} : {})}));
}

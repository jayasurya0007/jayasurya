import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://jayasuryar.xyz' });

const pages = ['/', '/about', '/projects', '/contact']; // update with your pages

pages.forEach(page => {
  sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(data => {
  createWriteStream('./public/sitemap.xml').end(data);
});

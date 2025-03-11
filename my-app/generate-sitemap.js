import fs from "fs";

const baseUrl = "https://jamshaidislamic.site";
const routes = ["/", "/books", "/about", "/contact"];
const currentDate = new Date().toISOString();

// Create the sitemap XML content
let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
xmlContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Add each route to the sitemap
routes.forEach((route) => {
  xmlContent += "  <url>\n";
  xmlContent += `    <loc>${baseUrl}${route}</loc>\n`;
  xmlContent += `    <lastmod>${currentDate}</lastmod>\n`;

  // Assign priority based on route
  let priority = 0.7;
  if (route === "/") priority = 1.0;
  else if (route === "/books") priority = 0.8;

  xmlContent += `    <priority>${priority}</priority>\n`;
  xmlContent += "  </url>\n";
});

xmlContent += "</urlset>";

// Write the sitemap to a file
fs.writeFileSync("./public/sitemap.xml", xmlContent);
console.log("Sitemap generated successfully!");

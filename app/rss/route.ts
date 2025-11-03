import { baseUrl } from "app/sitemap";
import { getBlogPosts } from "app/blog/utils";
import { getProjectPages } from "app/projects/utils";

export async function GET() {
  let allBlogs = getBlogPosts();
  let allProjects = getProjectPages();

  const allItems = [...allBlogs, ...allProjects].sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const itemsXml = allItems
    .map((item) => {
      // Determine if it's a blog post or project based on whether it exists in allBlogs
      const isBlogPost = allBlogs.some((blog) => blog.slug === item.slug);
      const itemType = isBlogPost ? "blog" : "projects";

      return `<item>
          <title>${item.metadata.title}</title>
          <link>${baseUrl}/${itemType}/${item.slug}</link>
          <guid>${baseUrl}/${itemType}/${item.slug}</guid>
          <description>${item.metadata.summary || ""}</description>
          <pubDate>${new Date(
            item.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

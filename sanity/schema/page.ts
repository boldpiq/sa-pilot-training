import { defineType, defineField } from "sanity"
import { portableTextFields } from "../lib/portableText"

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "body", title: "Content", type: "array", of: portableTextFields }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string", title: "SEO Title" }),
        defineField({ name: "description", type: "text", title: "Meta Description", rows: 3 }),
        defineField({ name: "ogImage", type: "image", title: "OG Image" }),
        defineField({ name: "noIndex", type: "boolean", title: "Hide from search engines" }),
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
})

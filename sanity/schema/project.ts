import { defineType, defineField } from "sanity"
import { portableTextFields } from "../lib/portableText"

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "client", title: "Client Name", type: "string" }),
    defineField({ name: "year", title: "Year", type: "number" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "images", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "excerpt", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Case Study", type: "array", of: portableTextFields }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
      options: { list: ["Brand Identity", "Web Design", "Web Development", "Motion", "Strategy", "Copywriting"] },
    }),
    defineField({ name: "url", title: "Live URL", type: "url" }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "client", media: "coverImage" } },
})

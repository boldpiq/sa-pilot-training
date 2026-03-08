import { defineType, defineField } from "sanity"

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 5, validation: (r) => r.required() }),
    defineField({ name: "author", title: "Author Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Author Role & Company", type: "string" }),
    defineField({ name: "avatar", title: "Author Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: { select: { title: "author", subtitle: "role", media: "avatar" } },
})

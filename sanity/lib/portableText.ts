/**
 * Shared Portable Text field definitions.
 * Used across page, post, project, and service schemas.
 */
export const portableTextFields = [
  { type: "block" },
  {
    type: "image",
    options: { hotspot: true },
    fields: [
      { name: "alt", type: "string", title: "Alt text" },
      { name: "caption", type: "string", title: "Caption" },
    ],
  },
]

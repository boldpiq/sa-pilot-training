/**
 * Sanity CMS — BoldPiq base schema
 *
 * Setup:
 *   npm create sanity@latest -- --template clean --project <id> --dataset production --output-path ./sanity
 *   Then replace the generated schema with this file.
 *
 * This covers the content types needed for most agency client sites.
 * Add/remove types based on what the client actually needs.
 */

import { page } from "./page"
import { post } from "./post"
import { project } from "./project"
import { service } from "./service"
import { teamMember } from "./teamMember"
import { testimonial } from "./testimonial"
import { siteSettings } from "./siteSettings"

export const schemaTypes = [
  // Singleton documents (one per site)
  siteSettings,
  // Content documents
  page,
  post,
  project,
  service,
  teamMember,
  testimonial,
]

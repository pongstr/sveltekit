import type { Handle } from '@sveltejs/kit'

const themes = ['latte', 'frappe', 'macchiato', 'mocha'] as const
type Theme = (typeof themes)[number]

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme') as Theme | undefined

  if (!theme || !themes.includes(theme)) {
    return await resolve(event)
  }

  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('class="moncha"', `class="${theme}"`)
    },
  })
}

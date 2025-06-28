<script lang="ts">
  import { cn } from '$lib/utils'

  const themes = ['latte', 'frappe', 'macchiato', 'mocha'] as const
  type Theme = (typeof themes)[number]

  let currentTheme: Theme = $state(themes[3])

  $effect(() => {
    if (typeof window !== 'undefined') {
      const theme: Theme =
        (window.localStorage.getItem('theme') as Theme) ?? themes[3]
      if (theme && themes.includes(theme)) {
        document.documentElement.setAttribute('class', theme)
        currentTheme = theme
      }
    }
  })

  function set_theme(theme: Theme) {
    if (themes.includes(theme)) {
      const year = 60 * 60 * 24 * 365
      window.localStorage.setItem('theme', theme)
      document.cookie = `theme=${theme}; max-age=${year}; path=/; SameSite=Lax`
      document.documentElement.setAttribute('class', theme)
      currentTheme = theme
    }
  }
</script>

<header></header>

<main class="flex h-screen w-screen items-center justify-center">
  <div class="bg-crust relative h-64 w-xl rounded-xl border-2 p-8">
    <div>
      <h2
        class="text-accent block pb-2 text-5xl font-bold tracking-tighter md:text-6xl"
      >
        Boilerplate
      </h2>
      <span class="block font-medium">
        a Sveltekit app prototype kickstarter.
      </span>

      <div class="grid w-64 grid-cols-4 gap-2 py-2">
        <button
          onclick={() => set_theme(themes[0])}
          class={cn(
            'box latte rounded',
            currentTheme === themes[0] && 'outline-2 outline-offset-2',
          )}
        >
          <span class="sr-only">Latte</span>
        </button>

        <button
          onclick={() => set_theme(themes[1])}
          class={cn(
            'box frappe rounded',
            currentTheme === themes[1] && 'outline-2 outline-offset-2',
          )}
        >
          <span class="sr-only">Latte</span>
        </button>

        <button
          onclick={() => set_theme(themes[2])}
          class={cn(
            'box macchiato rounded',
            currentTheme === themes[2] && 'outline-2 outline-offset-2',
          )}
        >
          <span class="sr-only">Maccchiato</span>
        </button>

        <button
          onclick={() => set_theme(themes[3])}
          class={cn(
            'box mocha rounded',
            currentTheme === themes[3] && 'outline-2 outline-offset-2',
          )}
        >
          <span class="sr-only">Mocha</span>
        </button>
      </div>

      <div
        class="grid w-64 grid-cols-8 grid-rows-2 gap-x-2 gap-y-3 py-2 select-none"
      >
        <span class="bg-rosewater h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-flamingo h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-mauve h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-red h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-maroon h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-peach h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-yellow h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-green h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-teal h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-mauve h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-green h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-teal h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-sky h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-sapphire h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-blue h-6 w-6 rounded-full">&nbsp;</span>
        <span class="bg-lavender h-6 w-6 rounded-full">&nbsp;</span>
      </div>
    </div>

    <div class="parallel absolute right-8 bottom-0"></div>

    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" fill="none"><g clip-path="url(#a)"><path fill="#D9D9D9" d="M100 0h100L100 180H0L100 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h200v180H0z"/></clipPath></defs></svg>> -->
  </div>
</main>

<footer></footer>

<style>
  ::global(html, body) {
    min-width: 100vw;
    min-height: 100vh;
  }
  .box {
    --palette-size: 40px;
    display: inline-block;
    border: 1px solid var(--surface0);
    width: 100%;
    height: calc(var(--palette-size) / 2);
  }

  .latte {
    background-color: #dce0e8;
    right: 0;
  }

  .frappe {
    background-color: #232634;
    right: var(--palette-size);
  }

  .macchiato {
    background-color: #181926;
    right: calc(var(--palette-size) * 2);
  }

  .mocha {
    background-color: #11111b;
    right: calc(var(--palette-size) * 3);
  }
</style>

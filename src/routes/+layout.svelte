<script lang="ts">
  import '../app.css'
  import { pwaInfo } from 'virtual:pwa-info'

  import ReloadPrompt from '$lib/components/common/pwa-reload.svelte'

  let { children } = $props()
</script>

<svelte:head>
  {#if pwaInfo}
    <link
      rel="manifest"
      href={pwaInfo.webManifest.href}
      crossorigin="use-credentials"
    />
  {/if}
</svelte:head>

{@render children()}

<ReloadPrompt />

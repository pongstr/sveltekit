<script lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/svelte'

  const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
    onRegistered(worker: ServiceWorkerRegistration | undefined) {
      // uncomment following code if you want check for updates
      // r && setInterval(() => {
      //    console.log('Checking for sw update')
      //    r.update()
      // }, 20000 /* 20s for testing purposes */)

      // eslint-disable-next-line no-console
      console.log(`SW Registered: ${worker}`)
    },
    onRegisterError(error: unknown) {
      // eslint-disable-next-line no-console
      console.log('SW registration error', error)
    },
  })

  const close = () => {
    offlineReady.set(false)
    needRefresh.set(false)
  }

  let toast = $state($offlineReady ?? needRefresh)
</script>

{#if toast}
  <div class="pwa-toast" role="alert">
    <div class="message">
      {#if $offlineReady}
        <span> App ready to work offline </span>
      {:else}
        <span> New content available, click on reload button to update. </span>
      {/if}
    </div>
    {#if $needRefresh}
      <button onclick={() => updateServiceWorker(true)}> Reload </button>
    {/if}
    <button onclick={close}> Close </button>
  </div>
{/if}

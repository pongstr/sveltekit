<script lang="ts">
  import type { TooltipContentProps, TooltipTriggerProps } from 'bits-ui'
  import { Tooltip } from 'bits-ui'
  import type { Snippet } from 'svelte'

  import Content from './tooltip-content.svelte'

  type Props = {
    triggerProps?: TooltipTriggerProps
    contentProps?: TooltipContentProps
    trigger: Snippet
    content: Snippet
  }
  let { triggerProps, contentProps, trigger, content }: Props = $props()
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger {...triggerProps}>
      {@render trigger()}
    </Tooltip.Trigger>
    <Content {...contentProps}>
      {@render content()}
    </Content>
  </Tooltip.Root>
</Tooltip.Provider>

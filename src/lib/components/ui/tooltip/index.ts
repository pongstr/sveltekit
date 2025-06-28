import { Tooltip as TooltipPrimitive } from 'bits-ui'

import Basic from './tooltip-basic.svelte'
import Content from './tooltip-content.svelte'
import Trigger from './tooltip-trigger.svelte'

const Root = TooltipPrimitive.Root
const Provider = TooltipPrimitive.Provider
const Portal = TooltipPrimitive.Portal

export {
  Basic,
  Content,
  Portal,
  Provider,
  Root,
  //
  Root as Tooltip,
  Content as TooltipContent,
  Portal as TooltipPortal,
  Provider as TooltipProvider,
  Trigger as TooltipTrigger,
  Trigger,
}

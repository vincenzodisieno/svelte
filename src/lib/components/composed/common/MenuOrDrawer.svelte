<script lang="ts">
  import '../../../css/main.css'
  import Drawer from '$lib/components/simple/navigation/Drawer.svelte';
  import Menu from '$lib/components/simple/common/Menu.svelte';
  import MediaQuery from '$lib/components/simple/common/MediaQuery.svelte';
  import type { ComponentProps, Snippet } from 'svelte';
  import lodash from 'lodash'

  export interface Props {
    open?: boolean
    drawerProps?: Omit<ComponentProps<typeof Drawer>, 'open'>
    menuProps?: Omit<ComponentProps<typeof Menu>, 'open'>
    children?: Snippet<[
      {
        isDrawer: boolean,
        isMenu: boolean
      }
    ]>
  }

  let {
    open = $bindable(),
    drawerProps,
    menuProps = $bindable(),
    children,
  }: Props = $props();

  if (!menuProps) menuProps = {}

  const menuPropsDefaultValue: Omit<ComponentProps<typeof Menu>, 'open'> = {
    closeOnClickOutside: true,
    _boxShadow: "rgb(var(--global-color-grey-900), .5) 0px 2px 4px",
    _height: "fit-content",
    _minWidth: "100px",
    _borderRadius: "5px",
    _width: "",
    anchor: 'bottom-center',
    stayInViewport: true
  }

  let finalMenuProps = $derived(
    lodash.merge({}, menuPropsDefaultValue, menuProps)
  )

  const drawerPropsDefaultValue: Omit<ComponentProps<typeof Drawer>, 'open'> = {
    position: 'bottom'
  }

  let finalDrawerProps = $derived(
    lodash.merge({}, drawerPropsDefaultValue, drawerProps)
  )
</script>

<MediaQuery>
  {#snippet defaultSnippet({ mAndDown })}
    {#if mAndDown}
      <Drawer
        {...finalDrawerProps}
        bind:open={open}
      >
        {@render children?.({ isDrawer: true, isMenu: false })}
      </Drawer>
    {:else}
      <Menu
        {...finalMenuProps}
        bind:open
        bind:flipOnOverflow={menuProps.flipOnOverflow}
        bind:refreshPosition={menuProps.refreshPosition}
        bind:stayInViewport={menuProps.stayInViewport}
        bind:activator={menuProps.activator}
        bind:menuElement={menuProps.menuElement}
        bind:openingId={menuProps.openingId}
      >
        {@render children?.({ isDrawer: false, isMenu: true })}
      </Menu>
    {/if}
  {/snippet}
</MediaQuery>
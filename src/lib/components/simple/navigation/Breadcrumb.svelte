<script lang="ts" module>
  export type BreadcrumbItem = {
    name: string;
    title: string;
    url?: string;
  };
</script>

<script lang="ts">
  import Icon from "$lib/components/simple/media/Icon.svelte";
  
  interface Props {
    items: BreadcrumbItem[];
    underliner?: boolean;
    separatorIcon?: string;
    separatorIconSize?: string;
    spacing?: string;
    onitemClick?: (event: {
      detail: {
        item: BreadcrumbItem,
        nativeEvent?: KeyboardEvent & { currentTarget: EventTarget & HTMLSpanElement }
      }
    }) => void
  }

  let {
    items = [],
    underliner = true,
    separatorIcon = "mdi-chevron-right",
    separatorIconSize = '10px',
    spacing = "20px",
    onitemClick,
  }: Props = $props();

  function handleLinkClick(params: { 
    event?: KeyboardEvent & { currentTarget: EventTarget & HTMLSpanElement },
    item: BreadcrumbItem
  }) {
    if(onitemClick){
      onitemClick({
        detail: params
      })
    }
  }
</script>

<div>
  {#each items as item, index}
    <span
      class="history"
      class:link={underliner && index != items.length - 1}
      class:bar-link={underliner && index != items.length - 1}
      role="button"
      tabindex="0"
      onclick={() => handleLinkClick({item})}
      onkeypress={e => handleLinkClick({ event: e, item})}
    >
      {item.title}
    </span>
    {#if index != items.length - 1}
      <span
        style:margin-left={`calc(${spacing} / 2)`}
        style:margin-right={`calc(${spacing} / 2)`}
      >
        <Icon name={separatorIcon} --icon-size={separatorIconSize} />
      </span>
    {/if}
  {/each}
</div>

<style>
  .history {
    cursor: pointer;
  }

  .link {
    position: relative;
    white-space: nowrap;
    color: var(--color-text);
  }

  .link::before,
  .link::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  .link::before {
    content: "";
  }

  .bar-link::before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }

  .bar-link:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
</style>

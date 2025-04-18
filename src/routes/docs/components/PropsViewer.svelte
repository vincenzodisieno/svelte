<script lang="ts" module>
  export type Prop = {
    name: string,
    type: string,
    description: string,
    default?: string
  };
</script>

<script lang="ts">
  import NoData from "$lib/components/simple/common/NoData.svelte";

  interface Props {
    props?: Prop[];
    styleProps?: Prop[];
  }

  const { 
    props = [],
    styleProps = []
  }: Props = $props();
</script>

<ul class="container">
  <div class="subhead">🕹️ standard props</div>
  {#if props.length > 0}
    {#each props as prop}
      <div class="element">
        <div class="first-column">
          <div class="first-line">
            <code>{prop.name}</code>
            <div class="props-type">{prop.type}</div>
          </div>
          <div class="second-line">
            {prop.description}
          </div>
        </div>
        <div class="append-column">
          {#if !!prop.default}
            <code>{prop.default}</code>
          {/if}
        </div>
      </div>
    {/each}
  {:else}
    <div
      style:display="flex"
      style:height="3rem"
      style:font-size=".9rem"
      style:align-items="center"
      style:justify-content="center"
      style:color="rgb(var(--global-color-contrast-300))"
    >
      <NoData/>
    </div>
  {/if}
  <div class="subhead">🎨 style props</div>
  {#if styleProps.length > 0}
    {#each styleProps as prop}
      <div class="element">
        <div class="first-column">
          <div class="first-line">
            <code>{prop.name}</code>
            <div class="props-type">{prop.type}</div>
          </div>
          <div class="second-line">
            {prop.description}
          </div>
        </div>
        <div class="append-column">
          {#if !!prop.default}
            <code>{prop.default}</code>
          {/if}
        </div>
      </div>
    {/each}
  {:else}
    <div
      style:display="flex"
      style:height="3rem"
      style:font-size=".9rem"
      style:align-items="center"
      style:justify-content="center"
      style:color="rgb(var(--global-color-contrast-300))"
    >
      <NoData/>
    </div>
  {/if}
</ul>

<style>
  .container {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  .subhead {
    font-size: .8rem;
    font-weight: 700;
    margin: 2rem 0rem;
  }

  .element {
    border-bottom: 1px solid rgba(24,24,27,.1);
    padding: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .first-line {
    display: flex;
    align-items: center;
    font-family: monospace;
    gap: 1.5rem;
  }

  .first-column {
    flex-grow: 1;
  }

  .second-line {
    margin-top: .8rem;
  }

  .props-type {
    color: var(--global-light-contrast-color);
  }

  code {
    color: rgb(16, 16, 16);
    border-radius: 0.5rem;
    padding: 0.25rem 0.375rem;
    box-shadow: inset 0 0 0 1px #d4d4d8;
    background-color: #f4f4f5;
  }
</style>
<script lang="ts">
  import ComponentSubtitle from "../../../ComponentSubtitle.svelte";
  import PropsViewer from "../../PropsViewer.svelte";
  import Button from "$lib/components/simple/buttons/Button.svelte";
  import QuickActions from "$lib/components/composed/common/QuickActions.svelte";
  import EventsViewer from "../../EventsViewer.svelte";
  import SlotsViewer from "../../SlotsViewer.svelte";

  let selectedItems = 1

</script>

<h1>QuickActions</h1>
<ComponentSubtitle>Fast actions available only to you.</ComponentSubtitle>
<h2>Example</h2>
<div class="example">
  <Button
    onclick={() => { 
      selectedItems = 2
    }}
  >
    Show Actions
  </Button>

  <QuickActions
    disabled={false}
    actionsForSelectedItems={[
      {
        label: 'Disassociate',
        icon: 'mdi-account-multiple-minus-outline',
        disabled: true,
        onClick: () => {
          return
        },
        info: 'info',
        disabledInfo: 'disabled'
      },
      {
        label: 'Aggregate',
        icon: 'mdi-link-variant-plus',
        disabled: false,
        onClick: () => {}
      },
      {
        label: 'Ungroup',
        icon: 'mdi-link-variant-minus',
        disabled: false,
        onClick: () => {
          return
        },
        info: 'info'
      },
      {
        label: 'Split',
        icon: 'mdi-link-variant',
        disabled: true,
          onClick: () => {
          return
        },
        info: 'info'
      },
      {
        label: 'Supplier = Trader',
        icon: 'mdi-account-arrow-right-outline',
        disabled: false,
          onClick: () => {
          return
        }
      },
      {
        label: 'Supplier = Manufacturer',
        icon: 'mdi-account-arrow-right-outline',
        disabled: false,
          onClick: () => {
          return
        },
        info: 'Essential information'
      },
      {
        label: 'Apply default values',
        icon: 'mdi-cloud-upload-outline',
        disabled: true,
          onClick: () => {
          return
        }
      }
    ]}
    {selectedItems}
  >
  </QuickActions>
</div>
<h2>Props</h2>
<PropsViewer
  props={[
    { name: "selectedItems", type: "number", description: "The number of selected items", default: "undefined" },
    { name: "disabled", type: "boolean", description: "Disables all actions.", default: "false" },
    { name: "actionsForSelectedItems", type: "Action[]", description: "The list of actions available for selected items.", default: "[]" },
    { name: "position", type: "'top' | 'bottom'", description: "Position of the container.", default: "'top'" },
    { name: "lang", type: "'it' | 'en'", description: "Language of the labels.", default: "'en'" }
  ]}
  styleProps={[
    { name: "--quick-actions-background-color", type: "color", description: "Background color of the quick actions container.", default: "rgb(var(--global-color-background-200))" },
    { name: "--quick-actions-selected-items-button-background-color", type: "color", description: "Background color of the selected items button.", default: "rgb(var(--global-color-background-500))" },
    { name: "--quick-actions-selected-items-button-background-color-hover", type: "color", description: "Hover background color of the selected items button.", default: "rgb(var(--global-color-background-300))" },
    { name: "--quick-actions-selected-items-button-background-color-disabled", type: "color", description: "Disabled background color of the selected items button.", default: "rgb(var(--global-color-background-300), .5)" },
    { name: "--quick-actions-selected-items-button-color-disabled", type: "color", description: "Text color of the selected items button.", default: "rgb(var(--global-color-contrast-900), .5)" },
    { name: "--quick-actions-z-index", type: "number", description: "Z-index of the quick actions container.", default: "48" },
    { name: "--quick-actions-buttons-background-color", type: "color", description: "Background color of quick action buttons.", default: "rgb(var(--global-color-background-200))" },
    { name: "--quick-actions-buttons-background-color-disabled", type: "color", description: "Disabled background color of quick action buttons.", default: "rgba(var(--global-color-background-300), .5)" },
    { name: "--quick-actions-buttons-background-color-hover", type: "color", description: "Hover background color of quick action buttons.", default: "rgb(var(--global-color-background-300))" },
    { name: "--quick-actions-buttons-color", type: "color", description: "Text color of quick action buttons.", default: "rgb(var(--global-color-contrast-900))" },
    { name: "--quick-actions-buttons-color-disabled", type: "color", description: "Disabled text color of quick action buttons.", default: "rgba(var(--global-color-contrast-900), .5)" }
  ]}
></PropsViewer>
<h2>Slots</h2>
<SlotsViewer></SlotsViewer>
<h2>Events</h2>
<EventsViewer
  events={[
    {
      name: 'onClose',
      description: 'Event emitted when the quick actions are closed',
    }
  ]}
></EventsViewer>

<style>
  .example {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  :global(.calculated-class) {
    background-color: rgba(var(--global-color-contrast-200), 0.2);
  }
</style>
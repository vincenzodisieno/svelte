<script lang="ts">
  import ComponentSubtitle from "../../../ComponentSubtitle.svelte";
  import PropsViewer from "../../PropsViewer.svelte";
  import PieChart from "$lib/components/simple/charts/PieChart.svelte";
  import EventsViewer from "../../EventsViewer.svelte";
  import SlotsViewer from "../../SlotsViewer.svelte";
</script>

<h1>PieChart</h1>
<ComponentSubtitle>Pie chart.</ComponentSubtitle>
<h2>Example</h2>
<div class="example">
  <PieChart
    data={{
      labels: [
        "Gen",
        "Feb",
        "Mar",
        "Apr",
        "Mag",
        "Giu",
        "Lug",
        "Ago",
        "Set",
        "Ott",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Vendite",
          data: [20, 30, 20, 40, 50, 10, 60, 20, 30, 20, 80, 100],
          backgroundColor: [
            "#FF3B30",
            "#eCD964",
            "#007AFF",
            "#FFCC00",
            "#FF9500",
            "#5856D6",
            "#FF2D55",
            "#8E8E93",
            "#FFFFFF",
            "#000000",
            "#8E7D6B",
            "#34C759",
          ],
          borderColor: "#7dd3fc",
        }
      ],
    }}
  />
</div>
<h2>Props</h2>
<PropsViewer
  props={[
    { name: "data", type: "object", description: "Chart data including labels, datasets, and options", default: "{ labels: [], datasets: [], options: object } }" },
    { name: "options", type: "ChartOptions<'pie'>", description: "Options for the chart", },
    { name: "resetZoom", type: "boolean", description: "Control for resetting zoom", default: "false" },
  ]}
  styleProps={[]}
/>
<h2>Slots</h2>
<SlotsViewer></SlotsViewer>
<h2>Events</h2>
<EventsViewer></EventsViewer>

<style>
  .example {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
</style>

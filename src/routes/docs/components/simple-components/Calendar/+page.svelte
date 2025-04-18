<script lang="ts">
  import ComponentSubtitle from "../../../ComponentSubtitle.svelte";
  import PropsViewer from "../../PropsViewer.svelte";
  import Calendar from "$lib/components/simple/dates/Calendar.svelte";
  import EventsViewer from "../../EventsViewer.svelte";
  import SlotsViewer from "../../SlotsViewer.svelte";
</script>

<h1>Calendar</h1>
<ComponentSubtitle>Just a calendar.</ComponentSubtitle>
<h2>Example</h2>
<div class="example">
  <Calendar></Calendar>
</div>
<h2>Props</h2>
<PropsViewer
  props={[
    { name: "selectedDate", type: "Date", description: "Currently selected date.", default: "undefined" },
    { name: "visibleMonth", type: "number", description: "Currently visible month (0-11).", default: "new Date().getMonth()" },
    { name: "visibleYear", type: "number", description: "Currently visible year.", default: "new Date().getFullYear()" },
    { name: "locale", type: "Locale", description: "Locale used for day names.", default: '"it"' },
    { name: "showExtraMonthDays", type: "boolean", description: "Determines if days from adjacent months should be displayed.", default: "true" },
    { name: "showHeader", type: "boolean", description: "Controls visibility of the week header.", default: "true" },
    { name: "animationDuration", type: "number", description: "Duration of the calendar transition animation in milliseconds.", default: "200" },
    { name: "disabled", type: "boolean", description: "Disables interaction with the calendar.", default: "false" },
    { name: "class", type: "{ container?: string, weekHeader?: string, day?: string }", description: "CSS classes for various calendar elements.", default: "{}" }
  ]}
  styleProps={[
    { name: "--calendar-height", type: "size", description: "The height of the calendar.", default: "var(--calendar-default-height)" },
    { name: "--calendar-width", type: "size", description: "The width of the calendar.", default: "var(--calendar-default-width)" },
    { name: "--calendar-day-width", type: "size", description: "The width of each day in the calendar.", default: "var(--calendar-default-day-width)" },
    { name: "--calendar-day-height", type: "size", description: "The height of each day in the calendar.", default: "var(--calendar-default-day-height)" },
    { name: "--calendar-day-hover-background-color", type: "color", description: "The background color of a day when hovered.", default: "rgb(var(--global-color-primary-600), .3)" },
    { name: "--calendar-selected-day-background-color", type: "color", description: "The background color of a selected day.", default: "rgb(var(--global-color-primary-600))" },
    { name: "--calendar-selected-day-color", type: "color", description: "The text color of a selected day.", default: "rgb(var(--global-color-grey-50))" },
    { name: "--calendar-grid-gap", type: "size", description: "The gap between calendar grid cells.", default: "var(--calendar-default-grid-gap)" }
  ]}
></PropsViewer>
<h2>Slots</h2>
<SlotsViewer
  slots={[
    { 
      name: "weekHeaderSnippet", 
      description: "Custom rendering for week headers.", 
      default: `<div class="week-header-slot {clazz.weekHeader || ''}">{weekHeader}</div>`,
      properties: [
        { name: "header", type: "string", description: "The name of the week header." },
        { name: "index", type: "number", description: "The index of the week header." }
      ] 
    },
    { 
      name: "daySnippet", 
      description: "Custom rendering for individual days.", 
      default: `
        <div class="day-slot {clazz.day || ''}" 
          class:extra-month={extraMonth} 
          class:selected 
          class:not-selected={!selected}
          onclick={() => handleDayClick(day, extraMonth)}
          onkeydown={() => handleDayClick(day, extraMonth)}
          role="presentation"
        >
          {day.dayOfMonth}
        </div>
      `,
      properties: [
        { name: "dayStat", type: "DateStat", description: "Details of the day's date." },
        { name: "extraMonth", type: "boolean", description: "Indicates if the day belongs to an adjacent month." },
        { name: "selected", type: "boolean", description: "Indicates if the day is currently selected." }
      ] 
    }
  ]}
></SlotsViewer>
<h2>Events</h2>
<EventsViewer
  events={[
    { 
      name: "ondayClick", 
      description: "Triggered when a day in the calendar is clicked.", 
      properties: [
        { name: "dateStat", type: "DateStat", description: "Details of the clicked date." },
        { name: "selected", type: "boolean", description: "Indicates if the clicked date is selected." },
        { name: "extraMonth", type: "boolean", description: "Indicates if the clicked date is from an adjacent month." }
      ] 
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
</style>
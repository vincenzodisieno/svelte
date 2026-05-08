import { writable } from "svelte/store";

export const sidebarOpened = writable<boolean>(false);
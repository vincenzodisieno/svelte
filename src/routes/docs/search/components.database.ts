import lodash from "lodash"

const list: {
  title: string,
  description: string,
  status: 'stable' | 'beta' | 'deprecated',
  type: 'composed' | 'simple' | 'layout',
  url: string
}[] = [
  {
    title: 'Button',
    description: 'A button to click',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Button'
  }, {
    title: 'LinkButton',
    description: 'A button that use a link tag',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/LinkButton'
  }, {
    title: 'Checkbox',
    description: 'A simple checkbox',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Checkbox'
  }, {
    title: 'Avatar',
    description: 'Circle image.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Avatar'
  }, {
    title: 'DescriptiveAvatar',
    description: 'Circle Image with description',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/DescriptiveAvatar' 
  }, {
    title: 'CollapsibleDivider',
    description: 'Make everything collapsable',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/CollapsibleDivider' 
  }, {
    title: 'Divider',
    description: "Wasn't meant to be together",
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Divider'
  }, {
    title: 'NoData',
    description: "Nothing to see here.",
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/NoData'
  }, {
    title: 'Calendar',
    description: "Just a calendar",
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Calendar'
  }, {
    title: 'CollpasibleSideBarLayout',
    description: "Just a calendar",
    status: 'stable',
    type: 'layout',
    url: '/docs/components/layouts/CollapsibleSideBarLayout'
  }, {
    title: 'MonthSelector',
    description: "Just a month selector",
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/MonthSelector'
  }, {
    title: 'BoxList',
    description: "A lot of boxes.",
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/BoxList'
  }, {
    title: 'ProgressBar',
    description: 'Makes some progress to get there.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/ProgressBar'
  }, {
    title: 'Skeleton',
    description: 'Bones in my closet.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Skeleton'
  }, {
    title: 'HorizontalStackedProgress',
    description: 'Stacked progress.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/HorizontalStackedProgress'
  }, {
    title: 'SimpleTimeLine',
    description: 'Always simple timeline.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/SimpleTimeLine'
  }, {
    title: 'MediaQuery',
    description: 'Responsive is the key.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/MediaQuery'
  }, {
    title: 'Menu',
    description: 'Custom elements that appear on the screen wherever you want them to be positioned',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Menu'
  }, {
    title: 'Textarea',
    description: 'Big area of text',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Textarea'
  }, {
    title: 'VerticalSwitch',
    description: 'Switching sides vertically',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/VerticalSwitch'
  }, {
    title: 'VerticalTextSwitch',
    description: 'Switching sides vertically and with text',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/VerticalTextSwitch'
  }, {
    title: 'SelectableMenuList',
    description: 'Choose wisely.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/SelectableMenuList'
  }, {
    title: 'ConfirmOrCancelButtons',
    description: 'Last chance to make the right decision.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/ConfirmOrCancelButtons'
  }, {
    title: 'SearchResults',
    description: 'The answers to all your questions.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/SearchResults'
  }, {
    title: 'SearchBar',
    description: 'The question to all your answers.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/SearchBar'
  }, {
    title: 'GlobalSearchTextField',
    description: 'TextField global friendly.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/GlobalSearchTextField'
  }, {
    title: 'FilterEditor',
    description: 'The key for making it easy',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/FilterEditor'
  }, {
    title: 'SideBarMenuList',
    description: 'Choose wisely, but to the side.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/SideBarMenuList'
  }, {
    title: 'CircularLoader',
    description: 'Like a dog chasing his own tail.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/CircularLoader'
  }, {
    title: 'Icon',
    description: 'Be iconic.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Icon'
  }, {
    title: 'Breadcrumb',
    description: 'Never leave any crumbs left.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Breadcrumb'
  }, {
    title: 'HeaderMenu',
    description: 'Menu that scores an header.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/HeaderMenu'
  }, {
    title: 'Navigator',
    description: 'Better than a TomTom.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Navigator'
  }, {
    title: 'SimpleTextField',
    description: 'A simple text input',
    status: 'beta',
    type: 'simple',
    url: '/docs/components/simple-components/SimpleTextField'
  }, {
    title: 'AlertBanner',
    description: 'An alert that shows you noticeable information',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/AlertBanner'
  }, {
    title: 'Dialog',
    description: 'A dialog for peace',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Dialog'
  }, {
    title: 'DatePicker',
    description: 'Day to change, day to stick to the habits',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/DatePicker'
  }, {
    title: 'DatePickerTextField',
    description: 'If you want a date, you\'ll have a date.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/simple-components/DatePickerTextField'
  }, {
    title: 'YearPickerTextField',
    description: 'If you want a year, you\'ll have a year.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/YearPickerTextField'
  }, {
    title: 'VerticalDraggableList',
    description: 'Drag all over me',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/simple-components/VerticalDraggableList'
  }, {
    title: 'Select',
    description: 'Choose me',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Select'
  }, {
    title: 'Autocomplete',
    description: 'Autocompletion out of the limits.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Autocomplete'
  }, {
    title: 'Chip',
    description: 'Cheap Chip.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Chip'
  }, {
    title: 'Drawer',
    description: 'Drop your things in this drawer.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Drawer'
  }, {
    title: 'SelectableVerticalList',
    description: 'Vertical horizon, selectable soul.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/SelectableVerticalList'
  }, {
    title: 'TabSwitcher',
    description: 'Switch to a new tab, switch to a new life.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/TabSwitcher'
  }, {
    title: 'ColorInvertedSelector',
    description: 'A selector with inversion.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/ColorInvertedSelector'
  }, {
    title: 'HierarchyMenu',
    description: 'Hierarchy is hard to write.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/HierarchyMenu'
  }, {
    title: 'SimpleTable',
    description: 'Grid beautiful view.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/SimpleTable'
  }, {
    title: 'Paginator',
    description: 'One page at a time.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Paginator'
  }, {
    title: 'FileInput',
    description: 'One input to control them.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/FileInput'
  },{
    title: 'FileInputList',
    description: 'One list input to list control them.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/FileInputList'
  }, {
    title: 'PaginatedTable',
    description: 'Table and pagination agreement.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/PaginatedTable'
  }, {
    title: 'QuickActions',
    description: 'Fast actions available only to you.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/QuickActions'
  }, {
    title: 'DynamicFilters',
    description: 'Make it easy, make it filter. Dynamically.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/DynamicFilters'
  }, {
    title: 'DynamicTable',
    description: 'Dynamic table and pagination agreement.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/DynamicTable'
  }, {
    title: 'Filters',
    description: 'Make it easy, make it filter.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/Filters'
  }, {
    title: 'ToggleList',
    description: 'List of toggle button',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/ToggleList'
  }, {
    title: 'AsyncAutocomplete',
    description: 'Autocomplete in different time and space.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/AsyncAutocomplete'
  }, {
    title: 'Dropdown',
    description: 'Easily drop your things down.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/Dropdown'
  }, {
    title: 'AvatarDropdown',
    description: 'Easily choose your avatar.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/AvatarDropdown'
  }, {
    title: 'YearSelector',
    description: 'Select your year.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/YearSelector'
  }, {
    title: 'MenuOrDrawer',
    description: 'Put all the menus in the drawer please.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/MenuOrDrawer'
  }, {
    title: 'MenuOrDrawerOptions',
    description: 'If a menu does not have an option is not a menu.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/MenuOrDrawerOptions'
  }, {
    title: 'ToolTip',
    description: 'A tip for the tool.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/ToolTip'
  }, {
    title: 'StableDividedSideBarLayout',
    description: 'Layout of this doc.',
    status: 'beta',
    type: 'layout',
    url: '/docs/components/layouts/StableDividedSideBarLayout'
  }, {
    title: 'UnstableDividedSideBarLayout',
    description: 'Layout so unstable.',
    status: 'beta',
    type: 'layout',
    url: '/docs/components/layouts/UnstableDividedSideBarLayout'
  }, {
    title: 'BarChart',
    description: ' Bar Chart.',
    status: 'beta',
    type: 'simple',
    url: '/docs/components/simple-components/BarChart'
  }, {
    title: 'LineChart',
    description: ' Line Chart.',
    status: 'beta',
    type: 'simple',
    url: '/docs/components/simple-components/LineChart'
  }, {
    title: 'PieChart',
    description: ' Pie Chart.',
    status: 'beta',
    type: 'simple',
    url: '/docs/components/simple-components/PieChart'
  }, {
    title: 'DashboardGridShaper',
    description: 'Shape new generation dashboards.',
    status: 'beta',
    type: 'simple',
    url: '/docs/components/simple-components/DashboardGridShaper'
  }, {
    title: 'CountriesAutocomplete',
    description: 'Every nation includes the flag.',
    status: 'beta',
    type: 'composed',
    url: '/docs/components/composed-components/CountriesAutocomplete'
  }, {
    title: 'FlagIcon',
    description: 'No to racism.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/FlagIcon'
  }, {
    title: 'Switch',
    description: 'Switching sides.',
    status: 'stable',
    type: 'simple',
    url: '/docs/components/simple-components/Switch'
  }, {
    title: 'ActivableButton',
    description: 'Activate the power now.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/ActivableButton'
  }, {
    title: 'IconsDropdown',
    description: 'Chose an icon from the list.',
    status: 'stable',
    type: 'composed',
    url: '/docs/components/composed-components/IconsDropdown'
  }, {
    title: 'RadioButton',
    description: 'Tune in and choose you favorite station with our radio buttons.',
    status: 'beta',
    type: 'simple',
    url: '/docs/components/simple-components/RadioButton'
  }
]

export default lodash.sortBy(list, 'title')
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Inputs/Select',
  component: Select,
  argTypes: {
    onClick: { action: true },
    onChange: { action: true },
    children: { control: false }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

const Options = () => (
  <>
    <option value='1'>Item 1</option>
    <option value='2'>Item 2</option>
    <option value='3'>Item 3</option>
  </>
)

export const Default = Template.bind({})

Default.args = {
  label: 'Category',
  children: <Options />
}

export const WithPlaceholder = Template.bind({})

WithPlaceholder.args = {
  id: 'select-with-placeholder',
  label: 'Category',
  placeholder: 'Choose a category',
  children: <Options />
}

export const ShowSearch = Template.bind({})

const DataListOptions = () => (
  <>
    <option value='Item 1' />
    <option value='Item 2' />
    <option value='Item 3' />
  </>
)

ShowSearch.args = {
  id: 'select-search',
  showSearch: true,
  label: 'Category',
  placeholder: 'Choose a category',
  children: <DataListOptions />
}

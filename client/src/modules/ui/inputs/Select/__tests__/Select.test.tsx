import React from 'react'
import renderer from 'react-test-renderer'
import { Select } from '../Select'

describe('Select', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(
      <Select label='Category' />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '../Input'

describe('Input', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(
      <Input label='Name' />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

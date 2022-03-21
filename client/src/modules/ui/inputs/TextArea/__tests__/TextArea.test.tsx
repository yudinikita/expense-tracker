import React from 'react'
import renderer from 'react-test-renderer'
import { TextArea } from '../TextArea'

describe('TextArea', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(
      <TextArea label='Commentary' />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

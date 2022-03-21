import React from 'react'
import renderer from 'react-test-renderer'
import { Radio } from '../Radio'

describe('Radio', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(
      <Radio name='basename'>First</Radio>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

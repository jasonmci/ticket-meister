import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'
import requireAuth from './requireAuth'
const HotShots = require('hot-shots');
const client = new HotShots({
  host: 'ec2-35-90-12-71.us-west-2.compute.amazonaws.com',
  port: 8125,
  prefix: 'myapp.test.',
});

describe('requireAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(requireAuth.schema).toBeTruthy()
    expect(getDirectiveName(requireAuth.schema)).toBe('requireAuth')
  })

  it('requireAuth has stub implementation. Should not throw when current user', () => {
    // If you want to set values in context, pass it through e.g.
    // mockRedwoodDirective(requireAuth, { context: { currentUser: { id: 1, name: 'Lebron McGretzky' } }})
    const mockExecution = mockRedwoodDirective(requireAuth, { context: {} })

    expect(mockExecution).not.toThrowError()
  })

})

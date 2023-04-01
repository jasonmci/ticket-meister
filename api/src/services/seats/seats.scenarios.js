export const standard = defineScenario({
  seat: {
    one: {
      data: {
        section: 'String',
        row: 'String',
        number: 'String',
        location: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zip: 'String',
          },
        },
      },
    },
    two: {
      data: {
        section: 'String',
        row: 'String',
        number: 'String',
        location: {
          create: {
            name: 'String',
            address: 'String',
            city: 'String',
            state: 'String',
            zip: 'String',
          },
        },
      },
    },
  },
})

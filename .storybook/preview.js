export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        'Welcome', ['Introduction', 'Change Log'],
        'Examples', ['Globals', 'Atoms', 'Molecules']
      ],
    },
  }
}
      
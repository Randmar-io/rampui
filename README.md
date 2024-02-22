# RampUI - Randmar.io React Component Library

## What
An easy to maintain React components library that is built on top of MUI Base (for customized components) and MUI Material. It is published to npm on every push to the master branch.

## Why
1. Randmar.io uses consistent styling across all portals.
2. DRY code across the Randmar.io.
3. Modernize the style of Randmar.io.

## Local development
### Storybook
It's recommended that each UI component has at least one Story, for ease of testing during development and for creating documentation in the future. The Stories file should sit in the root directory of the component and follow the following naming convention: `ComponentName.stories.tsx`.

Below is a sample story that can be used as a base for most components:
```
const meta: Meta<typeof ComponentName> = {
  title: 'Component Name',
  component: ComponentName,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <ComponentName />
};
```

### Testing
Each component should have at least one test to check that it renders correctly. The test file should sit in the root directory of the component and follow the following naming convention: `Component.test.tsx`.

Below is an example test file that can be used as a base for most components:
```
describe('<ComponentName />', () => {
  const children = <div data-testid="content">Content</div>;

  it('renders itself and its content correctly', () => {
    const { getByTestId } = render(
      <ComponentName data-testid="componentName">
        {children}
      </ComponentName>
    );

    const componentName = getByTestId('componentName');
    const contentElement = getByTestId('content');

    expect(componentName).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
```

### Packaging
To verify that exported components work as expected, you can package and import them locally before publishing to npm. In the rampui directory, hit the `npm link` command and in the directory of the project where you're using rampui, hit the `npm link rampui`. This will update the project's `package.json` to use rampui from your local build. Each time you run the build command, `npm run build` on rampui, the library will automatically be updated in the project you're using for testing.

## Publishing to npm
How to release a new version of rampui to npm:

- Create a pull request into the main branch
- Add the appropriate label to the pull request:
  - `release-patch`: backward compatible bug fixes
  - `release-minor`: backward compatible new features
  - `release-major`: changes that break backward compatibility
- Merge the pull request 

import React from "react";
import { Provider } from "../src/Provider/Provider";

const preview = {
  decorators: [
    (Story) => (
      <Provider color="manufacturer">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'base',
      values: [
        {
          name: 'base',
          value: '#f8f8f8',
        },
      ],
    },
  },
};

export default preview;

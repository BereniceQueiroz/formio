import baseEditForm from 'formiojs/components/_classes/component/Component.form';

// eslint-disable-next-line import/no-anonymous-default-export
export default (...extend) => {
  return baseEditForm(
    [
      {
        key: 'display',
        components: [
          {
            // You can ignore existing fields.
            key: 'placeholder',
            ignore: true,
          },
          {
            // You can ignore existing fields.
            key: 'tooltip',
            ignore: true,
          },
          {
            // You can ignore existing fields.
            type: 'textfield',
            input: true,
            weight: 12,
            label: 'Description',
            key: 'description',
            ignore: true,
          },
          {
            // Or add your own. The syntax is form.io component definitions.
            type: 'textfield',
            input: true,
            label: 'My Custom Setting',
            weight: 12,
            key: 'myCustomSetting', // This will be available as component.myCustomSetting
          },
          {
            type: 'select',
            label: 'Header',
            key: 'header',
            input: true,
            tooltip: 'Header',
            dataSrc: 'values',
            data: {
              values: [
                { label: 'H1', value: 'h1FiraCode' },
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
                { label: 'H4', value: 'h4' },
                { label: 'H5', value: 'h5' },
                { label: 'H6', value: 'h6' },
              ],
            },
          },
          {
            // Or add your own. The syntax is form.io component definitions.
            type: 'textfield',
            input: true,
            label: 'My Custom Setting2',
            weight: 12,
            key: 'myCustomSetting2', // This will be available as component.myCustomSetting
          },
        ],
      },
      {
        key: 'data',
        components: [],
      },
      {
        key: 'validation',
        components: [],
      },
      {
        key: 'api',
        components: [],
      },
      {
        key: 'conditional',
        components: [],
      },
      {
        key: 'logic',
        components: [],
      },
    ],
    ...extend
  );
};

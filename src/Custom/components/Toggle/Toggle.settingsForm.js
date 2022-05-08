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
            // Or add your own. The syntax is form.io component definitions.
            type: 'textfield',
            input: true,
            label: 'My Custom Setting',
            weight: 12,
            key: 'myCustomSetting', // This will be available as component.myCustomSetting
          },
          {
            type: 'select',
            label: 'Class',
            key: 'class',
            input: true,
            tooltip: 'Horizontal alignment for cells of the table.',
            dataSrc: 'values',
            data: {
              values: [
                { label: 'Arial400', value: 'fontArial400' },
                { label: 'Poppins500', value: 'fontPoppins500' },
                { label: 'Fira700', value: 'fontFira700' },
              ],
            },
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

import baseEditForm from 'formiojs/components/_classes/component/Component.form';

// eslint-disable-next-line import/no-anonymous-default-export
export default (...extend) => {
  return baseEditForm(
    [
      {
        key: 'display',
        components: [
          {
            type: 'select',
            label: 'Header',
            key: 'header',
            input: true,
            tooltip: 'Horizontal alignment for cells of the table.',
            dataSrc: 'values',
            data: {
              values: [
                { label: 'H1', value: 'h1' },
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
              ],
            },
          },
          {
            // Or add your own. The syntax is form.io component definitions.
            type: 'textfield',
            input: true,
            label: 'My Custom Setting',
            weight: 12,
            key: 'myCustomSetting', // This will be available as component.myCustomSetting
          },
        ],
      },
    ],
    ...extend
  );
};

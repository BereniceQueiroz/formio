import baseEditForm from 'formiojs/components/_classes/component/Component.form';

// eslint-disable-next-line import/no-anonymous-default-export
export default (...extend) => {
  return baseEditForm(
    [
      {
        key: 'display',
        components: [
          {
            key: 'placeholder',
            ignore: true,
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

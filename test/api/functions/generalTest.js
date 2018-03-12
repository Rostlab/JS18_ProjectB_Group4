const { expect } = require('chai');
const General = require('../../../api/functions/general');

describe('api.model.general', () => {
  it('should return an updateLayout action on changeTitle(title)', () => {
    const newTitle = 'Test title';

    const target = General.changeTitle(newTitle);

    expect(target).to.deep.equal([
      {
        action: 'updateLayout',
        value: {
          title: newTitle,
        },
      },
    ]);
  });
});

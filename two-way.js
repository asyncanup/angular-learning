window.appHtml = ' \
  <input ng-model="name">{{ name }} \
';

angular.module('two-way', []);

describe('tests', function() {
  it('works!', function() {
    expect(1).toBe(1);
  });
});


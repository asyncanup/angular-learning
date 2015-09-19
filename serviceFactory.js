angular.module('serviceFactory', [])
  .factory('factory', function() {
    return { value: 'factory' };
  })
  .service('service', function() {
    this.value = 'service';
  });

describe('injector', function() {
  beforeEach(module('serviceFactory'));

  it('provides services as singletons', function() {
    var service1, service2;

    inject(function(service) {
      service1 = service;
    });
    inject(function(service) {
      service2 = service;
    });
    expect(service1.value).toBe('service');
    expect(service2.value).toBe('service');
    expect(service1).toBe(service2);
  });

  it('provides factories as singletons', function() {
    var factory1, factory2;

    inject(function(factory) {
      factory1 = factory;
    });
    inject(function(factory) {
      factory2 = factory;
    });
    expect(factory1.value).toBe('factory');
    expect(factory2.value).toBe('factory');
    expect(factory1).toBe(factory2);
  });
});


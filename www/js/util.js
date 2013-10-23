//
// Change underscore template interprolation syntax from <%= %> to {{ }}
// This is needed to avoid erb's interprolation syntax
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

// Add our own utility functions to underscore
_.mixin({
  uselessMath: function (x, y, z) {
    return x + y * z;
  }
});

const {cx} = require('@bsi-cx/design-build');

module.exports = cx.style
  .withIdentifier('spacer-yijTs2')
  /*.withLabel('Size of spacing')*/
  .withLabel('Grösse des Abstands')
  .withCssClasses(
    cx.cssClass
      .withLabel('1')
      .withCssClass('pt-1'),
    cx.cssClass
      .withLabel('2')
      .withCssClass('pt-2'),
    cx.cssClass
      .withLabel('3')
      .withCssClass('pt-3'),
    cx.cssClass
      .withLabel('4')
      .withCssClass('pt-4'),
    cx.cssClass
      .withLabel('5')
      .withCssClass('pt-5'));
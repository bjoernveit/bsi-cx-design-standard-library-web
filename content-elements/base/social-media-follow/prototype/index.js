const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} elementPartId
 * @param {string} elementPartLabel
 * @returns {ContentElement}
 */
module.exports = (
  template = require('../template.twig'),
  elementId = 'social-media-follow-2MlXWB',
  elementLabel = 'Social media follow',
  elementPartId = 'social-media-follow-part-6oLWxR',
  elementPartLabel = 'Social media follow',
) => cx
  .contentElement
  .withFile(template)
  .withElementId(elementId)
  .withLabel(elementLabel)
  .withIcon(Icon.SOCIAL_FOLLOW)
  .withStyleConfigs(
    require('../../../../configs/styles/icon-color'),
    require('../../../../configs/styles/icon-hover-color'),
    require('../../../../configs/styles/icon-size'))
  .withParts(
    cx.part.socialFollow
      .withId(elementPartId)
      .withLabel(elementPartLabel));
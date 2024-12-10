'use strict';

/**
 * post-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-data.post-data');

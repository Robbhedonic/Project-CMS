'use strict';

/**
 * colour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::colour.colour');

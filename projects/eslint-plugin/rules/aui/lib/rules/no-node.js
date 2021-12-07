/**
 * SPDX-FileCopyrightText: © 2017 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: MIT
 */

const checkAUIScope = require('../utils/checkAUIScope');

const message =
	'use native methods instead, mostly found inside the Document interface';

module.exports = {
	create(context) {
		return {
			MemberExpression(node) {
				if (
					node.object.name === 'A' &&
					node.property.name === 'Node' &&
					!checkAUIScope(node)
				) {
					context.report({
						message,
						node,
					});
				}
			},
		};
	},
	meta: {
		docs: {
			category: 'Best Practices',
			description: message,
			recommended: false,
			url:
				'https://github.com/liferay/liferay-frontend-projects/issues/617',
		},
		fixable: 'code',
		schema: [],
		type: 'problem',
	},
};

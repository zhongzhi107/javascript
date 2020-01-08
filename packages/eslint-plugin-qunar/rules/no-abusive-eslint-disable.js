'use strict';
const getDocsUrl = require('./utils/get-docs-url');

const disableRegex = /^(eslint-disable(?:-next-line|-line)?)($|(\s+(@[\w-]+\/(?:[\w-]+\/)?)?[\w-]+)?)/;

const create = context => ({
	Program: node => {
		for (const comment of node.comments) {
			const value = comment.value.trim();
			const res = disableRegex.exec(value);

			if (res) { // It's a eslint-disable comment
				if (res[1] === 'eslint-disable') {
					// 禁用 eslint-disble
					context.report({
						loc: {
							start: {
								...comment.loc.start,
								column: -1
							},
							end: comment.loc.end
						},
						message: '`eslint-disable` is not allowed. Replace it with `eslint-disable-line` or `eslint-disable-next-line`'
					});
				} else if (!res[2]) {
					// 未指定禁用的规则名称
					context.report({
						loc: {
							start: {
								...comment.loc.start,
								column: -1
							},
							end: comment.loc.end
						},
						message: 'Specify the rules you want to disable.'
					});
				}
			}
		}
	}
});

module.exports = {
	create,
	meta: {
		type: 'suggestion',
		docs: {
			url: getDocsUrl(__filename)
		}
	}
};

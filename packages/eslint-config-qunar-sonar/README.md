# eslint-config-qunar-sonar

Qunar's ESLint config, following our styleguide.

## 安装
```
npm i eslint-config-qunar-sonar
```

## 使用

在 eslint 配置文件中继承 `eslint-config-qunar-sonar` ：

```js
// .eslintrc.js
module.exports = {
  extends: ['eslint-config-qunar-sonar']
};
```

```json
// .eslintrc
{
  "extends": ["eslint-config-qunar-sonar"]
}
```

## sonar rules

没找到的
- coding_rules#rule_key=javascript%3AElseIfWithoutElse

- FutureReservedWords
"eval" and "arguments" should not be bound or assigned
javascript:BoundOrAssignedEvalOrArguments  

- "switch" statements should not contain non-case labels
javascript:S1219

Array constructors should not be used
javascript:ArrayAndObjectConstructors  

HTML-style comments should not be used
javascript:HtmlComments  

Function declarations should not be made within blocks
javascript:FunctionDeclarationsWithinBlocks  

Function call arguments should not start on new lines
javascript:S1472  

Only "while", "do" and "for" statements should be labelled
javascript:LabelPlacement  




找到对应的rules
- "Symbol" should not be used as a constructor
javascript:S3834
no-new-symbol

"with" statements should not be used
javascript:WithStatement
'no-with'

Multiline string literals should not be used
javascript:MultilineStringLiterals  
'no-multi-str': 'error'

Comma operator should not be used
javascript:S878  
'no-sequences': 'error',

Function argument names should be unique
javascript:DuplicateFunctionArgument  
'no-dupe-args': 'error',

Property names should not be duplicated within a class or object literal
javascript:DuplicatePropertyName  
no-dupe-keys

Debugger statements should not be used
javascript:DebuggerStatement  
'no-debugger': 'error',

Unused local variables and functions should be removed
javascript:UnusedVariable  
no-unused-vars

Octal values should not be used
javascript:OctalNumber
'no-octal': 'error',

A "while" loop should be used instead of a "for" loop
javascript:S1264  
'sonarjs/prefer-while': 'error'

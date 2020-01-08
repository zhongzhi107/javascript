# TypeScript 编码规范

### 一、文件结构约定

某些代码示例显示具有一个或多个类似命名的伴随文件的文件。例如，`hero.component.ts`和`hero.component.spec`。使用此快捷方式可使本指南的文件结构更易于阅读和更简洁。



### 二、单一原则

#### **1. 单一功能**

- 每个文件定义一件事，例如服务或组件

- 建议将文件代码控制在 400 行

  这样的规定的好处

  ① 团队使用以及维护一个文件更加容易。

  ② 避免在一个组件在组合组件时经常发生隐藏错误，创建不必要的依赖和耦合。

#### **2. 轻量级功能函数**

- 定义小功能函数

- 建议小功能代码不超过 75 行

  这样写的好处

  ① 小功能更容易测试，特别是当他们做一件事并且用于一个目的时

  ② 小功能促进重用

  ③ 小功能更容易阅读

  ④ 小功能更易于维护

  ⑤ 小函数有助于避免与大型函数一起出现的隐藏错误(外部作用域共享变量，创建不需要的闭包或与依赖项不需要的耦合等)



### 三、命名

命名约定对于可维护性和可读性非常重要。本指南建议使用文件名和符号名称的命名约定。

#### 1. 一般命名准则

- 使用一致的类型名称，比如：`a.type.ts`, `b.type.ts`,如果这两个 ts 文件类型一致的话。

- 使用描述性名称与类型分开命名，比如：`hero-list.type.ts`

  这样命名的好处

  ① 有助于提供快速查找一致内容的方法，提高效率。
  ② 帮助更快地找到所需的代码并使其更容易理解。
  ③ 文件夹和文件的名称应清楚地表达其意图。例如 `app/heroes/hero-list.component.ts` 可能包含管理英雄列表的组件。

#### 2. 使用点和短划线

- 使用破折号分格**描述性单词**，比如：`hero-list`

- 使用点将**描述性名称**与**类型**分开

- 使用一致的类型名称，然后对类型进行描述

- 尽量使用常规的几种类型名，包括`.service`，`.component`，`.pipe`，`.module`，和`.directive`。当然也可以自己创建其他类型，但不宜太多

  这样命名的好处
  ① 类型名称提供了一种快速识别文件内容的一致方法。
  ② 使用编辑器或IDE的模糊搜索技术可以轻松找到特定的文件类型。
  ③ 使用未缩写的类型名称，例如`.service`描述性和明确性。缩写如`.srv`，`.svc`，和`.serv`可以是混乱。
  ④ 类型名称可以为任何自动化任务提供模式匹配

#### 3. 文件内容和文件名

- 对以其表示的内容命名的所有资源使用一致的名称
- 使用大写驼峰的类命名
- 内容名与文件名匹配
- 为该类型的事物附加带有常规后缀（如组件、指令、模块、管道或服务）的内容名
- 为文件名指定该类型文件的常规后缀（例如 `component.ts`、`.directive.ts` 、 `.module.ts` 、 `.pipe.ts` 或 `.service.ts` ）。

  这样命名的好处
  ① 一致的约定使快速识别和引用不同类型的资源变得容易。

  | 内容 | 文件名 |
  | - | - |
  | **export class AppComponent { }** | **app.component.ts** |
  | **export class HeroListComponent { }** | **hero-list.component.ts** |
  | **export class UserProfileService { }** | **user-profile.service.ts** |

#### 4. 服务名称

- 对以其功能命名的所有服务使用一致的名称
- 在服务类名称后面加上服务后缀。例如，获取数据或英雄的东西应该称为 `DataService` 或 `HeroService`

  一些术语是明确的服务。他们通常以“-er”结尾表示代理。您可能更喜欢命名一个记录消息的服务`Logger`而不是`LoggerService`。确定您的项目中是否同意此异常。一如既往，努力保持一致性。

  这样命名的好处

  ① 提供一种快速识别和引用服务的一致方法。

  ② 清除服务名称，例如`Logger`不需要后缀。

  ③ 服务名称，如`Credit`名词，需要后缀，如果是服务或其他东西，则不明显时应使用后缀命名。

  | 内容 | 文件名 |
  | - | - |
  | **export class HeroDataService { }** | **hero-data.service.ts** |
  | **export class CreditService { }**   | **credit.service.ts**    |
  | **export class Logger { }**          | **logger.service.ts**    |

#### 5. 引导

- 将应用程序的引导和平台逻辑放入main.ts的文件

- 在引导逻辑中包括错误处理

- 避免将程序逻辑放入组件或服务中

  这样约定的好处

  ① 遵循应用程序启动逻辑的一致约定。

  ② 遵循其他技术平台的熟悉惯例。

  ```ts
  main.ts

  import { platformBrowserDynamic } from '@project/platform-browser-dynamic'
  import { AppModule }              from './app/app.module'

  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err))
    ```



### 四、编码约定

#### 1. 类

- 使用大写驼峰命名类

  这样约定的好处

  ① 遵循传统的类名思维

  ② 类可以实例化并构造实例。按照惯例，大写字母表示可建造资源。

  ```ts
  /* bad */
  export class exceptionService {
    constructor() { }
  }

  /* good */
  export class ExceptionService {
    constructor() { }
  }
  ```

#### **2. 声明变量**

- 如果变量在其生命周期可能发生改变，尽量使用 `let` 指令

  ```ts
  // bad
  var count = 1
  if (true) {
    count += 1
  }

  // good, use the let.
  let count = 1
  if (true) {
    count += 1
  }
  ```

- 如果一个值在程序生命周期内不会改变，尽量使用 `const` 声明变量

  这样约定的好处

  ① 向开发者或读者传递值不变的信息。

  ② TypeScript 通过立即初始化和防止后续重新分配来帮助强制执行该意图。

  当然在使用 `const` 的情况下，值命名怎么选取

  ③ 与传统的常量名 `HERO_ROUTES` 相比，`heroRoutes` 更容易让人理解。

  ```ts
  const mockHeroes   = ['Sam', 'Jill'] // 建议
  const heroesUrl    = 'api/heroes'    // 建议
  const VILLAINS_URL = 'api/villains'  // 不建议
  ```

- 注意，两个 `let` 和 `const` 是块作用域

  ```ts
  // const and let 只存在于它们所定义的块中
  {
    let a = 1
    const b = 1
  }
  console.log(a) // ReferenceError
  console.log(b) // ReferenceError
  ```

#### 3. 对象

- 使用文字语法进行对象创建。

  ```ts
  // bad
  const  item  =  new  Object（）

  // good
  const  item  = {}
  ```

- 使用属性值速记。

  ```ts
  const lukeSkywalker = 'Luke Skywalker'

  // bad
  const obj = {
    lukeSkywalker: lukeSkywalker,
  }

  // good
  const obj = {
    lukeSkywalker,
  }
  ```

- 在对象声明的开头分组您的速记属性

  ```ts
  const anakinSkywalker = 'Anakin Skywalker'
  const lukeSkywalker = 'Luke Skywalker'

  // bad
  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  }

  // good
  const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
  }
  ```

- 仅引用属于无效标识符的属性

  ```ts
  // bad
  const  bad  = {
     'foo': 3,
     'bar': 4,
     'data-blah': 5
  }

  // good
  const  good  = {
    foo: 3,
    bar: 4,
    'data-blah': 5
  }
  ```

#### 4. 数组

- 使用文字语法创建数组

  ```ts
  // bad
  const items = new Array()

  // good
  const items = []
  ```

- 使用 `push` 辅助

  ```ts
  const someStack = []

  // bad
  someStack[someStack.length] = 'abracadabra'

  // good
  someStack.push('abracadabra')
  ```

- 使用数组传播 `...` 复制数组

  ```ts
  // bad
  const len = items.length
  const itemsCopy = []
  let i

  for (i = 0 i < len i += 1) {
    itemsCopy[i] = items[i]
  }

  // good
  const itemsCopy = [...items]
  ```

#### 5. 解构

- 访问和使用对象的多个属性时使用对象解构

  ```ts
  // bad
  const firstName = user.firstName
  const lastName = user.lastName

  // good
  const { firstName, lastName } = user
  ```

- 在解构时赋默认值

  ```ts
  // bad
  const firstName = user.firstName || 'Zhang'
  const lastName = user.lastName || 'San'

  // good
  const { firstName = 'Zhang', lastName = 'San' } = user
  ```

- 使用数组解构

  ```ts
  const arr = [1, 2, 3, 4]

  // bad
  const first = arr[0]
  const second = arr[1]

  // good
  const [first, second] = arr
  ```

#### 6. 字符串

- 对字符串使用单引号

  ```ts
  // bad
  const name = "Capt. Janeway"

  // good
  const name = 'Capt. Janeway'
  ```

- 不应使用字符串连接跨多行写入导致行超过 100 个字符的字符串

  ```ts
  // bad
  const errorMessage = 'This is a super long error that was thrown because \
  of Batman. When you stop to think about how Batman had anything to do \
  with this, you would get nowhere \
  fast.'

  // bad
  const errorMessage = 'This is a super long error that was thrown because ' +
    'of Batman. When you stop to think about how Batman had anything to do ' +
    'with this, you would get nowhere fast.'

  // good
  const errorMessage = 'This is a super long error that was thrown because of Batman.  When you stop to think about how Batman had anything to do with this, you would     get nowhere fast.'
  ```

- 当字符串有变量值时，建议使用 \` 符号，且 `${value}` 变量离括号不留空格

  ```ts
  // bad
  function sayHi(name) {
    return 'How are you, ' + name + '?'
  }

  // bad
  function sayHi(name) {
    return ['How are you, ', name, '?'].join()
  }

  // bad
  function sayHi(name) {
    return `How are you, ${ name }?`
  }

  // good
  function sayHi(name) {
    return `How are you, ${name}?`
  }
  ```

- 避免在字符串中使用不必要地转义字符

  ```ts
  // bad
  const foo = '\'this\' \i\s \"quoted\"'

  // good
  const foo = '\'this\' is "quoted"'
  const foo = `my name is '${name}'`
  ```

#### 7. 函数

- 使用命名函数表达式而不是函数声明

  ```ts
  // bad
  function foo() : void {
    // ...
  }

  // bad
  const foo = function () : void {
    // ...
  }

  // good
  // 词汇名称与变量引用的调用区别开来
  const short = function longUniqueMoreDescriptiveLexicalFoo() : void {
    // ...
  }
  ```

#### 8. 运算符

- 使用 `===` 替代 `==`
- 使用 `!==` 替代 `!=`

- 使用布尔值的快捷方式，但对字符串和数字进行显式比较

  ```ts
  // bad
  if (isValid === true) {
    // ...
  }

  // good
  if (isValid) {
    // ...
  }

  // bad
  if (name) {
    // ...
  }

  // good
  if (name !== '') {
    // ...
  }

  // bad
  if (collection.length) {
    // ...
  }

  // good
  if (collection.length > 0) {
    // ...
  }
  ```

- 使用大括号来创建块 `case` 和 `default` 包含词汇声明条款（例如 `let`，`const`，`function`，和`class`）

  ```ts
  // bad
  switch (foo) {
    case 1:
      let x = 1
      break
    case 2:
      const y = 2
      break
    case 3:
      function f() {
        // ...
      }
      break
    default:
      class C {}
  }

  // good
  switch (foo) {
    case 1: {
      let x = 1
      break
    }
    case 2: {
      const y = 2
      break
    }
    case 3: {
      function f() {
        // ...
      }
      break
    }
    case 4:
      bar()
      break
    default: {
      class C {}
    }
  }
  ```

- 三元不应嵌套，通常是单行表达式

  ```ts
  // bad
  const foo = maybe1 > maybe2
    ? "bar"
    : value1 > value2 ? "baz" : null

  // 拆分为2个分离的三元表达式
  const maybeNull = value1 > value2 ? 'baz' : null

  // better
  const foo = maybe1 > maybe2
    ? 'bar'
    : maybeNull

  // best
  const foo = maybe1 > maybe2 ? 'bar' : maybeNull
  ```

- 避免不必要的三元语句

  ```ts
  // bad
  const foo = a ? a : b
  const bar = c ? true : false
  const baz = c ? false : true

  // good
  const foo = a || b
  const bar = !!c
  const baz = !c
  ```

#### 9. 块级

- 对所有多行块使用大括号

  这样命名的好处

  ① 块结构清晰，便于识别。

  ① 有助于以后在块中添加代码，避免出 bug 。

  ```ts
  // bad
  if (test)
    return false

  // good
  if (test) return false

  // good
  if (test) {
    return false
  }

  // bad
  function foo() { return false }

  // good
  function bar() {
    return false
  }
  ```

- 使用 `if` 和 `else` 块级的时候，`else` 和 `if` 的 `}` 符号在同一行

  ```ts
  // bad
  if (test) {
    thing1()
    thing2()
  }
  else {
    thing3()
  }

  // good
  if (test) {
    thing1()
    thing2()
  } else {
    thing3()
  }
  ```

- 如果 `if` 块总是执行 `return` 语句，`else` 则不需要。如果有多个 `else if` 语句块，那么拆分成多个 `if` 语句。

  ```ts
  // bad
  function foo() {
    if (x) {
      return x
    } else {
      return y
    }
  }
  // good
  function foo() {
    if (x) {
      return x
    }
    return y
  }

  // bad
  function cats() {
    if (x) {
      return x
    } else if (y) {
      return y
    }
  }
  // good
  function cats() {
    if (x) {
      return x
    }
    if (y) {
      return y
    }
  }
  ```

#### 10. 控制声明

- 如果你的控制语句（ `if` ，`while` 等）变得过长或超过最大线路长度，每个（分组）的条件，可以新起一行。逻辑运算符应该位于该行行首。

  ```ts
  // bad
  if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
    thing1()
  }

  // bad
  if (foo === 123 &&
    bar === 'abc') {
    thing1()
  }

  // bad
  if (foo === 123
    && bar === 'abc') {
    thing1()
  }

  // bad
  if (
    foo === 123 &&
    bar === 'abc'
  ) {
    thing1()
  }

  // good
  if (
    foo === 123
    && bar === 'abc'
  ) {
    thing1()
  }

  // good
  if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
  ) {
    thing1()
  }

  // good
  if (foo === 123 && bar === 'abc') {
    thing1()
  }
  ```

- 不要使用选择运算符代替控制语句

  ```ts
  // bad
  !isRunning && startRunning()

  // good
  if (!isRunning) {
    startRunning()
  }
  ```

#### 11. 接口

- 使用驼峰大小写命名接口

- 尽量避免接口命名前缀是 `i`

- 使用类而不是服务和声明（组件，指令和管道）的接口

- 使用数据模型的接口

  这样约定的好处

  ① [TypeScript指南](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines) 不鼓励使用 `I` 前缀。

  ② 单独一个类的代码少于类加接口

  ③ 类可以充当接口(使用 `implements` 而不是 `extends` )

  ```ts
  /* bad */

  import { Injectable } from '@project/core'
  import { IHero } from './hero.model.avoid'

  @Injectable()
  export class HeroCollectorService {
    hero: IHero
    constructor() { }
  }

  /* good */
  import { Injectable } from '@project/core'
  import { Hero } from './hero.model'

  @Injectable()
  export class HeroCollectorService {
    hero: Hero
    constructor() { }
  }
  ```

#### 12. 属性和方法

- 使用小驼峰 `camelCase`命名属性和方法

- 避免使用下划线 `_` 为私有属性和方法添加前缀

  这样约定的好处

  ① 遵循传统的属性和方法思维

  ② TypeScript 工具可以轻松的识别私有与公共属性的方法

  ```ts
  /* bad */

  import { Injectable } from '@project/core'

  @Injectable()
  export class ToastService {
    message: string
    private _toastCount: number

    hide() {
      this._toastCount--
      this._log()
    }
    show() {
      this._toastCount++
      this._log()
    }

    private _log() {
      console.log(this.message)
    }
  }
  ```

  ```ts
  /* good */

  import { Injectable } from '@project/core'

  @Injectable()
  export class ToastService {
    message: string

    private toastCount: number

    hide() {
      this.toastCount--
      this.log()
    }

    show() {
      this.toastCount++
      this.log()
    }

    private log() {
      console.log(this.message)
    }
  }
  ```

#### 13. 依赖包引入

- 先引入第三方依赖，再引入工程中的文件
  ```ts
  /* bad */
  import { ExceptionService } from '../../core'
  import { HttpClient } from '@project/common/http'
  ```

  ```ts
  /* good */
  import { HttpClient } from '@project/common/http'
  import { ExceptionService } from '../../core'
  ```

- 尽量只引入所需的方法
  ```ts
  /* bad */
  import fs from 'fs'

  if (fs.existsSync('xx'))
  ```

  ```ts
  /* good */
  import { existsSync } from 'fs'

  if (existsSync('xx'))
  ```

- 引用代码块和程序代码之间留一个空行
  ```ts
  /* bad */
  import { existsSync } from 'fs'
  if (existsSync('xx'))
  ```

  ```ts
  /* good */
  import { existsSync } from 'fs'

  if (existsSync('xx'))
  ```

  这样约定的好处

  ① 便于分辨第三方依赖包和自己写的文件

  ② 减少代码量

#### 14. 注释

- 使用 `/** ... */` 多行注释

  ```ts
  // bad
  // make() returns a new element
  // based on the passed in tag name
  //
  // @param {String} tag
  // @return {Element} element
  function make(tag) {

    // ...

    return element
  }

  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {

    // ...

    return element
  }
  ```

- 使用 `//` 的单行注释。将单行注释放在注释主题上方的换行符上。在注释前面加一个空行，除非它在块的第一行

  ```ts
  // bad
  const active = true  // is current tab

  // good
  // is current tab
  const active = true

  // bad
  function getType() {
    console.log('fetching type...')
    // set the default type to 'no type'
    const type = this.type || 'no type'

    return type
  }

  // good
  function getType() {
    console.log('fetching type...')

    // set the default type to 'no type'
    const type = this.type || 'no type'

    return type
  }

  // also good
  function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type'

    return type
  }
  ```

- 所有注释开始留出一个空格，以便于阅读

  ```ts
  // bad
  //is current tab
  const active = true

  // good
  // is current tab
  const active = true

  // bad
  /**
   *make() returns a new element
   *based on the passed-in tag name
   */
  function make(tag) {

    // ...

    return element
  }

  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {

    // ...

    return element
  }
  ```

- 使用 `FIXME:` 和 `TODO:` 记录代码缺陷和优化点

  ```ts
  class Calculator extends Abacus {
    constructor() {
      super()

      // FIXME: shouldn’t use a global here
      total = 0
    }
  }

  class Calculator extends Abacus {
    constructor() {
      super()

      // TODO: total should be configurable by an options param
      this.total = 0
    }
  }
  ```

#### 15. 空格使用

- 使用两个空格作为标准缩进

  ```ts
  // bad
  function  foo（）{
  ∙∙∙∙ let name
  }

  //坏
  函数 bar（）{
  ∙ 让名字
  }

  // good
  function  baz（）{
  ∙∙ let name
  }
  ```

- 在大括号左边使用一个空格

  ```ts
  // bad
  function test(){
    console.log('test')
  }

  // good
  function test() {
    console.log('test')
  }

  // bad
  dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  })

  // good
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  })
  ```

- 在控制语句（ `if`，`while` 等）左括号前放置一个空格。在函数调用和声明中，参数列表和函数名之间不能放置空格

  ```ts
  // bad
  if(isJedi) {
    fight ();
  }

  // good
  if (isJedi) {
    fight();
  }

  // bad
  function fight () {
    console.log ('Swooosh!');
  }

  // good
  function fight() {
    console.log('Swooosh!');
  }
  ```

- 运算符前后加空格

  ```ts
  // bad
  const x=y+5;

  // good
  const x = y + 5;
  ```

- 函数参数逗号后加空格

  ```ts
  // bad
  const a = (b,c) => {}

  // good
  const a = (b, c) => {}
  ```


### 五、应用程序结构

所有应用程序的代码都在一个名为的文件夹中 `src` 。所有内容均为每个文件一个资产。每个组件，服务和管道都在其自己的文件中。所有第三方供应商脚本都存储在另一个文件夹中，而不是 `src` 文件夹中。你没有写它们，你不希望它们混乱 `src` 。使用本指南中文件的命名约定。

#### 1. LIFT

- 对应用程序进行结构设计的目的：快速定位代码、快速识别代码、尽可能保持最平坦的结构并尽量保持干燥。
- 定义遵循这四个基本准则的结构，按重要性顺序列出。

#### 2. 代码定位

- 要代码定位直观，简单，快捷

  为了高效工作，您必须能够快速查找文件，尤其是当您不知道（或不记得）文件名时。将相关文件保持在一个直观的位置，可以节省时间。一个描述性的文件夹结构为您和追随您的人们带来了不同的世界。

#### 3. 文件识别

- 文件命名要和内容关联起来，方便查找

- 对文件添加描述，保持文件内容确切关联一个组件

- 避免在一个文件使用多个组件，服务。

- 文件名尽量不要使用缩写，要能清楚直观的表示其相关内容

  这样写的好处

  能更清楚的搜索想要的功能代码。而且长文件名比短而精确的的缩写文件名好

#### 4. 文件夹目录结构

- 尽可能保持平的文件夹结构，尽量避免个别文件夹层次过深

- 建议当文件夹达到七个或更多文件时创建子文件夹

- 配置IDE以隐藏一些不相关文件，如生成的.js和.js.map文件等

  这样写的好处

  扁平结构易于扫描，但文件夹数量尽量控制在7个内，最多不超过9个。过多的文件夹会从心理上让人不舒适

#### 5. DRY(Don’t Repeat Yourself)

- 避免做重复的工作，减少信息重复

- 每一个知识或逻辑必须在一个系统中有一个单一的、明确的表示

  这样写的好处

  节省了时间和精力，易于维护。当然也不能过分的追求DRY而牺牲的代码可读性

#### 6. 总体结构指南

- 从小处着手，但要记住应用程序的发展方向

- 对执行情况有一个短期的看法和一个长期的远景

- 将应用程序所有的代码放在 `src` 文件夹中

- 但组件附带多个文件时（ `*.ts` ，`*.spec` 等），为这些文件创建一个文件夹

  这样写的好处

  有助于保持应用程序结构在早期阶段小而易于维护，同时随着应用程序的增长而易于发

  一下示例一个项目文件结构

  ```markdown
  <项目根>
    -src
      -app
  	  -core       //核心
  	     core.module.ts
  	     exception.service.ts|spec.ts
  	     user-profile.service.ts|spec.ts >

  	  -heroes     //和hero模块相关的代码实现
  	    -hero
  	       hero.component.ts
  	    -hero-list
  	       hero-list.component.ts
  	    -shared
  	       hero.model.ts
  	       hero.service.ts|spec.ts
  	     heroes.component.ts|spec.ts
  	     heroes.module.ts
  	     heroes-routing.module.ts

  	  -shared    //逻辑功能共享模块
  	     shared.module.ts
  	     init-caps.pipe.ts|spec.ts
  		 text-filter.component.ts|spec.ts
  		 text-filter.service.ts|spec.ts

  	  -villains    //其他代码实现（和hero同级的功能）
  	    -villain
  	       ...
  	    -villain-list
  	       ...
  	    -shared
  	       ...
  	     villains.component.ts|spec.ts
  		 villains.module.ts
  		 villains-routing.module.ts

  	   app.component.ts|spec.ts
  	   app.module.ts
         app-routing.module.ts
      main.ts
      ...
  -node_modules/...
  ```

#### 7. 按功能结构排列文件夹

- 创建文件夹以它们的功能区命名

  这样写的好处

  ① 开发人员可以找到代码并一目了然地识别每个文件代表的内容。结构尽可能平坦，没有重复冗余的名称。

  ② 当存在大量文件（例如 10+）时，使用一致的文件夹结构来会更容易定位它们

#### 8. 核心模块设计

- 在核心模块的文件夹下创建一个名为 `CoreModule` 的模块 ，比如 `core/core.module.ts` defines `CoreModule`
- 将在整个应用程序中共享的单例服务的一个实例放置在 `coreModule` 中，比如 `ExceptionService` 和`LoggerService`
-

#### 9. 功能模块设计

- 将功能模块放置在命名相同的区域内，比如 heroes 功能模块放置在 `app/heroes` 文件夹下

- 功能模块的命名要和功能区文件夹的名称相对应，比如 `app/heroes/heroes.module.ts`

- 功能模块的内容命名也要和功能区文件夹相对应，比如 `app/heroes/heroes.module.ts` 定义 `HeroesModule`

  这样写的好处

  ① 功能模块独立开来，可以从其他模块公开或隐藏其实现。

  ② 功能模块可以识别组成功能区域的不同集合组件

  ③ 功能模块定义了特定功能与其他应用程序功能之间的明确界限

  ④ 不同功能模块的开发可以分配给不同的团队，易于合作开发

  ⑤ 可以进行单一模块的测试

#### 10. 共享功能模块设计

- 不要在 `shared` 文件下给一个共享功能模块命名为 `SharedModule`
- 如果一个组件，指令等功能会被其他的功能模块重复引用，那么考虑将其设计成通用功能模块
- 在整个应用程序中引用共享模块内容时，建议使用 `SharedModule` 命名
- 在共享模块中导入所有依赖的其他资源
- 在共享模块中声明所有组件，指令和管道
- 从共享模块导出其他功能模块所需要使用到的所有符号

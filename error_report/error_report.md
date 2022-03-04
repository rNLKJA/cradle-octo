![img.png](img.png)

涉及文件：
- config/session.config.ts session的存储
- controller/sessionController.ts
- models/database.ts
- models/session/sessionStorageSchema.ts

可能是MongDB数据库的Model没有在链上；
我还看到在Schema文件中的key要求是全小写，总之不是很清楚

---
**2022-03-04** Fix Log 
rNLKJA

1. 检查sessionController.ts文件，删除sessionController.ts 10行，17行 export 语法。
2. 更改session.config.ts导入，将 `import {setSession} from'../controller/session/sessionController'` 更变为 `const sessionController = require('../controller/session/sessionController')`。
3. 检查Mongoose注册问题，经查MongoDB无对应 collection，创建 collection sessionStorage。
4. 尝试添加sessionRouter，经查此问题可能是是因为程序先调用schema后导入所造成的问题，尝试更改调用数据库的位置。错误更变 express-session API, `TypeError: store.on is not a function`。
5. 将13, 14, 39, 40有关session方程移除，程序正常运行。

后续问题及解决思路：

需要重新实现session存储方式：
- session.config.ts, sessionConfig 中，属性store可能不存在，需要另外调用已知路由储存当前session。
- 或session.config.ts, sessionConfig中，属性store必须为boolean，不为callback function，可选择性修改sessionController以储存用户session。

存储session是否需要加密问题：
- 可尝试使用jwt或bycrpyt对数据进行加密处理进行存储，进一步增加数据安全性。
- 或将session直接存储于服务器本地


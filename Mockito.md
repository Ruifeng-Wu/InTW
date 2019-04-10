### Mockito

"mock"在软件开发中通常理解为模拟对象，其目的和作用就是模拟一些在应用中不容易构造或者比较复杂的对象，从而把测试与测试边界以外的对象隔离开。Mockito就是一个优秀的用于单元测试的mock框架。

### 配置Mockito

build.gradle文件中加入依赖即可

```
dependencies {
...
testCompile 'org.mockito:mockito-all:1.9.5'
...
}
```

### Mockito的使用

[测试用例](https://github.com/Ruifeng-Wu/student-command-system/blob/master/src/test/java/com/tw/MockitoTest.java)


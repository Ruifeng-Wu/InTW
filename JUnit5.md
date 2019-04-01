### 单元测试之JUnit5

JUnit 5=JUnit Platform+JUnit Jupiter+JUnit Vintage

**JUnit Platform**：基于JVM的运行测试框架

**JUnit Jupiter**：Jupiter子项目提供了一个TestEngine平台上运行基于Jupiter的测试

**JUnit Vintage**：提供了一个TestEngine在平台上运行JUnit 3/4的测试

依赖包：

```
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter-api</artifactId>
    <version>5.0.3</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
```

##### 单元测试

**@Test**注解标记方法为测试方法，JUnit5能够标记包可见的访问级别

初始化与销毁

**@BeforeAll** 在所有测试和@BeforeEach之前，执行一次

**@BeforeEach** 每个测试之前执行

**@AfterEach** 每个测试之后执行

**@AfterAll** 在所有测试和@AfterEach之后，执行一次

**@BeforeAll**/**@AfterAll** 不会创建实例，需要定义为静态方法

**@Ignore** 忽略的测试方法

**@Rule** 重新定制测试类中方法的行为

**@FixMethodOrder** 指定测试类中方法的执行顺序

**@RunWith** 指定测试类使用某个运行器

**@Parameters** 指定测试类的测试数据集合

##### 断言

采用断言保证结果是自己想要的结果

断言失败的描述信息可以包装在lambda表达式中

assertEquals() 断言传入的预期值与实际值相等

assertNotEquals() 断言传入的预期值与实际值不相等

assertTrue() 断言条件为真

assertFalse 断言条件为假

assertNull 断言传入的对象不为空

assertNotNull 断言传入的对象为空

assertSame() 断言两个引用对象是否为同一个，等价“==”

assertSame() 断言两个引用对象是否为不同对象，等价“!=”

assertArrayEquals() 断言传入的预期数组与之际数组相等

assertThat() 断言实际值是否满足指定的条件


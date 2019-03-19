###  Jdk8新特性()->Lambda表达式

JDK8已经发布了好几年了，但对于它的新特性——Lambda表达式的了解依然仅仅停留在名字上。直到昨天看到buddy为演示Java集合操作制作的demo（很遗憾没能看到现场操作T_T），才决定重新学习下这个为Java带来函数式编程方式的“新”语法。

Java传统语法

```
1 new Thread(new Runnable() {
2     @Override
3     public void run() {
4         System.out.println("Hello World!");
5     }
6 });
```

Lambda表达式

```
new Thread(() -> System.out.println("Hello World!"));
```

Lambda表达式将匿名内部类作为参数进行传递。

**Lambda表达式的一般形式**

(参数) ->  函数体

**Lambda表达式的使用场景**

能够接收Lambda表达式的参数类型，是一个只包含一个方法的**接口**（函数接口）。

能支持以下三种情形：

- 无参数，无返回值；
- 有参数，无返回值。
- 有参数，有返回值。

### Jdk8新特性::方法引用

- 构造器引用

​	Class::new或Class< T >::new

- 方法引用

​	Class::method

- 对象引用方法

​	instance::method

### stream流

- map：转换流，将一种类型的流转换为另外一种流
- filter：过滤流，过滤流中的元素
- flapMap：拆解流，将流中每一个元素拆解成一个流
- sorted：对流进行排序
- skip：跳过前面的n个元素
- count：计算数量
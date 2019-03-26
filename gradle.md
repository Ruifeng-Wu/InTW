### Gradle

最近在公司的作业中接触到了Gradle，相比于maven繁琐的XML配置方式，Gradle的声明方式更加简洁。

##### 一、Gradle是什么

Gradle是一种构建工具，帮助我们构建包括变异、打包等过程。



##### 二、Gradle的结构

1. **Project与Task**——在Gradle中，每一个待构建的工程是一个Project，构建一个Project需要执行一系列Task，比如编译、打包这些构建过程的子过程都对应着一个Task。

2. **插件**——负责定义与执行Task。

   使用IDEA创建一个Gradle的java项目，在build.gradle中会默认采用java plugin构建项目。

```
apply plugin: 'java'
```

##### 三、 Gradle配置文件

- **gradle.properties**: 这个文件中定义了一系列供build.gradle使用的常量，比如keystore的存储路径、keyalias等等。
- **gradlew与gradlew.bat**: gradlew为Linux下的shell脚本，gradlew.bat是Windows下的批处理文件。gradlew是gradle wrapper的缩写，也就是说它对gradle的命令进行了包装，比如我们进入到指定Module目录并执行“gradlew.bat assemble”即可完成对当前Module的构建（Windows系统下）。
- **local.properties**: 这个文件中定义了一些本地属性，比如SDK的路径。
- **settings.gradle**: 用于初始化以及工程树的配置。假如我们的项目包含了不只一个Module时，我们想要一次性构建所有Module以完成整个项目的构建，这时我们需要用到这个文件。比如我们的项目包含了ModuleA和ModuleB这两个模块，则这个文件中会包含这样的语句：include ':ModuleA', ':ModuleB'。
- **gradle-wrapper**：对Gradle的包装，便于统一Gradle的版本

##### 四、构建脚本

- build.gradle中指定了整个项目的构建规则。

- apply plugin：引入插件

  1. apply plugin

  2. apply from

- buildscript：声明Gradle自身需要的资源。如依赖项、第三方插件、maven仓库地址等。

- ext：自定义属性。

- repositories：仓库。jcenter()、maven()、google()就是第三方仓库的托管平台。

  compile：编译时的依赖

  runtime：运行时的依赖

  testComplie：测试编译时的依赖

  testRuntime：测试运行时的依赖

  archives：项目发布构建依赖

  default：默认依赖配置

- dependencies：配置依赖的classpath

- allprojects：配置多项目共同的依赖


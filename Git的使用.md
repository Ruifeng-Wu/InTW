## Git（分布式版本控制系统）的使用

### Git与SVN的主要区别

SVN是集中式版本控制系统，版本库是集中放在中央服务器的，必须联网才能工作。

Git是分布式版本控制系统，那么它就没有中央服务器的，每个人的电脑就是一个完整的版本库。多个人协作时，只需把各自的修改推送给对方，就可以互相看到对方的修改了。

### Git的操作

1. 创建版本库（repository）

   在git base下

   **pwd**命令可以显示当前目录

   **cd**打开目录

   **mkdir**创建目录

   **cat xxx**可以查看文件内容

   **git init**把当前目录变成git可以管理的仓库（当前目录下会生成.git的目录用来跟踪管理版本）

2. 添加文件到版本库中

   使用命令**git add xxx.xxx**添加文件到暂存区

   使用命令**git commit**告诉Git提交改动到仓库

   通过命令**git status**来查看是否还有文件未提交

   使用命令**git diff xxx.xxx**查看文件的修改内容

3. 版本回退

   使用命令**git log**可以查看commit的历史记录

   使用命令**git log –pretty=oneline**可以将历史信息显示在一行

   使用命令**git reset  --hard HEAD^**可以回退到上一个版本（每一个^都代表回退一个版本，如：回退到上上个版本则是^^）

   当要回退多个版本时，可以使用**git reset  --hard HEAD~100**命令（数字表示回退多少个版本）

   使用命令**git reset  --hard 版本号**，可以回退都指定的版本。

   使用命令**git reflog**可以获取版本号

### 工作区与暂存区的区别

工作区：就是你在电脑上看到的目录，或者以后需要再新建的目录文件等等都属于工作区范畴。

版本库(Repository)：工作区有一个隐藏目录.git,这个不属于工作区，这是版本库。其中版本库里面存了很多东西，其中最重要的就是stage(暂存区)，还有Git为我们自动创建了第一个分支master,以及指向master的一个指针HEAD。

使用Git提交文件到版本库有两步：

　　第一步：是使用**git add xxx**把文件添加进去，实际上就是把文件添加到暂存区。

　　第二步：使用**git commit**提交更改，实际上就是把暂存区的所有内容提交到当前分支上。

### Git撤销修改和删除文件的操作

##### 一、撤销修改

除了使用重新commit和直接恢复到上一个版本的reset操作外

使用命令**git checkout  -- xxx.xxx**可以丢弃工作区的修改

这里有两种情况：

1. readme.txt自动修改后，还没有放到暂存区，使用 撤销修改就回到和版本库一模一样的状态。
2. 另外一种是readme.txt已经放入暂存区了，接着又作了修改，撤销修改就回到添加暂存区后的状态。

*注意：命令**git checkout -- readme.txt** 中的 -- 很重要，如果没有 -- 的话，那么命令变成创建分支了。*

##### 二、删除文件

使用命令**rm xxx.xxx**可以删除指定的文件，之后可以commit从版本库中彻底删掉此文件

### 远程仓库

##### 添加远程库

本地Git仓库和github仓库之间的传输是通过SSH加密，所以需要一点设置：

　　第一步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果有的话，直接跳过此如下命令，如果没有的话，打开命令行，输入如下命令：**ssh-keygen  -t rsa –C youremail@example.com**。id_rsa是私钥，id_rsa.pub是公钥。

​	第二步：登录github,打开” settings”中的SSH Keys页面，然后点击“Add SSH Key”,填上任意title，在Key文本框里黏贴id_rsa.pub文件的内容。点击 Add Key，你就应该可以看到已经添加的key。

​	第三步：在Github创建好仓库后，使用命令git remote add origin https://github.com/用户名/仓库名.git 为Git添加远程仓库

​	第四步：把本地库的内容推送到远程，使用 git push命令实际上是把当前分支master推送到远程。第一次推送master分支时，加上了 –u参数（**git push -u origin master**），Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

　　从现在起，只要本地作了提交，就可以通过如下命令：**git push origin master**，把本地master分支的最新修改推送到github上了，现在你就拥有了真正的分布式版本库了。

##### 克隆远程库

使用命令**git clone https://github.com/用户名/仓库名**，克隆一个本地库

### 创建于合并分支（时间线）

　　查看分支：**git branch**

　　创建分支：**git branch name**

　　切换分支：**git checkout name**

　　创建+切换分支：**git checkout –b name**

　　合并某分支到当前分支：**git merge name**

　　删除分支：**git branch –d name**

​	合并dev分支，使用命令 **git merge –no-ff  -m “注释” name**保存分支信息

​	隐藏工作现场：**git stash**

​	查看工作现场：**git stash list**

​	恢复工作现场：**git stash apply**，这种方式stash内容需要通过git stash drop来删除，或者使用git stash pop在恢复 的同时删除stash的内容。

### 多人协作

​	![](https://img-blog.csdn.net/20180624174835949?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NodVNoZW5nMDAwNw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

​	查看远程库的信息：**git remote**

​	查看远程库的详细信息：**git remote -v**

​	推送分支：**git push origin 分支名**

​	创建本地dev分支：**git checkout  –b dev origin/dev**

​	设置分支本地dev分支与远程origin/dev分支的连接：**git branch --set -upstream dev origin/dev**

##### 多人协作工作模式：

1. 首先，可以试图用**git push origin branch-name**推送自己的修改.
2. 如果推送失败，则因为远程分支比你的本地更新早，需要先用git pull试图合并。
3. 如果合并有冲突，则需要解决冲突，并在本地提交。再用git push origin branch-name推送。

### Git基本常用命令如下：

　　**mkdir**：         XX (创建一个空目录 XX指目录名)

　　**pwd**：          显示当前目录的路径。

　　**git init**          把当前的目录变成可以管理的git仓库，生成隐藏.git文件。

　　**git add XX**       把xx文件添加到暂存区去。

　　**git commit –m “XX”**  提交文件 –m 后面的是注释。

　　**git status**        查看仓库状态

　　**git diff  XX**      查看XX文件修改了那些内容

​	**git log**          查看历史记录

　　**git reset  --hard HEAD^** 或者 **git reset  --hard HEAD~** 回退到上一个版本

　　(如果想回退到100个版本，使用git reset –hard HEAD~100 )

　　**cat XX**         查看XX文件内容

　　**git reflog**       查看历史记录的版本号id

　　**git checkout -- XX**  把XX文件在工作区的修改全部撤销。

　　**git rm XX**          删除XX文件

　　**git remote add origin https://github.com/用户名/仓库名** 关联一个远程库

　　**git push –u(第一次要用-u 以后不需要) origin master** 把当前master分支推送到远程库

　　**git clone https://github.com/用户名/仓库名** 从远程库中克隆

　　**git checkout –b dev**  创建dev分支 并切换到dev分支上

　　**git branch**  查看当前所有的分支

　　**git checkout master** 切换回master分支

　　**git merge dev**    在当前的分支上合并dev分支

　　**git branch –d dev** 删除dev分支

　　**git branch name**  创建分支

　　**git stash** 把当前的工作隐藏起来 等以后恢复现场后继续工作

　　**git stash list** 查看所有被隐藏的文件列表

　　**git stash apply** 恢复被隐藏的文件，但是内容不删除

　　**git stash drop** 删除文件

　　**git stash pop** 恢复文件的同时 也删除文件

　　**git remote** 查看远程库的信息

　　**git remote –v** 查看远程库的详细信息

　　**git push origin master**  Git会把master分支推送到远程库对应的远程分支上
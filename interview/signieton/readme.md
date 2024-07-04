# 设计模式中的单例模式

时间Storage类 使得该类为单例 基于localstorage进行封装 实现setItem(key,value) getItem(key) removeItem(key) clear()方法

- 类适合封装

- 有些类只实例化一次
    无论new多少次 拿到的都是同一个对象 

- es6 提供了 class/extends/super/static 等新特性
    适合企业级大型项目开发
- 首先要拿到实例 避免多次new 不直接new 而是通过单例模式拿到实例
- 单例模式 通过static方法实现
- 是否实例化过 如果实例化过 直接返回 如果没有实例化过 实例化后再返回 静态属性(构造函数对象的属性)

cookie/localstorage 属于浏览器 domain级别的存储

## 模块化
- module是大型项目的核心
- 而js早起没有模块化 script 顺序引入 会阻塞 并运行
- es6 前端越来越复杂 上标准模块化
    有import export
- 先引入再使用

## 单例模式
- 传统面向对象 static 方法
- Js way 将instance放在闭包中Stirage.getInstance() 闭包不会污染全局变量
    在reaact/todoList中的数据存储
- componentDidUpdata() 利用了更新的生命周期函数，只需要写一次 react编程方式 
- addTodo setState Js ->渲染引擎 ->
- componentDidUpdata 局部DOM已经更新了  、再去执行 localStorage


```javascript
## 1. 单例模式的定义
单例模式是一种创建型设计模式，它保证一个类只有一个实例，并提供一个访问该实例的全局访问点。单例模式有以下几个特点：
- 单例类只有一个实例对象；
- 该单例对象必须由单例类自行创建；
- 单例类对外提供一个访问该单例的全局访问点。

## 2. 单例模式的实现方式
单例模式的实现方式有以下几种：
- 饿汉式单例模式
- 懒汉式单例模式
- 双重检查锁单例模式
- 静态内部类单例模式
- 枚举单例模式

### 2.1 饿汉式单例模式
饿汉式单例模式是指在类加载的时候就创建单例对象，所以也叫做饿汉式单例模式。饿汉式单例模式的实现代码如下：
```java
public class Singleton {
    private static final Singleton instance = new Singleton();
    private Singleton() {}
    public static Singleton getInstance() {
        return instance;
    }
}
```
饿汉式单例模式的优点是实现简单，线程安全，缺点是在类加载的时候就创建单例对象，如果单例对象占用资源多，会导致类加载的时候占用过多的资源。

### 2.2 懒汉式单例模式
懒汉式单例模式是指在第一次调用获取单例对象的方法时才创建单例对象，所以也叫做懒汉式单例模式。懒汉式单例模式的实现代码如下：
```java
public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
懒汉式单例模式的优点是实现简单，缺点是线程不安全，如果多个线程同时调用获取单例对象的方法，可能会创建多个单例对象。

### 2.3 双重检查锁单例模式
双重检查锁单例模式是指在获取单例对象的方法中使用双重检查锁来保证线程安全，双重检查锁单例模式的实现代码如下：
```java
public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```
双重检查锁单例模式的优点是实现简单，线程安全，缺点是在JDK1.5之前的版本中，volatile关键字的实现可能会导致双重检查锁失效。

### 2.4 静态内部类单例模式
静态内部类单例模式是指在静态内部类中创建单例对象，所以也叫做静态内部类单例模式。静态内部类单例模式的实现代码如下：
```java
public class Singleton {
    private Singleton() {}
    private static class SingletonHolder {
        private static final Singleton instance = new Singleton();
    }
    public static Singleton getInstance() {
        return SingletonHolder.instance;
    }
}
```
静态内部类单例模式的优点是实现简单，线程安全，缺点是在第一次调用获取单例对象的方法时才创建单例对象。

### 2.5 枚举单例模式
枚举单例模式是指使用枚举类型来实现单例模式，枚举单例模式的实现代码如下：
```java
public enum Singleton {
    INSTANCE;
}
```
枚举单例模式的优点是实现简单，线程安全，缺点是不支持懒加载。

## 3. 单例模式的应用场景
单例模式适用于以下几种场景：
- 需要频繁创建的对象；
- 需要全局访问的对象；
- 需要缓存的对象。

## 4. 单例模式的优缺点
单例模式的优点是：
- 保证一个类只有一个实例；
- 提供一个访问该实例的全局访问点；
- 实现简单。

单例模式的缺点是：
- 无法继承；
- 无法实现懒加载。

## 5. 单例模式的注意事项
单例模式的注意事项有以下几点：
- 线程安全：单例模式需要保证线程安全，可以使用双重检查锁或静态内部类来实现线程安全；
- 序列化：单例模式需要实现Serializable接口，可以使用枚举单例模式来实现序列化；
- 反射：单例模式需要防止反射攻击，可以在构造方法中判断是否已经创建单例对象。

## 6. 单例模式的扩展
单例模式的扩展有以下几种：
- 懒汉式单例模式的线程安全实现；
- 饿汉式单例模式的延迟加载实现；
- 双重检查锁单例模式的优化实现；
- 静态内部类单例模式的序列化实现；
- 枚举单例模式的反射攻击实现。

## 7. 单例模式的实际应用
单例模式在JDK中的应用有以下几种：
- java.lang.Runtime类；
- java.awt.Desktop类；
- java.lang.System类。

## 8. 单例模式的相关设计模式
单例模式与工厂模式、建造者模式、原型模式、适配器模式、装饰器模式、代理模式、外观模式、享元模式、模板方法模式、策略模式、观察者模式、状态模式、责任链模式、命令模式、访问者模式、中介者模式、备忘录模式、解释器模式等设计模式都有关联。

## 9. 单例模式的实现源码
单例模式的实现源码如下：
```java
public class Singleton {
    private static volatile Singleton instance;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```
以上就是单例模式的设计原则、实现方式、应用场景、优缺点、注意事项、扩展、实际应用、相关设计模式和实现源码。

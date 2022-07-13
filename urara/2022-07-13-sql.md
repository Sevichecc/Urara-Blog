---
title: SQL 基础笔记
created: 2022-07-13
summary: 关于增改删查的方式
tags:
  - SQL
---

- 课程：[The Complete 2022 Web Development Bootcamp](https://www.udemy.com/share/1013gG3@wP9ybulEki65OWpaP1-gXEeRPJl4aj8eZNX7YYjFOgXlrxBGQyU6NniyJf2PqDI1EA==/)
- 工具：[SQL Online Compiler - for Data Science](https://sqliteonline.com)
- 教程：[SQL 教程 | 菜鸟教程](https://www.runoob.com/sql/sql-tutorial.html)

## SQL vs. NOSQL

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/b67c213a42175acc16073cbad16acaf4.png)

![](https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/01b1f9ba940268cf5c4108d9a4a94dc0.png)

- SQL
  - 注重结构
- NOSQL
  - 更灵活，也更稳健
  - MoogoDB

## CRUD

### Create

```sql
CREATE TABLE product(
 	id Int NOT NULL,
  	name STRING,
  	price MONEY,
  	PRIMARY KEY(id)
  )
```

- `NOT NULL` 当此值为 null 时，不创建列
- `PRIMARY KEY(id)` 主键必须包含唯一的值，这个不能有重复的值

**插入数值**
第一种形式无需指定要插入数据的列名，只需提供被插入的值即可

```sql
INSERT INTO _table_name_
VALUES (_value1_,_value2_,_value3_,...);
```

第二种形式需要指定列名及被插入的值：

```sql
INSERT INTO _table_name_ (_column1_,_column2_,_column3_,...)
VALUES (_value1_,_value2_,_value3_,...);
```

### Read

SELECT 语句用于从数据库中选取数据。

```sql
SELECT _column_name_,_column_name_
FROM _table_name_;
```

```sql
SELECT * FROM _table_name_;
```

`*` 表示选择全部

可以用`WHERE` 筛选选择结果，如：

```sql
SELECT _column_name_,_column_name_
FROM _table_name_
WHERE _column_name operator value_;
```

### Update

```sql
UPDATE _tablse_name_
SET _column1_=_value1_,_column2_=_value2_,...
WHERE _some_column_=_some_value_;
```

**ALTER TABLE 语句用于在已有的表中添加、删除或修改列。**
如需在表中添加列，请使用下面的语法:

```sql
ALTER TABLE table_name
ADD column_name datatype
```

如需删除表中的列，请使用下面的语法（请注意，某些数据库系统不允许这种在数据库表中删除列的方式）：

```sql
ALTER TABLE table_name
DROP COLUMN column_name
```

### Destory

```sql
DELETE FROM _table_name_
WHERE _some_column_=_some_value_;
```

## Understanding SQL Relationships, Foreign Keys and Inner Joins

### FOREIGN KEY

- 用`FOREIGN KEY` 来和外部表单链接
- 一个表中的 FOREIGN KEY 指向另一个表中的 UNIQUE KEY(唯一约束的键)。

### INNER JOIN

选择相应列并合并表，`ON`后面写的是条件

```sql
SELECT _column_name(s)_
FROM _table1_
INNER JOIN _table2_
ON _table1.column_name_=_table2.column_name_;
```

或：

```sql
SELECT _column_name(s)_
FROM _table1_
JOIN _table2_
ON _table1.column_name_=_table2.column_name_;
```


# SQL运行系统

## 简介 
运行已配置完成的SQL，输出结果的系统。

## 代码仓库位置
https://github.com/diandainfo/run_sql_system

## 项目依赖
1、mysql表结构
- 创建`run_sql_system`数据库
- 运行sql文件夹中所有sql文件

## 启动方式
```
npm install 
node app.js
```

## 项目结构

## 表结构说明

### SQL语句表 - rss_run_sql

|字段|类型|长度|comment|
|:---|:---|:---|:---|
|`rrs_id`|int|11|自增主键，无实义|
|`rrs_title`|varchar|255|任务说明|
|`rrs_sql`|varchar|255|需要运行的sql语句，其中使用`${{}}`来标识此为动态参数|
|`rrs_auth`|int|11|权限等级，或为执行可信度，是否会造成系统数据错误，或是否会使用大量系统资源|
|`rrs_author`|int|11|需求方，此条语句用于完成何部门的任务|
|`rrs_result`|int|11|执行结果的展示形式，Excel或可视化|
|`rrs_frequency`|int|11|预测可能执行频率，单位为day|
|`rrs_last_time`|timestamp|11|最后一次执行时间|
|`rrs_seven_avg`|int|11|7日内执行平均用时|
|`rrs_seven_count`|int|11|7日内执行次数|
|`rrs_thirty_avg`|int|11|30日内执行平均用时|
|`rrs_thirty_count`|int|11|30日内执行次数|

### SQL执行记录表 - rss_run_history
|字段|类型|长度|comment|
|:---|:---|:---|:---|
|`rrh_id`|int|11|自增主键，无实义|
|`rrh_sql_id`|int|11|伪外键，不做关联，执行sql的id，即`run_sql`表的主键|
|`rrh_started_at`|timestamp|11|该条sql执行开始时间|
|`rrh_time`|int|11|timestamp，该条sql执行用时|
|`rrh_result`|int|11|执行结果|

## 枚举说明
### SQL中动态参数 `${{}}`
|值|说明|前端|
|:---|:---|:---|
|Date|日期类型|弹出窗口选择具体到day的时间|
|Time|时间类型|弹出窗口选择具体到second的时间|
|Number|数值类型|仅限输入数值|
|String|字符类型|可随意输入内容|

### `rs_author` 部门代码
|值|说明|
|:---|:---|
|0|Boss|
|1|技术自身|
|5|财务|
|10|采销|
|15|仓库|
|20|配送|
|99|统计|

### `rs_auth` 权限等级
###### 使用2进制转10进制标识法
是否使用大量CPU资源 - 是否使用大量内存资源 - 运行时间是否会超过5分钟




---
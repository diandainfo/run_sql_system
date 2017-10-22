


## 表结构说明

### SQL语句表 - run_sql

|字段|类型|长度|comment|
|:---|:---|:---|:---|
|`rs_id`|int|11|自增主键，无实义|
|`rs_sql`|varchar|255|需要运行的sql语句，其中使用`${{}}`来标识此为动态参数|
|`rs_auth`|int|11|权限等级，或为执行可信度，是否会造成系统数据错误，或是否会使用大量系统资源|
|`rs_author`|int|11|需求方，此条语句用于完成何部门的任务|
|`rs_result`|int|11|执行结果的展示形式，Excel或可视化|
|`rs_frequency`|int|11|预测可能执行频率，单位为day|
|`rs_last_time`|int|11|timestamp，最后一次执行时间|
|`rs_seven_avg`|int|11|7日内执行平均用时|
|`rs_seven_count`|int|11|7日内执行次数|
|`rs_thirty_avg`|int|11|30日内执行平均用时|
|`rs_thirty_count`|int|11|30日内执行次数|

### SQL执行记录表 - run_history
|字段|类型|长度|comment|
|:---|:---|:---|:---|
|`rh_id`|int|11|自增主键，无实义|
|`rh_sql_id`|int|11|伪外键，不做关联，执行sql的id，即`run_sql`表的主键|
|`rh_started_at`|int|11|timestamp，该条sql执行开始时间|
|`rh_time`|int|11|timestamp，该条sql执行用时|
|`rh_result`|int|11|执行结果|

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
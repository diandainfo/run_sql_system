/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : run_sql_system

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2017-10-18 16:37:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for rss_tables_comments
-- ----------------------------
DROP TABLE IF EXISTS `rss_tables_comments`;
CREATE TABLE `rss_tables_comments` (
  `rtc_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键，无实义',
  `rtc_database` varchar(255) NOT NULL COMMENT '数据库',
  `rtc_table` varchar(255) NOT NULL COMMENT '表名',
  `rtc_field` varchar(255) NOT NULL COMMENT '字段名',
  `rtc_comment` varchar(255) DEFAULT NULL COMMENT '注释信息',
  `rtc_type` varchar(255) DEFAULT NULL COMMENT '字段类型',
  `rtc_length` int(5) DEFAULT NULL COMMENT '字段长度',
  `rtc_is_index` tinyint(4) DEFAULT NULL COMMENT '是否为索引字段',
  PRIMARY KEY (`rtc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='数据库中表结构的额外注释信息';

-- ----------------------------
-- Records of rss_tables_comments
-- ----------------------------

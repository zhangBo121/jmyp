/*
Navicat MySQL Data Transfer

Source Server         : BOBO
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : txt

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-11-25 17:18:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `form`
-- ----------------------------
DROP TABLE IF EXISTS `form`;
CREATE TABLE `form` (
  `id` int(18) NOT NULL AUTO_INCREMENT,
  `username` varchar(12) NOT NULL COMMENT 'username',
  `password` varchar(10) NOT NULL COMMENT 'password',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of form
-- ----------------------------
INSERT INTO `form` VALUES ('1', 'xiaoming', '123456');
INSERT INTO `form` VALUES ('2', 'sauasa', '11211');
INSERT INTO `form` VALUES ('3', 'sgdjsh212', '21312');
INSERT INTO `form` VALUES ('4', 'dcs', '123');
INSERT INTO `form` VALUES ('5', '1111sdfsd', 'dsdswed');
INSERT INTO `form` VALUES ('6', '23423', '123424');
INSERT INTO `form` VALUES ('7', '123132', '13132');
INSERT INTO `form` VALUES ('8', '12313245', '13132');
INSERT INTO `form` VALUES ('9', '123123123', '1212121');

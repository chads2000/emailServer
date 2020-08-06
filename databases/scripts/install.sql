-- MySQL dump 10.17  Distrib 10.3.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: mygear
-- ------------------------------------------------------
-- Server version	10.3.18-MariaDB-1:10.3.18+maria~bionic
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
--
-- Table structure for table `Customers`
--
DROP TABLE IF EXISTS `Customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;
CREATE TABLE `Customers` (
  `CustomerID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Email` varchar(45) DEFAULT NULL,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  PRIMARY KEY (`CustomerID`),
  UNIQUE KEY `CustomerID_UNIQUE` (`CustomerID`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Customers`
--
LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Customers` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `OrderBilling`
--
DROP TABLE IF EXISTS `OrderBilling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;
CREATE TABLE `OrderBilling` (
  `OrderBillingID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `OrderID` int(11) unsigned NOT NULL,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `Address` varchar(45) NOT NULL,
  `Address2` varchar(45) DEFAULT NULL,
  `City` varchar(45) NOT NULL,
  `State` varchar(45) NOT NULL,
  `Zip` varchar(45) NOT NULL,
  `CardType` enum(
    'Visa',
    'MasterCard',
    'Discover',
    'American Express',
    'Other'
  ) NOT NULL,
  `CardLast4` int(4) NOT NULL,
  `CardExpireMonth` int(2) NOT NULL,
  `CardExpireYear` int(4) NOT NULL,
  PRIMARY KEY (`OrderBillingID`),
  UNIQUE KEY `OrderBillingID_UNIQUE` (`OrderBillingID`),
  KEY `OrderBilling_idx` (`OrderID`),
  CONSTRAINT `OrderBilling` FOREIGN KEY (`OrderID`) REFERENCES `Orders` (`OrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `OrderBilling`
--
LOCK TABLES `OrderBilling` WRITE;
/*!40000 ALTER TABLE `OrderBilling` DISABLE KEYS */
;
/*!40000 ALTER TABLE `OrderBilling` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `OrderProducts`
--
DROP TABLE IF EXISTS `OrderProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;
CREATE TABLE `OrderProducts` (
  `OrderID` int(11) unsigned NOT NULL,
  `ProductID` int(11) unsigned NOT NULL,
  `Price` float NOT NULL,
  `Qty` int(11) NOT NULL,
  KEY `ProductOrder_idx` (`OrderID`),
  KEY `OrderProduct_idx` (`ProductID`),
  CONSTRAINT `OrderProduct` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ProductOrder` FOREIGN KEY (`OrderID`) REFERENCES `Orders` (`OrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `OrderProducts`
--
LOCK TABLES `OrderProducts` WRITE;
/*!40000 ALTER TABLE `OrderProducts` DISABLE KEYS */
;
/*!40000 ALTER TABLE `OrderProducts` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `OrderShipping`
--
DROP TABLE IF EXISTS `OrderShipping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;
CREATE TABLE `OrderShipping` (
  `OrderShippingID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `OrderID` int(11) unsigned NOT NULL,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `Address` varchar(45) NOT NULL,
  `Address2` varchar(45) DEFAULT NULL,
  `City` varchar(45) NOT NULL,
  `State` varchar(45) NOT NULL,
  `Zip` varchar(45) NOT NULL,
  PRIMARY KEY (`OrderShippingID`),
  UNIQUE KEY `OrderShippingID_UNIQUE` (`OrderShippingID`),
  KEY `OrderShipping_idx` (`OrderID`),
  CONSTRAINT `OrderShipping` FOREIGN KEY (`OrderID`) REFERENCES `Orders` (`OrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `OrderShipping`
--
LOCK TABLES `OrderShipping` WRITE;
/*!40000 ALTER TABLE `OrderShipping` DISABLE KEYS */
;
/*!40000 ALTER TABLE `OrderShipping` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Orders`
--
DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;
CREATE TABLE `Orders` (
  `OrderID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `UUID` varchar(36) NOT NULL,
  `CustomerID` int(11) unsigned NOT NULL,
  `SubTotal` float unsigned NOT NULL,
  `Tax` float unsigned NOT NULL,
  `Shipping` float unsigned NOT NULL,
  `Total` float unsigned NOT NULL,
  `CreatedAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`OrderID`),
  UNIQUE KEY `OrderID_UNIQUE` (`OrderID`),
  UNIQUE KEY `OrderUUID_UNIQUE` (`UUID`),
  KEY `OrderCustomer_idx` (`CustomerID`),
  CONSTRAINT `OrderCustomer` FOREIGN KEY (`CustomerID`) REFERENCES `Customers` (`CustomerID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Orders`
--
LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `ProductCategories`
--
DROP TABLE IF EXISTS `ProductCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;
CREATE TABLE `ProductCategories` (
  `CategoryID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ParentCategoryID` int(11) unsigned DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CategoryID`),
  UNIQUE KEY `CategoryID_UNIQUE` (`CategoryID`),
  KEY `ParentProductCategory_idx` (`ParentCategoryID`),
  CONSTRAINT `ParentProductCategory` FOREIGN KEY (`ParentCategoryID`) REFERENCES `ProductCategories` (`CategoryID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 15 DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `ProductCategories`
--
LOCK TABLES `ProductCategories` WRITE;
/*!40000 ALTER TABLE `ProductCategories` DISABLE KEYS */
;
INSERT INTO `ProductCategories`
VALUES (4, NULL, 'Apparel'),
  (5, NULL, 'Skis'),
  (6, NULL, 'Boots'),
  (7, 4, 'Jackets'),
  (8, 4, 'Pants'),
  (13, NULL, 'Male'),
  (14, NULL, 'Female');
/*!40000 ALTER TABLE `ProductCategories` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Products`
--
DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!40101 SET character_set_client = utf8 */
;
CREATE TABLE `Products` (
  `ProductID` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `CategoryIDs` varchar(45) DEFAULT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Image` blob DEFAULT NULL,
  `Featured` tinyint(4) DEFAULT 0,
  `Price` float NOT NULL,
  `SalePrice` float DEFAULT NULL,
  `SaleEffectiveDate` date DEFAULT NULL,
  `Description` blob DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  UNIQUE KEY `ProductID_UNIQUE` (`ProductID`)
) ENGINE = InnoDB AUTO_INCREMENT = 17 DEFAULT CHARSET = latin1;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Products`
--
LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */
;
INSERT INTO `Products`
VALUES (
    1,
    '.5.',
    'Dynastar',
    'skis/dynastar.jpg',
    0,
    899.95,
    539.97,
    '2020-06-23',
    'The Dynastar Legend 88 Skis + Konect SPX 12 GW'
  ),
  (
    2,
    '.5.',
    'Head',
    'skis/head.jpg',
    0,
    419,
    200,
    '2050-01-01',
    'From straight line sends to days filled with waist-deep tree skiing'
  ),
  (
    3,
    '.5.',
    'K2',
    'skis/k2.jpeg',
    0,
    419,
    NULL,
    NULL,
    'Get easy control and responsiveness on the frontside of the mountain with the K2 iKonic 84 Skis'
  ),
  (
    4,
    '.5.',
    'Salomon',
    'skis/salomon.jpg',
    0,
    377.99,
    NULL,
    NULL,
    'Along with the rest of the QST line, the Salomon QST 92 Skis have been re-engineered with a Powerframe'
  ),
  (
    5,
    '.4.8.13.',
    'Grey Male Pant',
    'apparel/male_grey_pant.webp',
    1,
    80.95,
    39.97,
    '2020-06-23',
    'Grey Male Ski Pant'
  ),
  (
    6,
    '.4.8.13.',
    'Orange Male Pant',
    'apparel/male_orange_pant.jpg',
    0,
    80,
    50,
    '2050-01-01',
    'Orange Male Ski Pant'
  ),
  (
    7,
    '.4.8.14.',
    'Purple Female Pant',
    'apparel/female_purple_pant.jpg',
    0,
    49,
    NULL,
    NULL,
    'Purple Female Ski Pant'
  ),
  (
    8,
    '.4.8.14.',
    'White Female Pant',
    'apparel/female_white_pant.jpg',
    0,
    77.99,
    NULL,
    NULL,
    'White Female Ski Pant'
  ),
  (
    9,
    '.4.7.13.',
    'Blue Male Jacket',
    'apparel/mens_blue_jacket.jpeg',
    1,
    80.95,
    39.97,
    '2020-06-23',
    'Blue Male Ski Jacket'
  ),
  (
    10,
    '.4.7.13.',
    'Orange Male Jacket',
    'apparel/mens_orange_jacket.jpg',
    0,
    80,
    50,
    '2050-01-01',
    'Orange Male Ski Jacket'
  ),
  (
    11,
    '.4.7.14.',
    'Grey Female Jacket',
    'apparel/female_gray_jacket.jpg',
    0,
    49,
    NULL,
    NULL,
    'Grey Female Ski Jacket'
  ),
  (
    12,
    '.4.7.14.',
    'White Female Jacket',
    'apparel/female_white_jacket.jpg',
    0,
    77.99,
    NULL,
    NULL,
    'White Female Ski Jacket'
  ),
  (
    13,
    '.6.13.',
    'Blue Male Boot',
    'boots/mens_blue_boot.jpg',
    1,
    800.95,
    639.97,
    '2020-06-23',
    'Blue Male Ski Boot'
  ),
  (
    14,
    '.6.13.',
    'Green Male Boot',
    'boots/mens_green_boot.png',
    0,
    800,
    500,
    '2050-01-01',
    'Green Male Ski Boot'
  ),
  (
    15,
    '.6.14.',
    'Black Female Boot',
    'boots/female_black_boot.jpg',
    0,
    499,
    NULL,
    NULL,
    'Black Female Ski Boot'
  ),
  (
    16,
    '.6.14.',
    'White Female Boot',
    'boots/female_white_boot.jpg',
    0,
    777.99,
    NULL,
    NULL,
    'White Female Ski Boot'
  );
/*!40000 ALTER TABLE `Products` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Dumping routines for database 'mygear'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
-- Dump completed on 2020-06-28 23:16:31
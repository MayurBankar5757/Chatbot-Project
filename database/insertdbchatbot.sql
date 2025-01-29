CREATE DATABASE  IF NOT EXISTS `chatbot_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `chatbot_db`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: chatbot_db
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Hello','user','2025-01-28 16:01:58'),(2,'Hello','user','2025-01-28 16:02:20'),(3,'Hello','user','2025-01-28 16:05:36'),(4,'hello','user','2025-01-28 16:06:45'),(5,'I didn\'t understand that. Can you rephrase?','bot','2025-01-28 16:06:45'),(6,'hello','user','2025-01-28 16:06:54'),(7,'I didn\'t understand that. Can you rephrase?','bot','2025-01-28 16:06:54'),(8,'hello','user','2025-01-28 16:10:08'),(9,'I didn\'t understand that. Can you rephrase?','bot','2025-01-28 16:10:09'),(10,'what is your name','user','2025-01-28 16:10:22'),(11,'I didn\'t understand that. Can you rephrase?','bot','2025-01-28 16:10:22'),(12,'what is your name','user','2025-01-28 16:10:36'),(13,'I didn\'t understand that. Can you rephrase?','bot','2025-01-28 16:10:36'),(14,'hello','user','2025-01-28 16:14:53'),(15,'hello','user','2025-01-28 16:16:47'),(16,'Hello! How can I assist you today?','bot','2025-01-28 16:16:47'),(17,'how are you','user','2025-01-28 16:16:55'),(18,'I am doing great! Thanks for asking.','bot','2025-01-28 16:16:55'),(19,'what is your name','user','2025-01-28 16:17:03'),(20,'I\'m not sure how to respond to that. Can you ask something else?','bot','2025-01-28 16:17:03'),(21,'give me the code for generating addtion of two numbers','user','2025-01-28 16:17:41'),(22,'I\'m not sure how to respond to that. Can you ask something else?','bot','2025-01-28 16:17:41'),(23,'how your day','user','2025-01-28 16:17:59'),(24,'I\'m not sure how to respond to that. Can you ask something else?','bot','2025-01-28 16:18:00'),(25,'hi','user','2025-01-28 16:21:02'),(26,'hi','user','2025-01-28 16:21:05'),(27,'hi','user','2025-01-28 16:21:08'),(28,'hi','user','2025-01-28 16:21:14'),(29,'hifnff','user','2025-01-28 16:21:21'),(30,'hi','user','2025-01-28 16:23:23'),(31,'Hello! How can I assist you today?','bot','2025-01-28 16:23:23'),(32,'how are you','user','2025-01-28 16:23:43'),(33,'I didn\'t understand that. Can you rephrase?','bot','2025-01-28 16:23:43'),(34,'hi','user','2025-01-28 16:23:53'),(35,'Hello! How can I assist you today?','bot','2025-01-28 16:23:53'),(36,'hi','user','2025-01-28 16:26:21'),(37,'Hello! How can I assist you today?','bot','2025-01-28 16:26:21'),(38,'hi','user','2025-01-28 16:30:20'),(39,'Hello! How can I assist you today?','bot','2025-01-28 16:30:20'),(40,'hi','user','2025-01-28 16:31:39'),(41,'Hello! How can I assist you today?','bot','2025-01-28 16:31:39'),(42,'bye','user','2025-01-28 16:33:33'),(43,'Goodbye! Have a great day!','bot','2025-01-28 16:33:33'),(44,'how are you','user','2025-01-28 16:34:39'),(45,'I am fine','bot','2025-01-28 16:34:39'),(46,'hi','user','2025-01-28 16:37:12'),(47,'Hello! How can I assist you today?','bot','2025-01-28 16:37:12'),(48,'bye','user','2025-01-28 16:37:13'),(49,'Goodbye! Have a great day!','bot','2025-01-28 16:37:13');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `responses`
--

LOCK TABLES `responses` WRITE;
/*!40000 ALTER TABLE `responses` DISABLE KEYS */;
INSERT INTO `responses` VALUES (1,'hi','Hello! How can I assist you today?'),(2,'bye','Goodbye! Have a great day!'),(3,'hi','Hello! How can I assist you today?'),(4,'bye','Goodbye! Have a great day!'),(5,'hi','Hello! How can I assist you today?'),(6,'bye','Goodbye! Have a great day!'),(7,'hi','Hello! How can I assist you today?'),(8,'bye','Goodbye! Have a great day!'),(9,'how are you','I am fine');
/*!40000 ALTER TABLE `responses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-28 16:39:03

Create data base
CREATE DATABASE MYSQL_PRACTICE ;

CREATE NEW TABLE

CREATE TABLE students (
id int(11) Not null primary key ,
student_name varchar(255) NOT null,
class int(11) DEFAULT 5,
mobile varchar(100)
); 

CREATE table teacher (
id int(11) NOT null AUTO_INCREMENT PRIMARY KEY ,
Teacher_name varchar (255) not null ,
mobile varchar (100) not null ); 

create Table classes (
id int(11) not null AUTO_INCREMENT,
CLASS_NAME  varchar(100) not null ,
teacher_id int(11) not null ,
PRIMARY KEY(id),
FOREIGN  KEY(teacher_id ) REFERENCES Teacher(id)
);  

change student id 
ALTER table students
ADD FOREIGN KEY (student_name) REFERENCES classes(id)
;

 Create  new columns in student table 

ALTER table students 
ADD created_on timestamp DEFAULT CURRENT_TIME ;
   
Delete table classes 

DROP TABLE classes ;
    


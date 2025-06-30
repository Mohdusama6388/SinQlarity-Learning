CRUD 
C-CREATE (insert  data in table)
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('111','6388086156','usama');
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('112','6388086157','abbasi');
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('113','6388086158','abbas');
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('114','6388086159','rahul');

R- Retrieve(use for fetch data from table )
SELECT * FROM 'teacher' ; 
select * from  'teacher' where mobile=6388086156 
select * from 'teacher' where mobile=6388086156 id=111 or id=112 
select * from 'teacher' where mobile=6388086156 id in (111,112 )
select Teacher_name from 'teacher' id=6388086156
select st.student_name,c1.class_name
from students st
INNER JOIN classes c1 ON st.class_id =c1.id
  
 selec * FROM 'teacher' where id=111 limit 1 
  select all 
  select with where 
  select with or
  select with and 
  in query

U - UPDATE (use for update detail)
UPDATE teacher SET mobile='12344' 
UPDATE teacher set teacher_name = "usama" where id =111 ;

D- delete -> it only delete the record in table.
DELETE FROM teacher ;
.............
min(),max(),avg(),sum()
update teachers set salary=8000
where id=111
select salary from teacher

select max(salary) from teacher 
// use for check maximum salary of teacher  

select min(salary) from teacher 
 // use for check minimum salary 
  
select avg(salary) from teacher
// use to define avg of all teacher salary

select sum(salary) from teacher 
// use to calculate total sum of all teacher 
  
..............................
  
MY SQL lEFT JOIN ,MY SQL RIGHT JOIN ,CROSS JOIN
select column name(s)
from table 1
LEFT JOIN Table2
ON table1.column_name=table2.column_name
 

select *
from classes c1
left join teachers tr on c1.teacher_id=tr.id
............................

- find number of student in each class 
select class_id, count(*) as number_of_students from students
group by class_id

- find number of student in each class ,and show the record in decending order of number of students 
select class_id,count(*) as number_of_students from students 
group by class_id 
order by number_of_student desc








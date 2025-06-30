CRUD 
C-CREATE 
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('111','6388086156','usama');
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('112','6388086157','abbasi');
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('113','6388086158','abbas');
INSERT INTO teacher(id,mobile,Teacher_name ) VALUES ('114','6388086159','rahul');

R- Retrieve
SELECT * FROM 'teacher' ;    
  
U - UPDATE 
UPDATE teacher SET mobile='12344' 
UPDATE teacher set teacher_name = "usama" where id =111 ;

D- delete -> it only delete the record in table
DELETE FROM teacher ;

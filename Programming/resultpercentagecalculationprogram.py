English=int(input("Enter your english marks(out of 100) :="))
math=int(input("Enter your math marks(out of 100) : ="))
Hindi=int(input("Enter your Hindi marks(out of 100) :="))
science=int(input("Enter your science marks(out of 100) :="))
obtainedmarks = English+math+Hindi+science
totalmarks=400
percentage=obtainedmarks/totalmarks*100
print("percentage of marks:=",percentage,"%")
if percentage>=80 and percentage<=100:
    print(percentage,"%","passed with honour",)
if percentage>=60 and percentage<80:
    print(percentage,"%""passed with first division")
if percentage>=48 and percentage<60 :
    print (percentage,"%","passed with second division")   
elif percentage>=33 and percentage<=48 :
    print(percentage,"%""passed with third division ")
elif percentage<=33 :
     print(percentage,"%""you have failed ")   
elif percentage>100:
    print("enter incorrect marks")


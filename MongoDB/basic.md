CRUD
c- Create 
insert - it is used for insert data 

db.test.insert({name:"usama" , age : 21, mobile : 6388086156}) 
  {
    _id: ObjectId('6863b6f0394fc4cf22748a5f'),
    name: 'usama',
    age: 21,
    mobile: 6388086156
  },
  {
    _id: ObjectId('6863b76b394fc4cf22748a60'),
    name: 'rahul',
    age: 34,
    mobile: 8090541640,
    add: 'town area mahona'
  },
  { _id: ObjectId('6863b80f394fc4cf22748a61'), name: 'abbasi ' }

    
insertone() 
insertmany()

db.test.insertone({name :"Usama"})
db.test.insertmany([{name : "mahesh"}, {age :21 },{mobileno:638808656}])

find()  
< it is used for find all data >
db.test.find()
in and,nin,or  operator 

db.book.find({price:{$in:[400,600]}})
  
findone()  
<it is used for find any particular data>
db.test.findone({name: usama})

findmany()
   
 update  
 <It is used for update data > 
 db.test.updateone({name: "usama"}, {$set:{mobile:234445}})  


delete() 
<it is used for delete all data>
db.test.delete()

deleteone()  
< it is used for delete any your selected data>
  
validation
The $jsonscheme operator allow us to define our document structure.

db.createCollection('products',{validator: {
    $jsonScheme:{
        bsonType:'object',
        required:['title','pname','owner','comments'],
        properties:{
            title:{
                bsonType: 'string',
                description: 'Title must be string'
                 },
                 pname:{
                    bsonType:'string',
                    description:'pname must be string'
                 },
                 owner:{
                    bsonType: 'objectId',
                    description: 'id of customer'
                 },
                 comments:{
                    bsonType: 'string',
                    description:'comments must be string'            }
        }
    }
}
})
 db.products.insertone(title : "my product" ,pname:"product001",owner:objectId('6863b76b394fc4cf22748a60'),comments:"hello usama")


// const tinderUser = new Object()
// console.log(tinderUser);// epty object

const tinderUser ={}
tinderUser.id='23abc'
tinderUser.name='sammy'
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularuser={
    email:'hitesh@3',
    fullname:{
        userfullname:{
            firstname:'vivek', 
            lastname:'solanki',
        }
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'a',4:'b'}
const obj4 ={5:'a',6:'b'}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3={...obj1, ...obj2}//... spread operater
// console.log(obj3);

const users=[
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:1,
        email:'h@gmail.com'
    },
    {
        id:1,
        email:'h@gmail.com'
    }
]
// console.log(users[1].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:'js in hindi',
    price:'999',
    courseInsructor:'hitesh'
}
// course.courseInsructor
const {courseInsructor :instructor}= course
console.log(instructor);
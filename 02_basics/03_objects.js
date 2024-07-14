//Singleton
// Object.create


//object literals

const mySym = Symbol('key1')


const JsUser = {
    name:'hitesh',
    'full name':'htesh meena',
    age:19,
    [mySym]:'mykey1',
    location:"jaipur",
    email:"viveksolanki955@gmail.com",
    isloggedIn:false,
    lastLoginDays:['monday','saturday']
} 

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);// wrong way 
// console.log(typeof(JsUser.mySym));// sring
// console.log(JsUser[mySym]);

JsUser.email ='vivr45545@dfg'
// Object.freeze(JsUser)
JsUser.email ='fdddd45545@dfg'
// console.log(JsUser);

JsUser.greeting =function(){
    console.log('HELLO JS USER ');
}
JsUser.greetingtwo =function(){
    console.log(`HELLO JS USER ${this.name} `);
}

// console.log(JsUser.greeting);//
// console.log(JsUser.greeting());
JsUser.greeting()
JsUser.greetingtwo()
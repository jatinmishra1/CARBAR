// Project 1-
// react-app
// install react-router-dom

// so for clinet side i have maintained foler structure like
// src inside we have three folders
// 1-pages
// 2-components
// 3-redux
//    1-firstly i hav created home page
//    2-login page
//    3-Registration page
//    4-bookingcar page

//then i gone to app.js
//and writed routes 
//imported route and BrowserRouter from react-router-dom
//then started writing routes for the stating pages
// like 
// <BrowseerRouter>
{/* <Route path="/" exact component={Home}></Route>
<Route path="/login" exact component={Login}></Route>
<Route path="/register" exact component={Register}></Route>
<Route path="/bookingcar" exact component={BookingCar}></Route> */}
//
//</BrowseerRouter>

//after that as we are having same header and footer for all the pages so 
//we have make Default Layout in components for alll the pages
//then i have made header with the help of bootstarp using cdn link
//in deafualt layout itselg below header i have made the section of content in which i have paseed the content of each page as child

//now after maintaing all that  i designed home and header /for box shadow i have used the getCSS scan library
//and i use one of the font form google font.and done the styling for header 


//after making that much in client side i have also started making backend also as to check for authentication
// so firsly i made srever.js   in which i maded the node js server
//then i created my mongodb databse with atlas
//and then with the help of mongoose i connected my databse with my backend
//i have use mongoose function that is connect by giving the mogodb url to connect to oyr database
//now mongoose also give function for cheking our connection
//so i used mongodb.conecction
//and i used to check it for on and error paramter
//now till here we have setuped our backedn and front-end part
//now we will mov to our redux part
//so firsly de will install the required modules
//redux,react-redux,redux-thunk
//now i maintained store.js inside the redux folder
//then i made teo folders in the redux folders and that are actions and reducers

//in store.js with firtsly need crateStore wihcih we get form redux
//then we craeted store passing reducers in to it;
//we also created root reducers wihich we oass into create store
//and we will combine all reducers into root reducer by using combinereduce fucntionality
//combinereducer takes all the child reducers

//the i have made cars reducers
//in carsReducer.js
//we knowr we have tow most important thing that is initial data and action.payload
//so i maintaind initial data
// const initialdata={
//     cars:[]
// }
// export const carsReducers=(state=inititaldata,actions)=>{
// switch(actions.type){
//     default:return state
// }
// }
//now after this import this cars reducer into store and and pass this cars reducers into rootreducer
//now export this stote and go to index .js and in idnex.js inport Provider from react-redux and pass put app.js compioonent inside
//provider and pass store={store } in provider so that it can be accessed by each and every member of thr project//
// or  we can aalso say like wrap app.js component inside the provider component
//now its time to check our redux and store
//so i have gone to home.js //and installed useSelector as useSelector is the tool given react-reduc libraray to 
//talk to redux and get the data from reduc store
//so with the help of useSelector we get the cars data from the redux
//now we will work in carsAction.js  file inside actions folder
//so all teh actions related car is mento=ioned here only
//now i have axios for fetching data for the server
// so i started writing the Action function that is cars getAllcars
//also maitained loading reducer becuse as sonn as page laods it will show thw spinner

//const initialdat={
// loading:false
// }
// export const alertReduer=(state=initialdata,action)=>{
// swithc(action.type){
//     case "LOADING":{
//         return {
//             ...state,
//             ...action.payload
//         }
//     }
// default:return state 
// }
// }

// export const gtAllcars=()=>{
// so as in this action we are going to load data but as we kno wit will take some to load ,so thats  why we will didpatch one more
//action thats is loadoing till teh data is load will do loading
// dispatch({type:"LOADING",payload:true"})
// try{
// const cars=await axios.get('api/cars/getAllcars');
// dispatch({type:"GET_ALL_CARS",payload:cars.data});
// dispatch({type:"LOADING",payload:false})
// //and as we are getting this data fron our backend so we have to a dd proxy also in our script
// }catch(){
//     dispatch({type:"LOADING",payload:false})
// }
// }
// now after that got to cars reducer and made the type or switch case like 
//GET_ALL_CARS:{
//     ...state ,
//     cars:action.payload
// }


//now got to home.js and called the action
//import useDispatch form recat-redux
//and as we want to get the data of cars as soon as page render 
// so under useEffect call the action i.e dispacth(getAllcars())


//now as we have got the data of cars so we are going to show it in the home page
// so we are going to use ant-design for taking cars and buttons for our page
//antd is completely base on props meanig components basis which i ke the most about it
//npm install ant-d
//and added its css line for using css  in index.js
//we have also implemented grid system using ant-d only rather then bootstrap because bootstrap rewuirw to use classes
//whereas in this we can direct use row and columns
//in home.js //with the help of map method i have rendered all the cars data on the page
//now added and maintained css
//also added hover effect on the car using css
//now we have completed the home page ,now we are moving to LOGIN AND REGISTRAION PAGE
//we have donw to desiging part to login and regiter page using antdesign and css
//now e will write the functionality
//we have row,col,form ,input from antd
//no after ccompleting the form we will write methof onFinish={onFinish};
// function onFinish(values){
// console.log(values)// it will get the all values in the form
// }
//hence you get the all the value
//now we will send this by dipatching action
//export const userLogin=(reqObj)=> async dispatch=>{
//const response=await axios.post('api/users/login',reqobj)
//localStorage.setItem('user',JSON.stringify(response.data))
// }
//similar for registartion but we will not store data in local stroage on registration
//and call dispacth function inside onFinish dispacth(useLogin(values))


// as we have completed login routes in front-end now we are taking part in the backend to complete routes
// make routes and models folder
//male usermodel.js and userroutes.js
//we have also maded car model which includes
//name,image,capacity,fuelType,bookedTimeSlots,Rentperhour and timestamps
//useSchema include username,password
//now we have made the routes for login and register for both and make them working
//and i added if we have registered succ then automatically moved to login page and if login succ then move to home page
//now in navbar as soon as we do log out we will dete data from local storage and move to login page

///now we also maded our routes protected so that only login user can use the features
//we have car animatio in our which we have done usign aos library

//now we will design the page of the booking screen
// now as soon we clink on hone page of any car button of book now'
//it will lead us to booking car of that  page
//in that page we will the id of the car and form t=reduc store we will get data of all cars and using att the dat of cars we are trying
// to match the id we got using params
//and we will ultimatelt get the car details and which we will render on thisn page
//we have used date picker from antd and moment library in our booking car page to decide for booking date
//with date we also  used timestamps so that we can exact timming of booking and dates so alloting cars to
//other coustmers do not make problem
//also for calculating fare it helps
//now in the page we calculate and maintain the state according to the driver included or not and also chnageing time and hours and days 
//your a ount will automaticalyy will be calculated
//we have made booking model in which  we have taken 
//car_id ,user_id,booked_time_slots,total_time,total_amount,transaction_id
// now we will make bookings routes
//now we have moved to homejs to add date picker so that you can select cars initially and by just putting date 
//and as soon as you will enetr date you will get the cars available in that period

//on booking car page we have also implemented set booked time slots using show model 

//then we have integrated payment gateway in our platfomm 
//we are  using stripe platform
//after payment is integrated 
//we will make gae of users booking
//the we have Addcar which is only allowed to admin panel
//we have also added edit AND delete cars of admin panel

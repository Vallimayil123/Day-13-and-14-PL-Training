import React,{useState,useEffect} from "react";
import image from './images/messi.jpeg';
import i from './images/ronaldo.jpeg';
function Effecthook(){

    // const[message,setMessage] = useState("Loading....");
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setMessage("Hello this is useEffect in action!");
    //     },4000); //Wait 2 seconds
    //     return ()=>clearTimeout(timer)
    // },[])
    // return (
    //     <div style={{textAlign:"center", marginTop:"50px"}}>
    //         <h1>{message}</h1>
    //     </div>
    // );


//   const [color, setColor] = useState("lightgray");

//   useEffect(() => {
    
//     const timer = setTimeout(() => {
//       setColor("lightblue");
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}>
//       <h1>Watch the background change!</h1>
//     </div>
//   );


//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((c) => c + 1);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "100px",
//         border: "1px solid #ccc",
//         width: "250px",
//         margin: "100px auto",
//         padding: "20px",
//         borderRadius: "10px",
//       }}
//     >
//       <h1>Auto Counter</h1>
//       <h2>{count}</h2>
//       <p>Updates every 2 seconds</p>
//     </div>
//   );

  const[message,setMessage]=useState("Loading.....");
     const[img,setImage]=useState({image});
    useEffect(()=>
    {
        const timer=setTimeout(()=>{
            setMessage("Hello, this is a useEffect in action!!!")
            setImage({i});
        },5000);
        return ()=>clearTimeout(timer);
    },[]);
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h1>{message}</h1>
            <img src={img}/>
        </div>
       
    ) ;

//     const[color,setColor] = useState("red");
//     const [size, setSize] = useState(20);
//         useEffect(()=>{
//             const interval = setInterval(()=>{
//                 // setMessage(prev => prev === "red"?"blue":"red");
//                 setColor(color => color === "red"?"blue":"red");
//                 setSize(size => size + 20);
//             },1000);
//             //After 10 seconds the font size and color change will be stopped
//              const timer = setTimeout(() => {
//                 clearInterval(interval);
//             }, 10000);

//             return() => {clearInterval(interval);
//                 clearTimeout(timer);
//             }//cleanup
//         },[]);
//     return (
//         <div style ={{textAlign:"center",marginTop:"50px"}}>
//             {/* <h1 >Message</h1> */}
//             <h1
//             style={{
//             color: color,
//             fontSize: size
//             }}
//         >Message</h1>
//         </div>
//     );

//   const [message, setMessage] = useState(
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setMessage((img) =>
//         img ===
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
//           ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeEt_Z-BXS4vc2R-Ryg8iaqFYDuQKYZ0-qM5J2RMzzA&s=10&#39;
//           : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkPl2JGBY6caNkzmyGBA8RLBxACiHRKpZG2ngswZUIQ&s=10&#39;
//       );
//     }, 2000); // change every 2 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '0px' }}>
//       <h1>Golden Retriever</h1>

//       <img
//         src={message}
//         alt="Golden Retriever"
//         style={{
//           width: '600px',
//           height: '600px'
//         }}
//       />
//     </div>
//   );
}

export default Effecthook;
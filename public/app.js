//alert('Linked')   //show texk went you open web app

//Unique Firebase Object
const firebaseConfig = {
    apiKey: "AIzaSyAHHbbbjh4Nzr1F_H0khYANkf5wkAe_O8M",
    authDomain: "nongya-blood-pressure-data.firebaseapp.com",
    projectId: "nongya-blood-pressure-data",
    storageBucket: "nongya-blood-pressure-data.appspot.com",
    messagingSenderId: "656826534710",
    appId: "1:656826534710:web:20c383f72a4f897efd4197",
    measurementId: "G-QLE5T1CHX9"
  };


//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("Blood_pressure_test")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Bahavior
    e.preventDefault()

    //set value input in form
    let messages = []
    if (DATE.value === '' || DATE.value == null) {
        messages.push('DATE is required')
        alert("DATE is required")
    }
    if (SYS.value === '' || SYS.value == null) {
        messages.push('SYS is required')
        //document.getElementById("error").innerHTML = ("SYS is required");
        alert("SYS is required")
    }
    if (DIA.value === '' || DIA.value == null) {
        messages.push('DIA is required')
        alert("DIA is required")
    }
    if (PUL.value === '' || PUL.value == null) {
        messages.push('PUL is required')
        alert("PUL is required")
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }


    //Get Form Values
    let DateTime = document.getElementById('DATE').value
    let systolic = document.getElementById('SYS').value
    let daistolic = document.getElementById('DIA').value
    let pulse = document.getElementById('PUL').value

    //Save Form Data To Firebase
    db.doc().set({
        datetime: DateTime,
        SYS: systolic,
        DIA: daistolic,
        PUL: pulse
    }).then( () => {
        console.log("Data saved")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert('Your Form Has Been Submitted Successfully')
})


//Auto Date
//var dt = new Date();
//document.getElementById('DATE').innerHTML=dt;
//document.getElementById('DATE').valueAsDate = new Date();


//Show data in Web app
ReadData()

/*function ReadData(){
    db.orderBy("datetime").onSnapshot(function(snapshot){
        snapshot.docChanges().forEach(function(change){
            if(change.type==="added"){
                ShowData(change.doc);
            }
            if(change.type==="modified"){
                
            }
            if(change.type==="removed"){
                
            }
        });
    });
}

function ShowData(doc){
    var ul=document.getElementById("show");
    var node=document.createElement("LI");
    node.id="L_"+doc.id;
    var t1=document.createTextNode(doc.data().datetime+" : ");
    var t2=document.createTextNode(doc.data().SYS+" : ");
    var t3=document.createTextNode(doc.data().DIA+" : ");
    var t4=document.createTextNode(doc.data().PUL+" : ");

    node.appendChild(t1); 
    node.appendChild(t2); 
    node.appendChild(t3); 
    node.appendChild(t4); 

    ul.appendChild(node); 
}*/

function ReadData(){
    db.orderBy("datetime").onSnapshot(function(snapshot){
        snapshot.docChanges().forEach(function(change){
            if(change.type==="added"){
                ShowData(change.doc);
            }
            if(change.type==="modified"){
                
            }
            if(change.type==="removed"){
                
            }
        });
    });
}

function ShowData(doc){
    var ul1=document.getElementById("show1");
    var ul2=document.getElementById("show2");
    var ul3=document.getElementById("show3");
    var ul4=document.getElementById("show4");

    var node1=document.createElement("LI");
    var node2=document.createElement("LI");
    var node3=document.createElement("LI");
    var node4=document.createElement("LI");
    node1.id="L_"+doc.id;
    node2.id="L_"+doc.id;
    node3.id="L_"+doc.id;
    node4.id="L_"+doc.id;


    var t1=document.createTextNode(doc.data().datetime);
    var t2=document.createTextNode(doc.data().SYS);
    var t3=document.createTextNode(doc.data().DIA);
    var t4=document.createTextNode(doc.data().PUL);

    node1.appendChild(t1); 
    node2.appendChild(t2); 
    node3.appendChild(t3); 
    node4.appendChild(t4); 

    ul1.appendChild(node1); 
    ul2.appendChild(node2); 
    ul3.appendChild(node3); 
    ul4.appendChild(node4); 
}

//Show data
//Filling the table
/*var stdNo = 0;
var tbody = document.getElementById=('tbody1');*/
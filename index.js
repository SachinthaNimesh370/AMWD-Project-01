document.getElementById("signInUI").onclick=function(event){

    event.preventDefault();

    studentName          =document.getElementById("studentNameUI").value;
    studentGender        =document.getElementById("genderUI").value;
    studentDOB           =document.getElementById("dobUI").value;
    studentAddress       =document.getElementById("addressUI").value;
    studentContactNumber =document.getElementById("ContactNumberUI").value;


    //Student Data Object
    let studentDetails=[];

    // Add Data To Array
    let newStudent={name:studentName,
        gender:studentGender,
        dob:studentDOB,
        addres:studentAddress,
        contct:studentContactNumber
    };

    studentDetails.unshift(newStudent);

    // Add data to Card
       
       let studentCardsContainer = document.getElementById("studentCards");
       studentDetails.forEach(function(student, index) {
        
            let card = document.createElement("div");
            card.classList.add("card"); // Optional: Add a class for styling
            let cardContent;


            if(studentGender=="Male"){
                cardContent = `
                
                <img src="./Assest/male.png" alt="Student Image" style="width:500px;height:300px;  padding: 20px; padding-left: 100px; padding-right:100px; background-color:#FFC107; margin-bottom: 15px;">
                <p>Student Name : ${studentName}</p>
                <p>Gender       : ${studentGender}</p>
                <p>DOB          : ${studentDOB}</p>
                <p>Address      : ${studentAddress}</p>
                <p>Contact      : ${studentContactNumber}</p>
                <button  class="btn1" data-index="${index}" >Delete</button>
            `;
            }else if(studentGender=="Female"){
                cardContent = `

                <img src="./Assest/female.png" alt="Student Image" style="width:500px;height:300px;  padding: 20px; padding-left: 100px; padding-right:100px; background-color:#FFC107; margin-bottom: 15px;">
                <p>Student Name : ${studentName}</p>
                <p>Gender       : ${studentGender}</p>
                <p>DOB          : ${studentDOB}</p>
                <p>Address      : ${studentAddress}</p>
                <p>Contact      : ${studentContactNumber}</p>
                <button  class="btn1" data-index="${index}" >Delete</button>

            `;
            }
            else(alert("Please Choose Gender !"));

            // Set the innerHTML of the card with the content
            card.innerHTML = cardContent;
           
            // Append the card to the container
            studentCardsContainer.appendChild(card);
            console.log(studentDetails);
            
        });
        
}

document.querySelectorAll(".btn1").forEach(function(button) {
    button.addEventListener("click", function() {
        
        let index = this.getAttribute("data-index");
        console.log(index);
        studentDetails.splice(index, 1);
        this.parentElement.remove(); // Remove the card from the DOM
        console.log(studentDetails);
    });
});

// Show the form
document.getElementById('showButton').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    form.style.display = 'block'; 
   

      });

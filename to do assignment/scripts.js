
  
//   async function fetchImages() {
//     try {
//       const response = await fetch('https://dummyjson.com/user');
//       const data = await response.json();
//       const imageGallery = document.getElementById("imageGallery");
//       imageGallery.innerHTML = "";
//       data.user.forEach(user => {
//         const img = document.createElement('img');
//         img.src = user.avatar;
//         img.alt = user.name;
//         imageGallery.appendChild(img);
//       });
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   }


// const imagetab = document.getElementById("image-gallery");

// async function fetchData() {
//     const apiUrl = 'https://dummyjson.com/users';

//     try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log("called")
        
//         data.users.forEach((user, index) => {
//             const imageElement = document.createElement('img');
//             imageElement.src = user.image;
//             imageElement.alt = `Image ${index + 1}`;
//             imageElement.classList.add('image-slide'); // Add a class for styling
//             imagetab.appendChild(imageElement);
//         });
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// const imagetab = document.getElementById("image-gallery");

// async function fetchData() {
//     const apiUrl = 'https://dummyjson.com/users';

//     try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
        
//         data.users.forEach((user, index) => {
//             // Create a container for each user
//             const userContainer = document.createElement('div');
//             userContainer.classList.add('user-container'); // Add a class for styling
            
//             // Create an image element
//             const imageElement = document.createElement('img');
//             imageElement.src = user.image;
//             imageElement.alt = `Image ${index + 1}`;
//             imageElement.classList.add('image-slide'); // Add a class for styling
            
//             // Create a paragraph element for the user's name
//             const nameElement = document.createElement('p');
//             nameElement.textContent = user.firstName + ' ' + user.lastName;
            
//             // Append the image and name elements to the user container
//             userContainer.appendChild(imageElement);
//             userContainer.appendChild(nameElement);
            
//             // Append the user container to the image gallery
//             imagetab.appendChild(userContainer);
//         });
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// fetchData();

const imagetab = document.getElementById("image-gallery");

async function fetchData() {
    const apiUrl = 'https://dummyjson.com/users';

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        data.users.forEach((user, index) => {
            // Create a container for each user
            const userContainer = document.createElement('div');
            userContainer.classList.add('user-container'); // Add a class for styling
            
            // Create an image element
            const imageElement = document.createElement('img');
            imageElement.src = user.image;
            imageElement.alt = `Image ${index + 1}`;
            imageElement.classList.add('image-slide'); // Add a class for styling
            
            const nameElement = document.createElement('p');
            nameElement.textContent = user.firstName + ' ' + user.lastName;
            
            // Append the image and name elements to the user container
            userContainer.appendChild(imageElement);
            userContainer.appendChild(nameElement);
            
            // Append the user container to the image gallery
            imagetab.appendChild(userContainer);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchData();



  
 function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");
  
    if (todoInput.value !== '') {
        var li = document.createElement("li");
        li.textContent = todoInput.value;
  
        // var completeButton = document.createElement("button");
        // completeButton.textContent = "Complete";
        // completeButton.onclick = function() {
        //     li.classList.toggle('completed');
        //     var taskText = li.querySelector('span');
        //     taskText.style.textDecoration = li.classList.contains('completed') ? 'line-through' : 'none';
        // };
  
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            todoList.removeChild(li);
           
        };

        // var taskSpan = document.createElement("span");
        // // taskSpan.textContent = todoInput.value.trim(); // Set task text content here
        // li.appendChild(taskSpan);
  
        // li.appendChild(completeButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

  
  function filterTodos(filter) {
    const todos = document.getElementById("todoList").getElementsByTagName("li");
    for (var i = 0; i < todos.length; i++) {
      if (filter === "all" || (filter === "completed" && todos[i].classList.contains('completed')) || (filter === "active" && !todos[i].classList.contains('completed'))) {
        todos[i].style.display = "block";
      } else {
        todos[i].style.display = "none";
      }
    }
  }

  function searchTodo() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var todos = document.getElementById("todoList").getElementsByTagName("li");
    var taskFound = false;

    for (var i = 0; i < todos.length; i++) {
        var task = todos[i].textContent.toLowerCase();
        if (task.includes(searchInput)) {
            todos[i].style.display = "block";
            taskFound = true;
        } else {
            todos[i].style.display = "none";
        }
    }

    if (!taskFound) {
        var notAvailable = document.createElement("li");
        notAvailable.textContent = "Task not found";
        notAvailable.style.color = "red";
        notAvailable.id = "notAvailable";
        
        var todoList = document.getElementById("todoList");
        todoList.appendChild(notAvailable);
    } else {
        var notAvailable = document.getElementById("notAvailable");
        if (notAvailable) {
            notAvailable.remove();
        }
    }
}






  async function showSection(sectionId) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === sectionId) {
        sections[i].style.display = "block";
      } else {
        sections[i].style.display = "none";
      }
    }
    
    // Hide the home section if displaying other sections
    if (sectionId !== "home") {
      document.getElementById("home").style.display = "none";
    } else {
      document.getElementById("home").style.display = "block";
    }
  
    if (sectionId === "gallery") {
      fetchData();
      
    }
  }
  
  // Initial call to show home section
  showSection('home');
  
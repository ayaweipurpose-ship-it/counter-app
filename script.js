 let countEl = document.getElementById("count-el")
 let count = 0

 function increment() {
  count = count + 1
  countEl.innerText=count
    console.log(count) 
 }
 function save() {
    console.log(count)
 }
 let welcomeEl = document.getElementById("welcome-el")

 let Name = "purpose ayawei"
 let greeting = "welcome back "
 
 welcomeEl.innerText = greeting + Name
 alert(greeting + Name)
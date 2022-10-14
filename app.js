const communityHeeding = document.querySelector("h6.text-center");

communityHeeding.style.fontSize = '2em';
communityHeeding.style.color = "purplr";

document.addEventListener("click", function() {
  console.log('be clicked.!');
});


const myCustomDiv = document.createElement("div");

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement("p");

    newElement.textContent = 'This is Paragraph Number' + i;
    newElement.addEventListener('click', function respondToTheClick() {
        console.log('A P was clicked.');
    });
    myCustomDiv.appendChild(newElement);

}
document.body.appendChild(myCustomDiv);

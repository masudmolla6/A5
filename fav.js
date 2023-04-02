const playerButton = document.querySelectorAll(".player-btn");
let count = 0;

// console.log(playerButton);
playerButton.forEach(button => {
    button.addEventListener("click", function (e) {
        // console.log(button);
        if (e.type === 'click') {
            // button.setAttribute("name", "helloButton");
            button.setAttribute("disabled", "");
        }

        if (count >= 4) {
            alert('stop');
        }


        count++;
        // console.log(button.parentNode.children[0].innerHTML);
        const tableBody = document.getElementById('tbody');
        const tr = document.createElement('tr');
        tr.innerHTML = `  
            <td>${count}</td>
            <td>${button.parentNode.children[0].innerHTML}</td>
        `;
        tableBody.appendChild(tr);
    })

})

function playerExpance() {
    const playerAmount = document.getElementById('p-expencess');
    const inputField = document.getElementById('input-field');

    const amount = inputField.value;
    const amountNum = parseInt(amount);
    const result = amountNum * count;
    // console.log(result);
    playerAmount.innerText = result;

    return result;
}

function totallCost() {
    const result=document.getElementById('result')
    const playerCost = playerExpance();
    const manager = document.getElementById('input-field2').value;
    const managerCost = parseInt(manager);
    // console.log(managerCost);
    const coach= document.getElementById('input-field3').value;
    const coachCost = parseInt(coach);
    const finalCost = playerCost + managerCost + coachCost;
    // console.log(playerCost+managerCost+coachCost);
    result.innerText = `${finalCost}`;
}



var selectInfo;
var textInfo;
var numberInfo;
counter=1;
var summIncome = 0;
var summExpense = 0;
var summBudget = 0;
var objDate = new Date().toLocaleString("en-us", { month: "long" });
var summPresetenge;
var budgetArray= []


var pressentage=document.querySelector('.present');
var budgetParagraph = document.querySelector(".budgetParagraph");
var budgetHeadingDiv = document.querySelector(".budgetHeading");
var budgetHeadingDivPara = document.createElement("p");
budgetHeadingDiv.appendChild(budgetHeadingDivPara);
budgetHeadingDivPara.className = "headingpara";
budgetHeadingDivPara.innerHTML = `BUD<span class="span5">G</span>ET for ${objDate} `;
var incomeDiv = document.querySelector("#incomeList");
var expeseDiv = document.querySelector("#expenceList");
var formBtn = document.querySelector("#btnSumbit");
var form = document.querySelector("#form");
form.addEventListener("submit", drawList);
var selectForm = document.querySelector("#selection");
selectForm.addEventListener("change", gatherInfo);
var inputText = document.querySelector("#inputText");
inputText.addEventListener("input", gatherInfoText);
var inputNumber = document.querySelector("#inputNumber");
inputNumber.addEventListener("input", gatherInfoNumber);

/*------------------functions-------------------*/
function gatherInfo(e) {
  selectInfo = e.target.value;
}

function gatherInfoText(e) {
  textInfo = e.target.value;
}

function gatherInfoNumber(e) {
  numberInfo = parseInt(e.target.value, 10);
}

function drawList(e) {
  e.preventDefault();
  var listCapsula = document.createElement("div");
  listCapsula.className='listCapsula1';
  var leftDiv = document.createElement("div");
  listCapsula.appendChild(leftDiv);
  var rightDiv = document.createElement("div");
  listCapsula.appendChild(rightDiv);
  var colorDiv = document.createElement("div");
  listCapsula.appendChild(colorDiv);
  colorDiv.id = "colorDiv";
  var paraText = document.createElement("p");
  leftDiv.appendChild(paraText);
  paraText.innerHTML = `${textInfo}`;
  paraText.id = "textDesc";
  var paraAmount = document.createElement("p");
  paraAmount.innerHTML = `${numberInfo}`;
  paraAmount.id = "amount";
  rightDiv.appendChild(paraAmount);
  var removeBtn = document.createElement("button");
  removeBtn.innerText = "remove";
  removeBtn.id = `removeBtn`;
  colorDiv.appendChild(removeBtn);
  removeBtn.addEventListener("click", e => {
    console.log(e.target.parentNode.parentNode.id, 'id kpsule')
    const idKapsula = e.target.parentNode.parentNode.id
    
      let removeElement = budgetArray.find(el=>el.id == idKapsula)
      let type = removeElement.type
      if (type === "income") {
      summIncome -= parseInt(removeElement.value)
      budgetArray.map(el=>el.id != idKapsula)
      var incomeSumm = document.querySelector(".incomeSumm");
    incomeSumm.innerText = `${summIncome}`;
    summBudget = summIncome - summExpense;
    budgetParagraph.innerText = `${summBudget}`;
    pressentage.innerText=`${Math.round((100*summExpense)/summIncome*10)/10}%`
    }else{
      summExpense -= parseInt(removeElement.value)
      budgetArray.map(el=>el.id != idKapsula)
      var expenseSumm = document.querySelector(".expenseSumm");
    expenseSumm.innerText = `${summExpense}`
    summBudget = summIncome - summExpense;
    budgetParagraph.innerText = `${summBudget}`;
    pressentage.innerText=`${Math.round((100*summExpense)/summIncome*10)/10}%`
    }

    console.log(summBudget, 'remove');
    
    if(summBudget>0){
      budgetParagraph.innerText=`+${summBudget}`;
      budgetParagraph.style.color='#00b894';
    }
    else if(summBudget==0){
      budgetParagraph.style.color = "#ffcb9a"
    }
    else{
      budgetParagraph.style.color = "#2d3436";
    }
  
    e.target.parentNode.parentNode.remove();
    
  });

  if (selectInfo === "income") {
    listCapsula.id=counter
    let income ={
      id:counter,
      type:'income',
      value:numberInfo,
      description:textInfo
    }
    budgetArray.push(income)
    counter++;


    summIncome += numberInfo;
    incomeDiv.appendChild(listCapsula);
    var incomeSumm = document.querySelector(".incomeSumm");
    incomeSumm.innerText = `${summIncome}`;
    summBudget = summIncome - summExpense;
    budgetParagraph.innerText = `${summBudget}`;
    summBudget = summIncome - summExpense;
    budgetParagraph.innerText = `${summBudget}`;
    pressentage.innerText=`${Math.round((100*summExpense)/summIncome*10)/10}%`

  } else if (selectInfo === "expense") {
    listCapsula.id=counter
    let expense ={
      id:counter,
      type:'expenses',
      value:numberInfo,
      description:textInfo
    }
    budgetArray.push(expense)
    counter++
   

    summExpense += numberInfo;
    expeseDiv.appendChild(listCapsula);
    var expenseSumm = document.querySelector(".expenseSumm");
    expenseSumm.innerText = `${summExpense}`;
    summBudget = summIncome - summExpense;
    budgetParagraph.innerText = `${summBudget}`;
    pressentage.innerText=`${Math.round((100*summExpense)/summIncome*10)/10}%`
  } else {
    return;
  }
  console.log(summBudget, 'increse');
  if(summBudget>0){
    budgetParagraph.innerText=`+${summBudget}`;
    budgetParagraph.style.color='#00b894';
  }
  else if(summBudget==0){
    budgetParagraph.style.color = "#2d3436"
  }
  else{
    budgetParagraph.style.color = "#e98074";
  }

document.getElementById("form").reset()
 
}

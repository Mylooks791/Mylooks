//serlectors
const dropDownList= document.querySelector(".drop-Down-List");    

//functions



//Event
dropDownList.addEventListener('click', showList);


function showList()
{
    console.log('hello world');
    dropDownList.classList.add('changeColor');

}
// let showList= () =>{
//     // alert('hello');
//     console.log('hello world');
// }
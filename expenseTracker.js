function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.expamount.value;
    const description = event.target.description.value;
    const categoryList = event.target.category.value;
    const obj = {
        name,
        description,
        categoryList
    };
    localStorage.setItem(obj.description,JSON.stringify(obj));
     showNewUserOnScreen(obj);
}
window.addEventListener('DOMContentLoaded',(event) => {
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
     showNewUserOnScreen(user);
    })
});
function showNewUserOnScreen(user){
    if(localStorage.getItem(user.description)!==null)
    {
        removeUserFromScreen(user.description);
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id =${user.description}>${user.name} -${user.description} -${user.categoryList}
    <button onclick = editUserDetails('${user.name}','${user.description}','${user.categoryList}')> Edit</button>
    <button onclick = deleteUser('${user.description}')> Delete </button> </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
function editUserDetails ( expamount, description, category) {
    document.getElementById('expamount').value = expamount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;

    deleteUser(description);
}
function deleteUser(description){
    localStorage.removeItem(description);
    removeUserFromScreen(description);
}
function removeUserFromScreen(description){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(description);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);
    }
}
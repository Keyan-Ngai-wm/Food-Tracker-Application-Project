/**
 * Created by session1 on 10/27/15.
 */
function newRow () {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var foodName = document.getElementById("foodName").value;
    var newContent = document.createTextNode(foodName);
    cell1.appendChild(newContent);

    var description = document.getElementById("foodName").value;
    var newContent2 = document.createTextNode(foodName);
    cell1.appendChild(newContent);

    var purchase = document.getElementById("foodName").value;
    var newContent3 = document.createTextNode(foodName);
    cell1.appendChild(newContent);

    var expire = document.getAnonymousElementById("expire").value;
    var newContent4 = document.createTextNode(expire);
    var newClass = document.getElementById("expire");

}
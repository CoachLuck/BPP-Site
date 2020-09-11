function search() {
    var input, filter, ul, li, a, i, body, tags, txtValue;
    input = document.getElementById("searchtext");
    filter = input.value.toUpperCase();
    ul = document.getElementById("textureList");
    li = ul.getElementsByClassName("col-md-3");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("card")[0];
        body = a.getElementsByClassName("card-body")[0];
        tags = body.getElementsByTagName("p")[0];
        txtValue = tags.textContent || tags.textArea
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
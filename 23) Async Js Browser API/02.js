<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Names</title>
</head>
<body>
    <button onclick="getNames()">Get user names</button>
    <div id="userNames"></div>
    <script>
        function getNames() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let users = JSON.parse(xhr.responseText);
                    document.getElementById('userNames').innerHTML = '';
                    let userList = '<ul>';
                    users.forEach(function(user) {
                        userList += '<li>' + user.name + '</li>';
                    });
                    userList += '</ul>';
                    document.getElementById('userNames').innerHTML = userList;
                } else {
                    console.error('Failed to fetch user data');
                }
            };
            xhr.send();
        }
    </script>
</body>
</html>

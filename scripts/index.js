<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nursultan Fun</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1em;
            text-align: center;
        }
        main {
            padding: 1em;
        }
        footer {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 1em;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Добро пожаловать на Nursultan Fun</h1>
    </header>
    <main>
        <p>Это пример простого сайта на JavaScript.</p>
        <button id="clickMe">Нажми меня</button>
        <p id="message"></p>
    </main>
    <footer>
        <p>&copy; 2024 Nursultan Fun</p>
    </footer>
    <script>
        document.getElementById('clickMe').addEventListener('click', function() {
            document.getElementById('message').textContent = 'Кнопка нажата!';
        });
    </script>
</body>
</html>



<html>
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>System zarządzania bazą danych</title>
  <link rel="stylesheet" href="public/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Changa&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</head>
<body>
  <header class="header">
    <div class="title">
      <a class="link--no-style" href="/">
        <h1 class="title__main">KSIĘGARNIA</h1>
        <p class="title__text">System zarządzania bazą danych</p>
      </a>
    </div>
 
    <nav class="navigation">
      <div class="navigation__max">
        <a class="navigation__link" href="/structure">Struktura</a><br>
        <a class="navigation__link" href="/login">Logowanie</a><br>
        <a class="navigation__link" href="/register">Rejestracja</a><br>
        <a class="navigation__link" href="/book">Książki<br>
        <a class="navigation__link" href="/user">Użytkownicy</a><br>
        <a class="navigation__link" href="/raport">Raport</a><br>
      </div>
    </nav>
  </header>
  
  <main class="page">
    <span>
      {{ content }}
    </span>
  </main>

  <footer class="footer">
    <p class="footer__author">autor: Dominik Purgał</p>
  </footer>
</body>
</html>
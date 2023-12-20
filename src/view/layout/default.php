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

  <?php
    use bookstore\App;

    function importJSComponent($folder_path) {
      $dir = App::$ROOT_DIR . '../public/';
      $files = glob($dir . $folder_path . '*.c.js');
      
      foreach ($files as $file) {
        $src = str_replace($dir, "/public/", $file);
        echo '<script type="module" src="' . $src . '"></script>';
      }

      $subdirectories = glob($folder_path . '*', GLOB_ONLYDIR);
      
      foreach ($subdirectories as $subdirectory) {
        importJSComponent($subdirectory . '/');
      }
    }
    
    importJSComponent('');
  ?>
</head>
<body>
  <c-header>
    <c-logo address="/user"></c-logo>
    <c-navigation>
      <c-link href="/structure">Struktura</c-link>
      <c-link href="/books">Książki</c-link>
      <c-link href="/users">Użytkownicy</c-link>
      <c-link href="/raport">Raport</c-link>
    </c-navigation>
  </c-header>

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
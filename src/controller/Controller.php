<?php

namespace bookstore\controller;

use bookstore\App;

class Controller {
  protected function render(string $view, array $params = [], string $layout = "default") {
    $content = $this->get_file(App::$ROOT_DIR."view/$view.php", $params);

    echo $this->get_layout($layout, $content);
  }

  protected function get_layout(string $layout, string $content): string {
    $layout = $this->get_file(App::$ROOT_DIR."view/layout/$layout.php"); 
    
    return str_replace("{{ content }}", $content, $layout);
  }

  protected function get_file(string $path, array $params = []): string {
    ob_start();
      $controller = $this;

      foreach ($params as $key => $value) {
        $$key = $value;
      }

      include_once $path;
    return ob_get_clean();
  }
}

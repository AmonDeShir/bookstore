<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd7f889faaf85939c62694871221a5a95
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'Bookstore\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Bookstore\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd7f889faaf85939c62694871221a5a95::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd7f889faaf85939c62694871221a5a95::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd7f889faaf85939c62694871221a5a95::$classMap;

        }, null, ClassLoader::class);
    }
}

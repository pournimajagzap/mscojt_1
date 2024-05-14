<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mscojt' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(e<^gZq8u;^8 eRcKh;dD+G(]^k85#B_7yaHpGO%(]4{mnlx?}!My?1Zfo.v]h?E' );
define( 'SECURE_AUTH_KEY',  '841At=v`.VQFH>l2b.Yc&Q3Gr6qkiSZ<cGwZnYmfIB1EfcF|%XJ}fWLcp7I_W>1$' );
define( 'LOGGED_IN_KEY',    'CPd]y[JL{s2W1kq BJ}l33qKV|xO]3Q49+nf=PqT{%uNR{^X?50DY{KY!=.pvUMq' );
define( 'NONCE_KEY',        'e`V5}Y<JZ;wFNAXKXiY+G&V33(^k7$weFxr:u*OqBu,&YF#y-Kx[!#-v;M^.bYFC' );
define( 'AUTH_SALT',        ']2A?e:E xkr6#HwCLrhq^v;CXxoKZTsJsfW#8;<.96]zy#;@6jBKR4[z_Ra{k[_x' );
define( 'SECURE_AUTH_SALT', '@y0e=%S5?U~~y9ei/3aHe,+iFS%knAcMooTr%aJi[9,t;E#0N{aG,/QS4Mo%yaoR' );
define( 'LOGGED_IN_SALT',   'en4]$r)}/56O$wt?R4tjM^ Ii@qJ(eq5m%]nw1+H~ya !QL7gH#&y^cWYI&3L9}u' );
define( 'NONCE_SALT',       '5bjV]QDg9HPx7GSUb2]u#M_|}U;z*fE4Sj3U7IzKvj%1k:UsGn~&1@L[?Rm{NgNo' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

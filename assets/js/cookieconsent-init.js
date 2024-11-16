// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'es',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    


    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'es': {
            consent_modal: {
                title: 'Tu privacidad nos importa.',
                description: 'En Insider Partners usamos cookies esenciales para garantizar el correcto funcionamiento de nuestra web y cookies de seguimiento para comprender cómo interactúas con ella. Estas últimas se instalarán bajo previo consentimiento. <button class="cc-link" type="button" data-cc="c-settings">Configurar cookies</button>.',
                primary_btn: {
                    text: 'Aceptar',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Rechazar',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Configuración de Cookies',
                save_settings_btn: 'Guardar configuración',
                accept_all_btn: 'Aceptar todas',
                reject_all_btn: 'Rechazar todas',
                close_btn_label: 'Cerrar',
                cookie_table_headers: [
                    {col1: 'Nombre'},
                    {col2: 'Dominio'},
                    {col3: 'Vencimiento'},
                    {col4: 'Descripción'}
                ],
                blocks: [
                    {
                        title: 'Uso de Cookies',
                        description: 'Utilizamos cookies para garantizar las funcionalidades básicas del sitio web y mejorar su experiencia en línea. A continuación, puede seleccionar las que desee aceptar o bloquear, según su categoría. Para más detalles sobre las cookies y otros datos sensibles, por favor lea la <a class="cc-link" href="https://www.hotelesdisney.com/privacidad/" target="_blank">política de privacidad</a> completa.'
                    }, {
                        title: 'Cookies estrictamente necesarias',
                        description: 'Estas cookies son esenciales para el correcto funcionamiento de nuestro sitio web. Sin estas cookies, nuestro sitio web no funcionaría correctamente.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: 'cc_cookie',       // match all cookies starting with "_ga"
                                col2: 'www.insider.partners',
                                col3: '6 meses',
                                col4: 'Banner Cookies',
                                is_regex: true
                            }
                        ]
                    }, {
                        title: 'Cookies de rendimiento y analítica',
                        description: 'Estas cookies nos permiten evaluar las acciones que se han llevado a cabo en nuestro sitio web.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 años',
                                col4: 'Identifica al usuario',
                                is_regex: true
                            }
                        ]
                    }, {
                        title: 'Más información',
                        description: 'Para cualquier consulta en relación con nuestra política de cookies y sus opciones, póngase en <a class="cc-link" href="mailto:lopd@insiderpartners.com" target="_blank">contacto con nosotros</a>.',
                    }
                ]
            }
        }
    }
});
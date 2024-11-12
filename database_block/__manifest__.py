# Copyright 2020 Eugene Molotov <https://it-projects.info/team/em230418>
# License MIT (https://opensource.org/licenses/MIT).

{
    "name": """Block backend UI""",
    "summary": """This technical module allows blocking backend access and display the message""",
    "category": "Extra Tools",
    "images": [],
    "version": "16.0.1.0.0",
    "application": False,
    "author": "IT-Projects LLC, Eugene Molotov",
    "support": "it@it-projects.info",
    "website": "https://github.com/it-projects-llc/access-addons",
    "license": "Other OSI approved licence",  # MIT
    "depends": ["web"],
    "external_dependencies": {"python": [], "bin": []},
    "data": [],
    "demo": [],
    "post_load": None,
    "pre_init_hook": None,
    "post_init_hook": None,
    "uninstall_hook": None,
    "auto_install": False,
    "installable": True,
    "assets": {
        "web.assets_backend": [
            "database_block/static/src/css/main.css",
            "database_block/static/src/js/main.esm.js",
            "database_block/static/src/xml/main_esm.xml",
        ],
    },
}

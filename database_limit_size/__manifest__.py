# Copyright 2020 Eugene Molotov <https://it-projects.info/team/em230418>
# License MIT (https://opensource.org/licenses/MIT).

{
    "name": """Database Limit Size""",
    "summary": """This module allows blocking backend access when database limit is exceeded""",
    "category": "Extra Tools",
    "images": [],
    "version": "18.0.1.0.0",
    "application": False,
    "author": "IT-Projects LLC, Eugene Molotov",
    "support": "it@it-projects.info",
    "website": "https://github.com/it-projects-llc/access-addons",
    "license": "Other OSI approved licence",  # MIT
    "depends": ["database_block"],
    "external_dependencies": {"python": [], "bin": []},
    "data": [],
    "demo": [],
    "qweb": [],
    "post_load": None,
    "pre_init_hook": None,
    "post_init_hook": None,
    "uninstall_hook": None,
    "auto_install": False,
    "installable": True,
}

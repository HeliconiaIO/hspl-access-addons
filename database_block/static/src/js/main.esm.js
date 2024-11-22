/** @odoo-module **/

import { ActionContainer } from "@web/webclient/actions/action_container";
import { patch } from "@web/core/utils/patch";
import { session } from "@web/session";
import { useService } from "@web/core/utils/hooks";
import { Component, xml, useState, onMounted, markup } from "@odoo/owl";
import { renderToString } from "@web/core/utils/render";
import { _t } from "@web/core/l10n/translation";

patch(ActionContainer.prototype, {
    setup() {
        super.setup(...arguments);
        onMounted(() => this._mounted());
    },
    _mounted() {
        if (this.databaseBlockMessage) {
            console.log("this.databaseBlockMessage", this.databaseBlockMessage, markup(this.databaseBlockMessage))
            const blockMessage = renderToString(
                "database_block.BlockMessage",
                {
                    message: markup(_t(this.databaseBlockMessage)),
                }
            );
//            $.blockUI({ message: blockMessage }); TODO : Improved Block MSG
        }
    },
    get databaseBlockMessage() {
        if (!session.database_block_is_warning && session.database_block_message) {
            return session.database_block_message;
        }
        return null;
    },
    buyCredits() {
        // Open the link in a new tab when the message is clicked
        window.open(this.url, "_blank");
        this.props.close();
    },
});

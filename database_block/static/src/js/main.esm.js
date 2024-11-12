/** @odoo-module **/
import { ActionContainer } from "@web/webclient/actions/action_container";
import { NavBar } from "@web/webclient/navbar/navbar";
import { patch } from "web.utils";
import { session } from "@web/session";
import { Component, xml, useState, onMounted } from "@odoo/owl";
import { renderToString } from "@web/core/utils/render";
const { Markup } = require('web.utils');
const { _t } = require('web.core');

patch(ActionContainer.prototype, "ametras_document_sbs_preview.ActionContainer", {
    setup() {
        this._super();
        onMounted(() => this._mounted());
    },
    _mounted() {
        if (this.databaseBlockMessage) {
            console.log("this.databaseBlockMessage", this.databaseBlockMessage, Markup(this.databaseBlockMessage))
            const blockMessage = renderToString(
                "database_block.BlockMessage",
                {
                    message: Markup(_t(this.databaseBlockMessage)),
                }
            );
            $.blockUI({ message: blockMessage });
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

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
    async _mounted() {
        const blockMessage = this.databaseBlockMessage;

        const document = this.root?.ownerDocument || globalThis.document;
        if (document.readyState === "loading") {
            await new Promise((resolve) =>
                document.addEventListener("DOMContentLoaded", resolve)
            );
        }

        this.root ||= document.body;

        if (blockMessage) {
            const renderedMessage = renderToString("database_block.BlockMessage", {
                message: markup(_t(blockMessage)),  // Translate the block message text
            });
            this.root.innerHTML = renderedMessage;
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

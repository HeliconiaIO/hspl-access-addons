from odoo import _, api, fields, models
from odoo.exceptions import ValidationError


class ResUsers(models.Model):
    _inherit = "res.users"

    is_excluded_from_limiting = fields.Boolean(default=False)

    @api.model_create_multi
    def create(self, vals_list):
        for vals in vals_list:
            if vals.get("is_excluded_from_limiting") and not self.env.is_superuser():
                raise ValidationError(
                    _(
                        "Only superuser can create user with positive is_excluded_from_limiting value"
                    )
                )
        return super(ResUsers, self).create(vals)

    def write(self, vals):
        if vals.get("is_excluded_from_limiting") and not self.env.is_superuser():
            raise ValidationError(
                _(
                    "Only superuser can set user with positive is_excluded_from_limiting value"
                )
            )
        return super(ResUsers, self).write(vals)

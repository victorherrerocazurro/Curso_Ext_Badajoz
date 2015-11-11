Ext.onReady(function() {
    Ext.apply(
    	Ext.form.field.VTypes, {
        pepito: function(val, field) {
            var date = field.parseDate(val);

            if (!date) {
                return false;
            }
            if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                var start = field.up('form').down('#' + field.startDateField);
                start.setMaxValue(date);
                start.validate();
                this.dateRangeMax = date;
            }
            else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                var end = field.up('form').down('#' + field.endDateField);
                end.setMinValue(date);
                end.validate();
                this.dateRangeMin = date;
            }
            return true;
        },

        pepitoText: 'Start date must be less than end date'
        
    });

    var dr = Ext.create('Ext.FormPanel', {
        renderTo: Ext.getBody(),
        frame: true,
        title: 'Date Range',
        bodyPadding: '5px 5px 0',
        width: 350,
        fieldDefaults: {
            labelWidth: 125,
            msgTarget: 'side',
            autoFitErrors: false
        },
        defaults: {
            width: 300
        },
        defaultType: 'datefield',
        items: [
            {
                fieldLabel: 'Start Date',
                name: 'startdt',
                id: 'startdt',
                vtype: 'pepito',
                endDateField: 'enddt' // id of the end date field
            },
            {
                fieldLabel: 'End Date',
                name: 'enddt',
                id: 'enddt',
                vtype: 'pepito',
                startDateField: 'startdt' // id of the start date field
            }
        ]
    });
});
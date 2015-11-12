Ext.define('WeatherPoint', {
    extend: 'Ext.data.Model',
    fields: ['temperature', 'date']
});

var store = Ext.create('Ext.data.Store', {
    model: 'WeatherPoint',
    data: [
        { temperature: 58, date: new Date(2011, 1, 8) },
        { temperature: 63, date: new Date(2011, 1, 9) },
        { temperature: 73, date: new Date(2011, 1, 10) },
        { temperature: 78, date: new Date(2011, 1, 11) },
        { temperature: 81, date: new Date(2011, 1, 12) }
    ]
});

Ext.onReady(function() {

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 400,
        height: 300,
        store: store,
        axes: [
            {
                title: 'Temperature',
                type: 'Numeric',
                position: 'left',
                fields: ['temperature'],
                minimum: 0,
                maximum: 100
            },
            {
                title: 'Time',
                type: 'Time',
                position: 'bottom',
                fields: ['date'],
                dateFormat: 'M d',
            }
        ],
        series: [
            {
                type: 'line',
                xField: 'date',
                yField: 'temperature',
                highlight: {
                    size: 7,
                    radius: 7
                },
                markerConfig: {
                    type: 'cross',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                },
                tips: {
                      trackMouse: true,
                      width: 140,
                      height: 28,
                      renderer: function(storeItem, item) {
                        this.setTitle(
                            storeItem.get('temperature') + ': ' + 
                            storeItem.get('date'));
                      }
                }
            }
        ]
    });
});
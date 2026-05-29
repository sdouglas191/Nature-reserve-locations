var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_NaturesReserves_2 = new ol.format.GeoJSON();
var features_NaturesReserves_2 = format_NaturesReserves_2.readFeatures(json_NaturesReserves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NaturesReserves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturesReserves_2.addFeatures(features_NaturesReserves_2);
var lyr_NaturesReserves_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturesReserves_2, 
                style: style_NaturesReserves_2,
                popuplayertitle: 'Natures Reserves',
                interactive: true,
    title: 'Natures Reserves<br />\
    <img src="styles/legend/NaturesReserves_2_0.png" /> No<br />\
    <img src="styles/legend/NaturesReserves_2_1.png" /> Yes<br />\
    <img src="styles/legend/NaturesReserves_2_2.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_NaturesReserves_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_NaturesReserves_2];
lyr_NaturesReserves_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'VisitorCen': 'VisitorCen', 'Size (hec)': 'Size (hec)', 'Notes': 'Notes', 'Cafe': 'Cafe', 'Type': 'Type', 'Habitats': 'Habitats', 'Website': 'Website', 'Managed by': 'Managed by', 'Toilets': 'Toilets', });
lyr_NaturesReserves_2.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'VisitorCen': 'TextEdit', 'Size (hec)': 'TextEdit', 'Notes': 'TextEdit', 'Cafe': 'TextEdit', 'Type': 'TextEdit', 'Habitats': 'TextEdit', 'Website': 'TextEdit', 'Managed by': 'TextEdit', 'Toilets': 'TextEdit', });
lyr_NaturesReserves_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'VisitorCen': 'inline label - visible with data', 'Size (hec)': 'inline label - visible with data', 'Notes': 'inline label - visible with data', 'Cafe': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Habitats': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Managed by': 'inline label - visible with data', 'Toilets': 'inline label - visible with data', });
lyr_NaturesReserves_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});